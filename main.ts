/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sami Osman
 * Created on: Nov 2025
 * This program allows pins 13 through 15 to be used for RGB LED
*/

let red = DigitalPin.P13
let green = DigitalPin.P14
let blue = DigitalPin.P15

// Helper function
function showColor(r: number, g: number, b: number) {
    pins.digitalWritePin(red, r)
    pins.digitalWritePin(green, g)
    pins.digitalWritePin(blue, b)
}

basic.forever(function () {
    if (input.buttonA.isPressed()) {

        // Red
        showColor(1, 0, 0)
        basic.pause(1000)

        // Green
        showColor(0, 1, 0)
        basic.pause(1000)

        // Blue
        showColor(0, 0, 1)
        basic.pause(1000)

        // Off
        showColor(0, 0, 0)
    }
})

