# Technical Challenge 3: Interactivity

For this challenge, you will extend the current sketch to add a second shape. You'll also include some keyboard *and* mouse interaction. Experiment and make something interesting that you can show next week!

# Instructions

Clone this repo and edit the `sketch.js` file to do the following:

## Part 1: Add a Second Moving Shape

Add another moving shape that bounces like the existing one.

1. Start by changing all of the current variable names to include a `1` after them. For example: `x` becomes `x1`, `xSpeed` becomes `x1Speed` (or `xSpeed1`). 
2. Make sure the bouncing ball sketch still works. If it's broken, you have forgotten to change one or more of the variables.
3. Copy and paste the variable declarations at the top and change them to have the number `2` instead of `1`. These new variables will hold information about the new shape.
4. Copy and paste the logic inside the `draw()` function, remembering to again change the `1`-variables to use the number `2` instead.

Once you've got the two circles moving around, play with the visuals and make it your own. Try other shapes, sizes, colors, or whatever else you can think of. Make notes of anything you tried but couldn't get to work.

> [!NOTE]
> Changing the speed values can make the two objects interact/overlap in interesting ways, and 
> changing the "alpha" of a color (or a grayscale value) will show the overlap differently 
> than solid colors.

## Part 2: Add Some Interacivity

> [!TIP]  
> This is probably a good time to commit your changes from Part 1!

Modify the sketch to add some interactivity using both the keyboard *and* the mouse.

Some ideas:

* Can you change the size, speed, color, or other values based on the mouse position?
* Can you make the sketch respond to *any* keyboard input?
* What about *specific* keyboard keys? Maybe two different keys can increase or decrease some value by 10.
* In addition to changing values as described above, can you make something switch on/off or appear/disappear based on a mouse click?

## Submit the Assignment

1. Commit any remaining changes to your local repo
2. Sync/`Push to `GitHub

> [!IMPORTANT]  
> Don't forget to turn on GitHub Pages for your repo (like you did in the previous Technical Challenge). It's always helpful to include the URL in your repo's "About" section as well.
