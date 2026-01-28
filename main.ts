/**
 * Night = 0-90
 * 
 * Dusk = 90-150
 * 
 * Day = 150+
 */
function backward () {
    nezhaV2.move(nezhaV2.MotorPostion.M1, 50, nezhaV2.MovementDirection.CW, 566, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    nezhaV2.move(nezhaV2.MotorPostion.M2, 50, nezhaV2.MovementDirection.CCW, 566, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
}
function _180 () {
    nezhaV2.move(nezhaV2.MotorPostion.M1, 50, nezhaV2.MovementDirection.CCW, 367, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    nezhaV2.move(nezhaV2.MotorPostion.M2, 50, nezhaV2.MovementDirection.CCW, 367, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    basic.pause(2000)
    forward()
    basic.pause(2000)
    nezhaV2.stop(nezhaV2.MotorPostion.M1)
    nezhaV2.stop(nezhaV2.MotorPostion.M2)
}
function turn_left () {
    nezhaV2.move(nezhaV2.MotorPostion.M1, 30, nezhaV2.MovementDirection.CW, 176, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    nezhaV2.move(nezhaV2.MotorPostion.M2, 30, nezhaV2.MovementDirection.CW, 176, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
}
function led_display () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(5)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(5)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(5)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(5)
    basic.showIcon(IconNames.Square)
    basic.pause(5)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(5)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(5)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(5)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
function forward () {
    nezhaV2.move(nezhaV2.MotorPostion.M1, 50, nezhaV2.MovementDirection.CCW, 566, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    nezhaV2.move(nezhaV2.MotorPostion.M2, 50, nezhaV2.MovementDirection.CW, 566, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
}
function turn_right () {
    nezhaV2.move(nezhaV2.MotorPostion.M1, 30, nezhaV2.MovementDirection.CCW, 177, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    nezhaV2.move(nezhaV2.MotorPostion.M2, 30, nezhaV2.MovementDirection.CCW, 177, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
}
basic.forever(function () {
    PlanetX_Display.showUserNumber(1, PlanetX_Basic.lightSensor(PlanetX_Basic.AnalogRJPin.J1))
    if (PlanetX_Basic.lightSensor(PlanetX_Basic.AnalogRJPin.J1) <= 200) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
    } else if (PlanetX_Basic.lightSensor(PlanetX_Basic.AnalogRJPin.J1) < 500) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
