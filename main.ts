input.onGesture(Gesture.Shake, function () {
    numbers[randint(0, 5)].showImage(0)
})
let numbers: Image[] = []
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
