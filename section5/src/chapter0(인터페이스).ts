/**인터페이스 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
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
