## Wix Interview assignment
This is an assignment for Wix frontend position.
Wish me luck 😊
# The assignment:

## Wix Minesweeper Example
This is a working example for a static Javascript minesweeper,
The task is to implement the classic minesweeper game in javascript.
You should use ReactJS (not implemented here).
The aim of the exercise is to test the coding standards so please make sure the code is organized and clean,

### Rules of the game:
1.	Board should be of configurable width, height and mines number.
2.	The board should support width and height of up to 300 (300x300 cells),
3.	Should display an indication of the number of remaining flags above the board.
4.	Click on cell reveals the value underneath it:

    * If it is a mine, you lose.

    * Otherwise, display the number of mines around the cell (or empty if there are no mines around)

    * If there are no mines around the cell, reveal all cells around it and and all cells around any adjacent empty cell.
5.	Shift button + Left Mouse Click puts or removes a flag on that cell. (and updates the number of remaining flags)
6.	Display alert if player tries to add a flag but he does not have any remaining flags.
7.	A flagged cell cannot be revealed (click does nothing) until the flag is removed.
8.	If all mines are flagged correctly, you win.

### Bonus Tasks: 
1.	Add tests (specify in the readme.md file how can we run them)
2.	Create a Superman mode that reveals the location of the bombs (the working example mentioned below supports it)

### Working Example:
You can find an example of a working implementation at  https://wix-incubator.github.io/minesweeper/ (the source is found at https://github.com/wix-incubator/minesweeper)

**Note that it does not support a large board (even 100x100), not written in React and looks quite ugly (we didn’t want to give you any design ideas).**

### Got any Questions?
Questions about the task can submitted as an issue in the repository: https://github.com/wix-incubator/minesweeper/issues 

### Submitting Your Solution
Please upload your code to Github or Plunkr, it should include the sources as well as a runable example (as a Github Page in github.io or Plunkr), and send the link to your contact person at Wix.

**Since many people are struggling with Github Pages, you can refer to the [following repository](https://github.com/carmelc/angular-cli-example) for an example with some explanations**

**Good Luck!**
