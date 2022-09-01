function roll () {
    numbers[randint(0, 5)].showImage(0)
}
let numbers: Image[] = []
input.onGesture(Gesture.Shake, roll)
input.onButtonPressed(Button.A, roll)
numbers = [
images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `),
images.createImage(`
    . . . . .
    . # . . .
    . . . . .
    . . . # .
    . . . . .
    `),
images.createImage(`
    # . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . #
    `),
images.createImage(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `),
images.createImage(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `),
images.createImage(`
    # . . . #
    . . . . .
    # . . . #
    . . . . .
    # . . . #
    `)
]
