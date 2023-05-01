let star = 0
let elapsed = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    star = input.runningTime()
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - star
    score = elapsed - Math.abs(7000)
    basic.showNumber(score)
})
