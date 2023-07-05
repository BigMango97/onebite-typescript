/**
 * 선언 합침
 */
//타입이 다르면 충돌난다...!!!
interface Person {
  name: string;
}
interface Person {
  //   name: number;
  age: number;
}
const person: Person = {
  name: "",
  age: 27,
};

/**언제 사용할까? 모듈 보강 */
interface Lib {
  a: number;
  b: number;
}
interface Lib {
  c: string;
}
const Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
