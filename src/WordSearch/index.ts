export default function exist(board, word) {
  type IMap = string[][];

  class Board {
    private map: IMap;
    private maxX: number;
    private maxY: number;
    private x: number = 0;
    private y: number = 0;
    private initPositons: { x: number; y: number }[] = [];
    private markedPostions: boolean[][] = [];
    constructor(map: IMap) {
      this.map = map;
      this.maxY = map.length - 1;
      this.maxX = map[0].length - 1;

      this.reInit(0, 0);
    }

    reInit(x: number, y: number) {
      let col = [];
      this.markedPostions = [];

      for (let index = 0; index < this.maxY + 1; index++) {
        this.markedPostions[index] = [];
      }

      this.moveToNewPosition(x, y);
    }
    moveToNewPosition(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.mark(x, y);
    }
    getChartByPosition(x: number, y: number): string {
      if (y < 0 || y > this.maxY) {
        return undefined;
      }
      if (x < 0 || x > this.maxX) {
        return undefined;
      }
      return this.map[y][x];
    }

    getPositionsByChart(chart: string): { x: number; y: number }[] {
      for (let y = 0; y <= this.maxY; y++) {
        const element = this.map[y];
        for (let x = 0; x <= this.maxX; x++) {
          const c = element[x];

          if (c === chart) {
            this.initPositons.push({ x, y });
          }
        }
      }
      return this.initPositons;
    }

    mark(x: number, y: number) {
      if (y < 0 || y > this.maxY) {
        return undefined;
      }
      if (x < 0 || x > this.maxX) {
        return undefined;
      }
      //   console.log(this);

      this.markedPostions[y][x] = true;
    }

    isPositionMarked(x: number, y: number): boolean {
      if (y < 0 || y > this.maxY) {
        return false;
      }
      if (x < 0 || x > this.maxX) {
        return false;
      }
      return this.markedPostions[y][x];
    }

    getLeft(): { chart: string | undefined; x: number; y: number } {
      let x = this.x - 1,
        y = this.y;
      let chart = this.getChartByPosition(x, y);
      return {
        chart,
        x,
        y
      };
    }

    getRight(): { chart: string | undefined; x: number; y: number } {
      let x = this.x + 1,
        y = this.y;
      let chart = this.getChartByPosition(x, y);
      return {
        chart,
        x,
        y
      };
    }
    getTop(): { chart: string | undefined; x: number; y: number } {
      let x = this.x,
        y = this.y - 1;
      let chart = this.getChartByPosition(x, y);
      return {
        chart,
        x,
        y
      };
    }
    getBottom(): { chart: string | undefined; x: number; y: number } {
      let x = this.x,
        y = this.y + 1;
      let chart = this.getChartByPosition(x, y);
      return {
        chart,
        x,
        y
      };
    }
  }

  function main(map: string[][], str: string) {
    // const map = [["a", "a", "c"], ["d", "c", "e"], ["s", "d", "p"]];
    let board = new Board(map);
    let start = str[0];
    str = str.substr(1, str.length - 1);
    // debugger
    let postions = board.getPositionsByChart(start);

    function getResult(str: string, board: Board): boolean {
      if (!str.length) {
        return true;
      }
      let c = str[0];
      let _str = str.substr(1, str.length - 1);

      let top = board.getTop();
      let right = board.getRight();
      let bottom = board.getBottom();
      let left = board.getLeft();

      let hasMatched = false;
      if (top.chart === c && !board.isPositionMarked(top.x, top.y)) {
        board.moveToNewPosition(top.x, top.y);
        hasMatched = getResult(_str, board);
      }
      if (right.chart === c && !board.isPositionMarked(right.x, right.y)) {
        board.moveToNewPosition(right.x, right.y);
        hasMatched = getResult(_str, board);
      }
      if (bottom.chart === c && !board.isPositionMarked(bottom.x, bottom.y)) {
        board.moveToNewPosition(bottom.x, bottom.y);
        hasMatched = getResult(_str, board);
      }
      if (left.chart === c && !board.isPositionMarked(left.x, left.y)) {
        board.moveToNewPosition(left.x, left.y);
        hasMatched = getResult(_str, board);
      }
      return hasMatched;
    }

    let result = postions.map(postion => {
      board.reInit(postion.x, postion.y);
      return getResult(str, board);
    });

    return !!result.filter(f => f).length;
  }

  return main(board, word);
}
