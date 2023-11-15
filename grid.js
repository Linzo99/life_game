let interval;

function Grid() {
  const [size, setSize] = React.useState(25);
  const [speed, setSpeed] = React.useState(7);
  const [grid, setGrid] = React.useState(null);

  const init = () => {
    const tmp = makeArray(size);
    const fillSize = parseInt(size ** 2 * (1 / 6));
    for (let i = 0; i <= fillSize; i++) tmp[i] = 1;
    // suffle
    tmp.sort(() => (Math.random() > 0.5 ? 1 : -1));
    setGrid(listToMatrix(tmp, size));
  };

  const update = () => setGrid(nextState(grid, size));
  const start = () => (interval = setInterval(update, 2000 / speed));
  const pause = () => clearInterval(interval);
  const changeSpeed = (val) => {
    setSpeed(val);
    pause();
    start();
  };
  const restart = () => {
    clearInterval(interval);
    init();
  };

  React.useEffect(() => {
    clearInterval(interval);
    init();
  }, [size]);

  if (!grid) return null;

  return (
    <div>
      <Settings
        setSize={setSize}
        start={start}
        pause={pause}
        update={update}
        restart={restart}
        setSpeed={changeSpeed}
      />
      <div className="my-2 border border-gray-800 p-2">
        <div className="flex flex-col">
          {grid &&
            grid.map((row, i) => (
              <div key={i} className="flex">
                {row.map((val, j) => (
                  <GridItem key={i + 1 * j} val={val} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function GridItem({ val }) {
  const color = val == 1 ? "bg-green-600" : "";
  return (
    <span
      className={`h-4 w-4 ${color} border-[.2px] border-gray-400/80 m-0 p-0`}
    ></span>
  );
}

function Settings({ start, pause, restart, setSize, setSpeed }) {
  return (
    <div className="flex justify-between items-center w-full">
      <select
        onChange={({ target }) => setSize(parseInt(target.value))}
        className="bg-transparent border border-gray-500 bg-white text-black dark:text-white dark:bg-transparent rounded-sm p-1"
      >
        <option value="25">25x25</option>
        <option value="30">30x30</option>
        <option value="35">35x35</option>
        <option value="40">40x40</option>
      </select>
      <div className="flex items-center space-x-2">
        <svg
          onClick={start}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-green-600 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          onClick={pause}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-red-600 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          onClick={restart}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-yellow-400 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        onChange={({ target }) => setSpeed(target.value)}
        className="w-16"
        type="range"
        min="1"
        max="7"
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("grid"));
root.render(<Grid />);
