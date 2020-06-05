function doSomething () {
    QUISTION = game.askForString("WHAT IS " + SUM + " + " + ADDED_TO + "?")
    START()
}
function START () {
    INPUT = 0
    SUM = Math.randomRange(0, 10)
    ADDED_TO = Math.randomRange(0, 10)
    answer = SUM + ADDED_TO
    doSomething()
}
let answer = 0
let INPUT = 0
let ADDED_TO = 0
let SUM = 0
let QUISTION = ""
START()
