// enum타입(Enumerable Type) - 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 자바스크립트엔 없고 타입스크립트에서만 특별히 사용!
// 왜 필요할까? -> 숫자만 보고는 실수를 할 수있다 1번이 관리자였나..?
// const user1 = {
//     name:"이정환",
//     role :0 // 0 <- 관리자
// }
// const user2 = {
//     name:"홍길동",
//     role :1 // 1 <- 일반 유저
// }
// const user3 = {
//     name:"아무개",
//     role :2 // 2 <- 게스트
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "이정현",
    role: Role.ADMIN
};
const user2 = {
    name: "김민경",
    role: Role.USER
};
const user3 = {
    name: "김지원",
    role: Role.GUEST
};
console.log(user1, user2, user3);
export {};
