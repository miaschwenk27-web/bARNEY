function _181 () {
	
}
function backward () {
    nezhaV2.move(nezhaV2.MotorPostion.M1, 50, nezhaV2.MovementDirection.CW, 566, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    nezhaV2.move(nezhaV2.MotorPostion.M2, 50, nezhaV2.MovementDirection.CCW, 566, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
}
function _180 () {
    nezhaV2.move(nezhaV2.MotorPostion.M1, 50, nezhaV2.MovementDirection.CW, 566, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    nezhaV2.move(nezhaV2.MotorPostion.M2, 50, nezhaV2.MovementDirection.CCW, 566, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    forward()
    nezhaV2.stop(nezhaV2.MotorPostion.M1)
    nezhaV2.stop(nezhaV2.MotorPostion.M2)
}
function turn_left () {
    nezhaV2.move(nezhaV2.MotorPostion.M1, 30, nezhaV2.MovementDirection.CW, 174, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    nezhaV2.move(nezhaV2.MotorPostion.M2, 30, nezhaV2.MovementDirection.CW, 174, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
}
function forward () {
    nezhaV2.move(nezhaV2.MotorPostion.M1, 50, nezhaV2.MovementDirection.CCW, 566, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    nezhaV2.move(nezhaV2.MotorPostion.M2, 50, nezhaV2.MovementDirection.CW, 566, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
}
function turn_right () {
    nezhaV2.move(nezhaV2.MotorPostion.M1, 30, nezhaV2.MovementDirection.CCW, 174, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    nezhaV2.move(nezhaV2.MotorPostion.M2, 30, nezhaV2.MovementDirection.CCW, 174, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
}
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
_181()
basic.forever(function () {
	
})
