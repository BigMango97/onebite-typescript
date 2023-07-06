/**
 * 선언 합침
 */
// 동일한 이름으로 두개의 interface를 만들면 충돌나지않는 이유는?
// => 동일한 이름으로 정의한 interface는 합쳐지기 때문이다.

// interface의 동일한 이름을 정의하는데 타입이 다르면 오류발생!!!
// 선언합침 : 서브타입으로 선언해도 문제 발생 반드시 같은 타입!!
interface Person {
  name: string;
}
interface Person {
  // name: number; // 💡타입이 다르면 충돌난다...!!!
  age: number;
}
const person: Person = {
  name: "",
  age: 27,
};
// 확장은 서브타입 가능
interface Developer extends Person {
  name: 'hello'
}

/**언제 사용할까? 라이브러리 타입이 부실한 경우 :모듈 보강
 * 보통의 라이브러리는 이미 타입정의가 끝나있기때문에 임의로 객체를 추가할 수 없다.
 * 다시 정의한 다음, 모듈의 타입을 보강해주기
 */
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
