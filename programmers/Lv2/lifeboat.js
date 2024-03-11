function solution(people, limit) {
  const sortingPeople = people.sort((a, b) => b - a);
  console.log(sortingPeople);

  let i = 0;
  let num = 0;
  let j = people.length - 1;

  while (i < j) {
    if (people[i] + people[j] <= limit) {
      num++;
      i++;
      j--;
    } else {
      i++;
    }
  }

  return people.length - num;
}

solution([40, 50, 70, 40, 80, 90, 100, 45, 68, 72, 99, 45], 100);

// 모범 답안
function solution(people, limit) {
  people.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0, j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }
  return people.length - i;
}

// 메모
// 로직은 똑같은데 for에서 변수 설정 두개를 한번에 할 수 있네용
// 속도를 높이기 위해 머리속으로 생각한 로직을 그냥 바로 코드로 구현하는 연습 들이기
// 코드 조금 더러워도 속도 높이고 답만 맞도록 하기!!
