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
function forward () {
    nezhaV2.move(nezhaV2.MotorPostion.M1, 50, nezhaV2.MovementDirection.CCW, 566, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    nezhaV2.move(nezhaV2.MotorPostion.M2, 50, nezhaV2.MovementDirection.CW, 566, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
}
function turn_right () {
    nezhaV2.move(nezhaV2.MotorPostion.M1, 30, nezhaV2.MovementDirection.CCW, 177, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    nezhaV2.move(nezhaV2.MotorPostion.M2, 30, nezhaV2.MovementDirection.CCW, 177, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
}
for (let index = 0; index < 5; index++) {
    forward()
    basic.pause(2000)
    backward()
    basic.pause(2000)
    turn_left()
    basic.pause(2000)
    forward()
    basic.pause(2000)
    turn_right()
    basic.pause(2000)
    forward()
    basic.pause(2000)
    _180()
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.clearScreen()
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    basic.clearScreen()
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.clearScreen()
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    basic.clearScreen()
    basic.showIcon(IconNames.SmallDiamond)
}
basic.forever(function () {
	
})
