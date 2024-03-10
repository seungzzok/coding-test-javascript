function solution(n, words) {
  let prevLastWord = words[0].charAt(0);
  let index = 0;

  function transform(num, n) {
    if (num === 0) return n;
    else {
      return num;
    }
  }

  for (let word of words) {
    console.log(prevLastWord, index, word);
    if (
      prevLastWord !== word.charAt(0) ||
      words.filter((_, idx) => idx < index).includes(word)
    )
      return [transform((index + 1) % n, n), Math.ceil((index + 1) / n)];
    else {
      prevLastWord = word.charAt(word.length - 1);
      index++;
    }
  }

  return [0, 0];
}

solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]);

// 모범답안
function solution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer =
      answer ||
      (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]
        ? idx
        : answer);
    return now[now.length - 1];
  }, "");

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}

// 메모
// filter로 배열을 자르는것이 아니라 slice로 자르기!