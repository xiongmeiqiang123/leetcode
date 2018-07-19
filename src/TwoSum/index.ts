export default function find(arr: number[], sum: number) {
  for (let x = 0; x < arr.length - 1; x++) {
    const num1 = arr[x];
    for (let y = x + 1; y < arr.length; y++) {
      const num2 = arr[y];
      if (num1 + num2 === sum) {
        return [x, y];
      }
    }
  }
  return [-1, -1]
}

