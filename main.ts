let f = 0
let AR = 0
let t = 0
let az = 0
let ay = 0
let ax = 0
let t2 = 0
let z = 0
let y = 0
let x = 0
let t1 = 0
basic.showIcon(IconNames.Heart)
serial.writeLine("hola")
radio.setGroup(1)
basic.forever(function () {
    t1 = input.runningTime()
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    t2 = input.runningTime()
    ax = x / 1000 * 1 * 1
    ay = y / 1000 * 1 * 1
    az = z / 1000 * 1 * 1
    t = t2 - t1
    AR = Math.sqrt(ax ** 2 + (ay ** 2 + az ** 2)) - 1
    f += input.acceleration(Dimension.Strength)
    basic.pause(100)
    radio.sendValue("A", AR)
    radio.sendValue("X", x)
    radio.sendValue("Y", y)
    radio.sendValue("Z", z)
    serial.writeValue("AR", AR)
    serial.writeValue("x", x)
    serial.writeValue("y", y)
    serial.writeValue("z", z)
})
