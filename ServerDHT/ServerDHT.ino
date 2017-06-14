
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>

#include "DHT.h"

#define DHTTYPE DHT11

unsigned long current;
unsigned long past = 0;
const int interval = 1800000;

const char* ssid = "Jonatas";
const char* password = "62584517";

const int dhtPin = 13;
DHT dht(dhtPin, DHTTYPE);

void postData() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  String body = String("{\"humidity\": ") + String(h) + String(",\"temperature\": ") + String(t) + String("}");
  
  Serial.print("Umidade: ");
  Serial.print(h);
  Serial.print(" | Temperatura: ");
  Serial.println(t);

  HTTPClient http;
  
  http.begin("http://192.168.0.103:3000/things/dht");
  http.addHeader("Content-Type", "application/json");
  int httpCode = http.POST(body);
  String payload = http.getString();
  http.end();
}

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.println("");

  dht.begin();

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print("Connecting...");
  }

  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  postData();
}

void loop(void) {
  current = millis();
  if (current - past >= interval) {
    postData();
    past = millis();
  }
}
