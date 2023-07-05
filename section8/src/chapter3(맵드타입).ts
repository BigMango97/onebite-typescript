/**
 * 맵드타입
 * 인터페이스에서는 쓸수없다. 타입별칭에서만 쓰인다!!
 * 활용도 높다. 잘 알아두자
 */

interface User {
  id: number;
  name: string;
  age: number;
}
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};
//한명의 유저 정보를 불러오는 기능
function fetchUser() {
  return {
    id: 1,
    name: "김민경",
    age: 27,
  };
}
//한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {}
updateUser({
  // id:1,
  // name:"김민경",
  age: 25,
});
