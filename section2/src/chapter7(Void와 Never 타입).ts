// void
// void => 공허 -> 아무것도 없다.
// void => 아무것도 없음을 의미하는 타입
// 함수의 반환값에서 타입을 설정 할 수 있다!
function func1(): string {
  return "hello";
}
// 아무런 값도 반환하고있지않다 -> 이럴때 void타입 정의!
function func2(): void {
  console.log("hello");
}
// 변수의 타입으로도 void타입을 정의할 수있다 오직 undefined만 담을 수 있다!
// strictNullChecks:false인 경우 a = Null도 가능!
let a: void;
// a = 1;
// a = "hello"
// a = {}
a = undefined
// 우리는 이미 아무것도 없을을 나타내는 값이 undefined 또는 null라고 배웠음
// 반환값이 없는 함수의 반환값 타입을 정의할 때 왜 void타입을 만들까...?
// 왜 !! => 반환값의 타입으로 undefined나 null을 정의하면 진짜 undefined나 null을 반환하기위해 return문을 또 써야함
// return문을 사용하고 싶지않은 함수의 반환값 타입으로는 void를 사용해야한다!
function func4(): undefined {
  undefined
}
function func5(): undefined {
  console.log('hello')
  return
}

//never
// never -> 존재하지 않는
// 불가능한 타입
// 반환값이 있는거 자체가 모순일때!!!
// 그 어떤값도 저장할 수 없다!!
function func3(): never {
  //무한루프를 도는함수 -> 아무것도 반환하지않으니까 void라고 해야할까?
  // 반환 할 수가없음 정상적으로 종료가 안됌. 반환하는것이 모순이다!
  while (true) { }
}

function fun6(): never {
  throw new Error()
}
let b: never; // undefinde, null 못담는다.. 
// b = undefined;
// b = null;
