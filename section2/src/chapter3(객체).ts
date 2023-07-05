// object
let user: object = {
  id: 1,
  name: "김민경",
};
// user.id -> 객체의 프로퍼티에 접근하려고 하면 오류발생

let user1: { id?: number; name: string } = {
  id: 1,
  name: "김민경",
};
user1.id;

let dog: { name: string; color: string } = { name: "돌돌이", color: "brown" };

user1 = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};
// config.apiKey = "hacked"; //읽기 전용 속성이므로 "apiKey"에 할당할 수 없습니다.
