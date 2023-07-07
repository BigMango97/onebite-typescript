/**
 * 맵드타입 : 객체타입을 조작하는 기능
 * 인터페이스에서는 쓸수없다. 타입별칭에서만 쓰인다!!
 * 활용도 높다. 잘 알아두자
 */

interface User {
  id: number;
  name: string;
  age: number;
}
type PartialUser = {
  // 객체의 프로퍼티 키가 무엇이 될 수 있는지 정의 : 
  // 프로퍼티의 벨류가 어떤 값을 가질것인지(인덱스트 엑세스 타입 key값이 id, name, age를 가르킴)
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  // 오른쪽에 있는 객체 타입으로 부터 프로퍼티의 키들을 union타입으로 반환
  [key in keyof User]: boolean;
};
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};
//한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "김민경",
    age: 27,
  };
}
//한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) { }
updateUser({
  age: 25
})
