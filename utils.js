function makeArray(width) {
  return Array(width ** 2).fill(0);
}

function nextState(grid, width) {
  const newGrid = [...grid];
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width; j++) {
      const score = aliveNeighbors(i, j, grid);
      if (grid[i][j] === 1) {
        if (score < 2 || score > 3) newGrid[i][j] = 0;
      } else if (score === 3) newGrid[i][j] = 1;
    }
  }
  return newGrid;
}

function aliveNeighbors(i, j, grid) {
  const alive = [];
  alive.push(getElement(i - 1, j, grid));
  alive.push(getElement(i - 1, j + 1, grid));
  alive.push(getElement(i - 1, j - 1, grid));
  alive.push(getElement(i, j + 1, grid));
  alive.push(getElement(i, j - 1, grid));
  alive.push(getElement(i + 1, j, grid));
  alive.push(getElement(i + 1, j + 1, grid));
  alive.push(getElement(i + 1, j - 1, grid));
  return alive.reduce((a, b) => a + b);
}

function listToMatrix(list, size) {
  return list.reduce(
    (rows, key, index) =>
      (index % size == 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows,
    [],
  );
}

function getElement(i, j, grid) {
  if (typeof grid[i] === "undefined") return 0;
  if (typeof grid[i][j] == "undefined") return 0;
  return grid[i][j];
}
