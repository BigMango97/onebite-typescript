/**인터페이스
 * 타입에 이름을 지어주는 또 다른 문법
 * +객체의 구조를 정의하는데 특화된 문법(상속, 합침 등의 특수한 기능을 제공함)
 */

// 타입별칭과 interface는 몇가지 차이점 존재함

// 타입별칭은?
type Type1 = number | string; //union 타입 만들수 있음
type Type2 = number & string; // intersection 타입으로도 만들수 있음

// interface에서는 union이나 intersection타입을 만들수가 없음
// -> 타입별칭에 활용하기 , ex) type Type1 = number | string | Person

interface Person {
  readonly name: string; // 읽기 전용 프로퍼티!
  age?: number;
   //메서드 타입 지정도 가능하다! 
   // 메서드에 오버로딩을 구현하고 싶다면? 호출시그니처 사용!
  sayHi(): void; // 호출시그니처 가능: 함수의 이름을 ()앞에 붙음
  sayHi(a: number, b: number): void; 
}
const person: Person = {
  name: "김민경",
  age: 27,
  sayHi: function () {
    console.log("hi");
  },
};
// person.name = "홍길동"
person.sayHi();
person.sayHi(1, 2);
