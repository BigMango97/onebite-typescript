// any
// 특정 변수의 타입을 우리가 확실히 모를때
// any는 타입검사를 안하는거와 같다.. 타입스크립트 다 포기..
// => 런타임에 오류 발생
let anyVar = 10;
// anyVar = "hello"
// anyVar = true;
// anyVar = {};
// let num: number = 10;
// num = anyVar;
// unknown
let unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
export {};
