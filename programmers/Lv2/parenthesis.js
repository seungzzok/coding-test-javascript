function solution(s) {
  const arr1 = s
    .split("")
    .map((el, idx) => (el === "(" ? idx : -1))
    .filter((el) => el !== -1)
    .sort();
  const arr2 = s
    .split("")
    .map((el, idx) => (el === ")" ? idx : -1))
    .filter((el) => el !== -1)
    .sort();

  if (arr1.length !== arr2.length) {
    console.log("f");
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr2[i]) {
        console.log("f");
        return false;
      }
    }

    console.log("t");
    return true;
  }
}

// solution("()()");
// solution(")()(");
solution("(()(");
