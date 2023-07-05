// any -> 모든, 누구나 -> 어떤 타입이던지!
// 특정 변수의 타입을 우리가 확실히 모를때 사용
// any는 타입검사를 안하는거와 같다.. 타입스크립트 다 포기..
// => 런타임에 오류 발생

let anyVar: any = 10;
anyVar = "hello"
anyVar = true;
anyVar = {};
anyVar = () => { };

anyVar.toUpperCase();
anyVar.toFixed(); // 메서드도 제약없이 사용가능
let num: number = 10;
num = anyVar;
// 오류가 런타임에 발생,,,,  최악의 상황이다!

// unknown
let unknownVar: unknown;

//저장은 할 수 있지만..
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };

// 변수에 할당하는거 불가!
// num = unknownVar;