let interval;

class Grid {
  constructor(size, speed) {
    this.size = size;
    this.speed = speed;
    this.grid = null;
    this.root = document.getElementById("grid");

    this.init = this.init.bind(this);
    this.start = this.start.bind(this);
    this.update = this.update.bind(this);
    this.pause = this.pause.bind(this);
    this.restart = this.restart.bind(this);
    this.setSpeed = this.setSpeed.bind(this);
    this.setSize = this.setSize.bind(this);
    // initial render
    this.init();
  }

  init() {
    clearInterval(interval);
    const tmp = makeArray(this.size);
    const fillSize = parseInt(this.size ** 2 * (1 / 4));
    for (let i = 0; i <= fillSize; i++) tmp[i] = 1;
    // suffle
    tmp.sort(() => (Math.random() > 0.5 ? 1 : -1));
    this.grid = listToMatrix(tmp, this.size);
    this.render();
  }

  start() {
    clearInterval(interval);
    interval = setInterval(this.update, 2000 / this.speed);
  }

  update() {
    this.grid = nextState(this.grid, this.size);
    this.render();
  }

  pause() {
    clearInterval(interval);
  }

  restart() {
    clearInterval(interval);
    this.init();
  }

  toggleAlive(i, j) {
    this.pause();
    this.grid[i][j] = this.grid[i][j] ^ 1;
    this.render();
  }

  // setters here
  setSpeed(val) {
    this.pause();
    this.speed = val;
    this.start();
  }

  setSize(val) {
    this.size = val;
    this.init();
  }

  render() {
    const gridContainer = document.createElement("div");
    gridContainer.className = "flex flex-col";

    this.grid.forEach((row, i) => {
      const rowDiv = document.createElement("div");
      rowDiv.className = "flex";

      row.forEach((val, j) => {
        const span = document.createElement("span");
        span.onclick = () => this.toggleAlive(i, j);
        span.className = `${
          val == 1 ? "bg-green-600 " : ""
        }cursor-pointer w-2 h-2 md:h-4 md:w-4 border-[.2px] border-gray-400/80 m-0 p-0`;
        rowDiv.appendChild(span);
      });
      gridContainer.appendChild(rowDiv);
    });
    this.root.innerHTML = "";
    this.root.appendChild(gridContainer);
  }
}

const GameGrid = new Grid(35, 20);
