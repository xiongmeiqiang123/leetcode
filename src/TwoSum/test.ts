import { expect } from "chai";
import "mocha";
import exist from "./index";
describe("Hello function", () => {
  it("test　wordSearch", () => {
    let board = [1,2,23,4,354,545,6,57,678,8];
    let word = 9;
    let [x, y] = exist(board, word);
    expect(x).to.equal(x);
    expect(y).to.equal(9);

    board = [1,2,23,4,354,545,6,57,678,8];

    [x, y] = exist(board, 553);
    expect(x).to.equal(5);
    expect(y).to.equal(9);
  });
});
