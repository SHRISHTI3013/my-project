game.splash("enter the number ")
let number = game.askForNumber("")
let remain = number % 2
if (remain == 0) {
    if (true) {
        game.splash("" + number + "is even number")
    } else {
        game.splash("" + number + "is odd number")
    }
    game.splash("number is negative")
}
