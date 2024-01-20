function solution(n) {
  const oneNum = (num) => {
    return num
      .toString(2)
      .split("")
      .filter((el) => el === "1")
      .join("").length;
  };
  const cnt = oneNum(n);

  while (true) {
    n++;
    if (cnt === oneNum(n)) {
      console.log(n);
      return n;
    }
  }
}

solution(15);

// 모범답안
function best(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}

// 메모
// 뭐 정규식과 재귀함수를 사용해서 작성했는데 저거 하면 좋겠지만 짧은시간안에 생각하기 힘들듯..
