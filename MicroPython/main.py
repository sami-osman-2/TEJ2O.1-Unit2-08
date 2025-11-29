"""
Created by: Sami Osman
Created on: Nov 2025
This module is a Micro:bit MicroPython program
"""

from microbit import *

# assign pins to colours
red = pin13
green = pin14
blue = pin15


# colour setters
def show_colour(r, g, b):
    red.write_digital(r)
    green.write_digital(g)
    blue.write_digital(b)


while True:
    if button_a.is_pressed():

        # Red
        show_colour(1, 0, 0)
        sleep(1000)

        # Green
        show_colour(0, 1, 0)
        sleep(1000)

        # Blue
        show_colour(0, 0, 1)
        sleep(1000)

        # Turn off LED
        show_colour(0, 0, 0)
