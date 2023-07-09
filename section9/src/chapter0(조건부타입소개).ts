/**
 * 조건부타입 : 삼항연산자를 이용해서 조건에 따라서 타입을 결정한다!!!
 * 제네릭이랑 함께 쓰면 좋음!! 🔥🔥
 */

import { type } from "os";
// number타입이 string타입을 확장하는 문법이냐?! 참이라면 type A는 string 타입
// number 타입은 string을 확장하는 타입이 아니기 때문에 A의 타입은 number이다!
type A = number extends string ? string : number;

type ObjA = { //슈퍼타입
  a: number;
};
type ObjB = {
  a: number;
  b: number;
};
// ObjB타입이 ObjA로 확장하냐?! oo B의 타입은 number이다!
type B = ObjB extends ObjA ? number : string;


/**제네릭과 조건부 타입 */
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

// 시그니처와 함수오버로딩 사용!
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: T) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}
let result = removeSpaces("hi im winterlood");
console.log(result.toUpperCase());

let result2 = removeSpaces(undefined);
