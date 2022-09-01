def roll():
    numbers[randint(0, 5)].show_image(0)
numbers: List[Image] = []
input.on_gesture(Gesture.SHAKE, roll)
input.on_button_pressed(Button.A, roll)
numbers = [images.create_image("""
        . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
    """),
    images.create_image("""
        . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
    """),
    images.create_image("""
        # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
    """),
    images.create_image("""
        . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
    """),
    images.create_image("""
        # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
    """),
    images.create_image("""
        # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
    """)]