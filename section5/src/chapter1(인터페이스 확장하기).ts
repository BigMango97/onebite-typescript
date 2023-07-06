/**
 * 인터페이스의 확장(상속)
 * type 별칭에는 없는데 인터페이스에서 특별히 사용할 수 있음!!
 */
// name,age 프로퍼티가 중복적으로 사용 비효율적이다...
// interface Animal {
//   name :string;
//   age:number;
// }
// interface Dog{
//   name:string;
//   age:number;
//   isBark:boolean
// }
// interface Cat{
//   name:string;
//   age:number;
//   isScratch :boolean;
// }
// interface Chicken{
//   name:string;
//   age:number;
//   isFly:boolean
// }

interface Animal {
  name: string;
  color: string;
}
// interface Dog는 interface Animal을 확장하는 타입이다
// 기존에 가지고 있는것에서 무언가를 추가한다!

// 상속을 받는 interface에서 동일한 프로퍼티타입을 다시 정의할 수 있다.
// 아무 타입을 정의해서는 안된다 원본타입의 서브타입만 가능
// 현재 name 프로퍼티의 원본타입은 string이므로 Dog의 name은 스트링리터럴만 가능
interface Dog extends Animal {
  name: "hello"
  isBark: boolean;
}
const dog: Dog = {
  name: "hello",
  color: "",
  isBark: false
}
interface Cat extends Animal {
  isScratch: boolean;
}
interface Chicken extends Animal {
  isFly: boolean;
}

// 다중확장 : 여러가지 인터페이스를 확장가능
interface ChickenCat extends Chicken, Cat { }
const chickenCat: ChickenCat = {
  name: "",
  color: "",
  isFly: false,
  isScratch: true,
};
