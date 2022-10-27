let y = 0
let x = 0
joystickbit.initJoystickBit()
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 200) {
        x += 1
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 800) {
        x += -1
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 200) {
        y += 1
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 800) {
        y += -1
    }
    if (x > 4) {
        x = 0
    } else if (x < 0) {
        x = 4
    } else if (y > 4) {
        y = 0
    } else if (y < 0) {
        y = 4
    }
    led.plot(x, y)
    basic.pause(500)
    basic.clearScreen()
})
