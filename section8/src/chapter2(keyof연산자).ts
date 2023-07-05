/**
 * keyof연산자 : 객체타입들로부터 프로퍼타입 키들을 뽑아와서 유니온타입으로 만들어준다.
 */
interface Person {
  name: string;
  age: number;
}
// keyof는 반드시 뒤에 타입이 와야한다!!!!
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}
const person: Person = {
  name: "김민경",
  age: 27,
};
getPropertyKey(person, "name");
