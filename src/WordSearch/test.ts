import { expect } from "chai";
import "mocha";
import exist from "./index";
describe("Hello function", () => {
  it("test　wordSearch", () => {
    let board = [["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]];
    let word = "AAAAAAB";
    let result: boolean;
    result = exist(board, word);
    expect(result).to.equal(false);


    result = exist(board, "AAAB");
    expect(result).to.equal(true);


    result = exist(board, "AAAA");
    expect(result).to.equal(true);

    result = exist([["A"]], "A");
    expect(result).to.equal(true);

    result = exist([[""]], "");
    expect(result).to.equal(false);

    board =[["A","B","C","E"],
            ["S","F","E","S"],
            ["A","D","E","E"]];
    word = "ABCEFSADEESE"

    result = exist(board, word);
    expect(result).to.equal(true);

    board = [["A","B","C","E"],
              ["S","F","C","S"],
              ["A","D","E","E"]]
    word = "ABCB"

    result = exist(board, word);
    expect(result).to.equal(false);

    board = [["F","Y","C","E","N","R","D"]
            ,["K","L","N","F","I","N","U"]
            ,["A","A","A","R","A","H","R"]
            ,["N","D","K","L","P","N","E"]
            ,["A","L","A","N","S","A","P"]
            ,["O","O","G","O","T","P","N"]
            ,["H","P","O","L","A","N","O"]]
    word = "POLAND"
    result = exist(board, word);
    expect(result).to.equal(true);
  });
});
