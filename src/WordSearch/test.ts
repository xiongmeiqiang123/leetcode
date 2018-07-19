import { expect } from "chai";
import "mocha";
import exist from "./index";
describe("Hello function", () => {
  it("test　wordSearch", () => {
    let board = [["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]];
    let word = "AAAAAAB";
    let result = exist(board, word);
    expect(result).to.equal(false);


    result = exist(board, "AAAB");
    expect(result).to.equal(true);


    result = exist(board, "AAAA");
    expect(result).to.equal(true);

    result = exist([["A"]], "A");
    expect(result).to.equal(true);

    result = exist([[""]], "");
    expect(result).to.equal(false);
  });
});
