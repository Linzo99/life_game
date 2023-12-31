# Conway's Game of Life Implementation

## Overview

This provides an overview of the implementation solution for Conway's Game of Life, from TL221 Challenge. The Game of Life is a cellular automaton devised by the mathematician John Conway, and it's known for its simple yet fascinating rules that govern the evolution of the system.

<table>
  <tbody>
    <tr>
      <td><img src="./img/img1.png" /></td>
      <td><img src="./img/img2.png" /></td>
    </tr>
  </tbody>
</table>

## Implementation Details

### Language Used

This solution was implemented using pure javascript **NO FRAMEWORK**

### Code Structure

```sh
├── README.md      /* The README file */
├── img
│   ├── img1.png
│   └── img2.png
├── index.html     /* HTML entry file */
└── scripts
    ├── main.js    /* Implementation using VanillaJS */
    └── utils.js   /* Some helper functions */
```

### Functionalities in this implementation

- **Play:** Click the play icon (green) to start
- **Pause:** Click the pause icon (red) to pause
- **Reinitialize:** Click the reinitialize icon (yellow) to reinitialize the board
- **Change Speed:** You can change the speed using the slider (blue)
- **Change Size:** You can change the board size using the select
- **Toggle Cell:** Clicking into a cell will toggle that cell life (alive/dead) after each toggle the game will Pause

### Rules of Conway's Game of Life

The following are the basic rules that govern the evolution of the system:

- Any live cell with fewer than two live neighbors dies (underpopulation).
- Any live cell with two or three live neighbors survives to the next generation.
- Any live cell with more than three live neighbors dies (overpopulation).
- Any dead cell with exactly three live neighbors becomes a live cell (reproduction).

### Running the Code

To run the Game of Life implementation:

1. Visit this [link](https://life-game-ashen.vercel.app/)  OR
2. Clone this repository and run locally

```bash
git clone https://github.com/Linzo99/life_game.git
```

Open the `index.html` if your browser support it or use a [live server](https://www.npmjs.com/package/live-server)
