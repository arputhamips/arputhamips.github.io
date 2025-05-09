#include <Wire.h>
#include <Adafruit_TinyUSB.h>  // For USB HID support
#include <bluefruit.h>
#include "AS5600.h"

AS5600 as5600;  // Create AS5600 object
BLEHidAdafruit blehid;  // Create BLE HID object

#define SCROLL_SENSITIVITY 5   // Adjust scroll sensitivity
int16_t last_angle = 0;  // Store last angle

void setup() {
    Serial.begin(2000000);
    Wire.begin(); // Initialize I2C

    Serial.println("Searching for AS5600 sensor...");

    // Wait until AS5600 is detected at address 0x36
    while (!as5600.isConnected()) {
        Serial.println("AS5600 not found at 0x36. Check wiring...");
        delay(1000);  // Retry every second
    }

    Serial.println("AS5600 detected at 0x36!");
    as5600.begin();  // Initialize AS5600 sensor

    // Initialize BLE
    Bluefruit.begin();
    Bluefruit.setTxPower(4);
    Bluefruit.setName("BLE Scroll Wheel");

    // Start HID service
    blehid.begin();
    blehid.setKeyboardLedCallback(NULL);

    // Advertise HID service
    Bluefruit.Advertising.addFlags(BLE_GAP_ADV_FLAGS_LE_ONLY_GENERAL_DISC_MODE);
    Bluefruit.Advertising.addAppearance(BLE_APPEARANCE_HID_MOUSE);
    Bluefruit.Advertising.addService(blehid);
    Bluefruit.Advertising.start();

    Serial.println("BLE HID Mouse Ready!");
}

void loop() {
    int16_t angle = as5600.readAngle();  // Read current angle in raw units (0-4095)
    float angle_deg = angle * AS5600_RAW_TO_DEGREES;  // Convert to degrees

    // Serial.print("Angle: ");
    Serial.println(angle_deg);
    // Serial.println("°");

    int16_t delta = angle - last_angle;  // Calculate change in angle

    // Handle angle wraparound (from 4095 to 0 or 0 to 4095)
    if (delta > 2048) delta -= 4096;
    if (delta < -2048) delta += 4096;

    if (abs(delta) > 1) {  // Small threshold to avoid noise
        int scroll_amount = delta / 10;  // Scale movement
        blehid.mouseScroll(scroll_amount);  // Send scroll event
        last_angle = angle;  // Update last position
    }

    // delay(10);  // Adjust for smooth scrolling
}