function solution(s) {
  let zeroCnt = 0;
  let cnt = 0;

  while (true) {
    s = s
      .split("")
      .filter((el) => {
        if (el === "0") zeroCnt++;
        return el === "1";
      })
      .join("");

    s = s.length.toString(2);
    cnt++;
    console.log(cnt, zeroCnt, s);
    if (s === "1") break;
  }

  return [cnt, zeroCnt];
}

solution("1111111");

// 모범답안
function bset(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}

// 메모
// 난 어차피 정규식 못씀 그러니까 내가 짠 식이 그래도 제법 괜찮은 편인것 같음
