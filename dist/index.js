var Board = /** @class */ (function () {
    function Board(map) {
        this.x = 0;
        this.y = 0;
        this.initPositons = [];
        this.markedPostions = [];
        this.map = map;
        this.maxY = map.length - 1;
        this.maxX = map[0].length - 1;
        this.reInit(0, 0);
    }
    Board.prototype.reInit = function (x, y) {
        var col = [];
        this.markedPostions = [];
        for (var index = 0; index < this.maxY + 1; index++) {
            this.markedPostions[index] = [];
        }
        this.moveToNewPosition(x, y);
    };
    Board.prototype.moveToNewPosition = function (x, y) {
        this.x = x;
        this.y = y;
        this.mark(x, y);
    };
    Board.prototype.getChartByPosition = function (x, y) {
        if (y < 0 || y > this.maxY) {
            return undefined;
        }
        if (x < 0 || x > this.maxX) {
            return undefined;
        }
        return this.map[y][x];
    };
    Board.prototype.getPositionsByChart = function (chart) {
        for (var y = 0; y < this.maxY; y++) {
            var element = this.map[y];
            for (var x = 0; x < element.length; x++) {
                var c = element[x];
                if (c === chart) {
                    this.initPositons.push({ x: x, y: y });
                }
            }
        }
        return this.initPositons;
    };
    Board.prototype.mark = function (x, y) {
        if (y < 0 || y > this.maxY) {
            return undefined;
        }
        if (x < 0 || x > this.maxX) {
            return undefined;
        }
        //   console.log(this);
        this.markedPostions[y][x] = true;
    };
    Board.prototype.isPositionMarked = function (x, y) {
        if (y < 0 || y > this.maxY) {
            return false;
        }
        if (x < 0 || x > this.maxX) {
            return false;
        }
        return this.markedPostions[y][x];
    };
    Board.prototype.getLeft = function () {
        var x = this.x - 1, y = this.y;
        var chart = this.getChartByPosition(x, y);
        return {
            chart: chart,
            x: x,
            y: y
        };
    };
    Board.prototype.getRight = function () {
        var x = this.x + 1, y = this.y;
        var chart = this.getChartByPosition(x, y);
        return {
            chart: chart,
            x: x,
            y: y
        };
    };
    Board.prototype.getTop = function () {
        var x = this.x, y = this.y - 1;
        var chart = this.getChartByPosition(x, y);
        return {
            chart: chart,
            x: x,
            y: y
        };
    };
    Board.prototype.getBottom = function () {
        var x = this.x, y = this.y + 1;
        var chart = this.getChartByPosition(x, y);
        return {
            chart: chart,
            x: x,
            y: y
        };
    };
    Board.prototype.getNextPostionByChartAndBoard = function (chart) {
        var isMarked;
        var top = this.getTop();
    };
    return Board;
}());
function main(str) {
    var map = [["a", "a", "c"], ["d", "c", "e"], ["s", "d", "p"]];
    var board = new Board(map);
    var start = str[0];
    str = str.substr(1, str.length - 1);
    var postions = board.getPositionsByChart(start);
    function getResult(str, board) {
        var c = str[0];
        var _str = str.substr(1, str.length - 1);
        if (!str.length) {
            return true;
        }
        var top = board.getTop();
        var right = board.getRight();
        var bottom = board.getBottom();
        var left = board.getLeft();
        if (top.chart === c && !board.isPositionMarked(top.x, top.y)) {
            board.moveToNewPosition(top.x, top.y);
            return getResult(_str, board);
        }
        if (right.chart === c && !board.isPositionMarked(right.x, right.y)) {
            board.moveToNewPosition(right.x, right.y);
            return getResult(_str, board);
        }
        if (bottom.chart === c && !board.isPositionMarked(bottom.x, bottom.y)) {
            board.moveToNewPosition(bottom.x, bottom.y);
            return getResult(_str, board);
        }
        if (left.chart === c && !board.isPositionMarked(left.x, left.y)) {
            board.moveToNewPosition(left.x, left.y);
            return getResult(_str, board);
        }
        return false;
    }
    var result = postions.map(function (postion) {
        board.reInit(postion.x, postion.y);
        return getResult(str, board);
    });
    //   console.log(result, 'result');
    return !!result.filter(function (f) { return f; }).length;
}
var str = "aac";
var result = main(str);
console.log(result, "result");
//# sourceMappingURL=index.js.map