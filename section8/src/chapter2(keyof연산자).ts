/**
 * keyof연산자 : 객체타입들로부터 프로퍼티 키들을 뽑아와서 유니온타입으로 만들어준다.
 */
interface Person {
  name: string;
  age: number;
}
// keyof는 반드시 뒤에 타입이 와야한다!!!!
// keyof Person의 경우 어떤 타입이 될까?
// -> Person타입 객체들로부터 모든 프로퍼티의 키를 union타입으로 추출된다.
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}
const person: Person = {
  name: "김민경",
  age: 27,
};
getPropertyKey(person, "name");
getPropertyKey(person, "age");