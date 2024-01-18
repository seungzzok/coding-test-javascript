function solution(s) {
  let answer = "";
  s.toLowerCase()
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .forEach((e) => (answer += " " + e));

  console.log(answer.slice(1));
  return answer.slice(1);
}

solution("3people unFollowed me");
solution("for the last week");

// 모범답안
function best(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}

// 메모
// join이 배열을 특정 내용을 사이에 두고 붙일 수 있는 함수라는걸 처음 앎
// slice와 substring도 처음 앎
