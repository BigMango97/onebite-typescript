// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "winterlood"];

let boolArr: Array<boolean> = [true, true, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 -> 타입스크립트에서만 제공
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

// 언제 유용하게 사용할 수 있을까?
// 인덱스 위치가 정해져있고 순서를 지키는것이 중요할 때 사용
const user:[string,number][] = [
    ["이정환",1],
    ["김민경",2],
    ["김지은",3],
    ["김샛별",4],
    // [5,"최아무개"]
]