// enum타입(Enumerable Type) - 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 자바스크립트엔 없고 타입스크립트에서만 특별히 사용!

// 값을 쓰는거 같다??! 컴파일되면 사라진다고 했는데 잘 실행되는게 맞나?
// -> Enum은 컴파일해도 사라지지않는다!!, 자바스크립트 객체로 변환된다(값을 사용하듯 사용 할 수 있다.)
// ❓ 왜 필요할까? -> 숫자만 보고는 실수를 할 수있다 1번이 관리자였나..?
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
// 숫자를 직접 할당하지않아도 순서대로 0번부터 들어감, 숫자가 할당되면 숫자형 Enum
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}
// 숫자를 0번부터 할당하는게 아니라 10번부터 할당하고싶다? 10, 11, 12 차례로 할당된다!
// enum Role {
//     ADMIN = 10,
//     USER 
//     GUEST
// }
enum Language{
    korean = "ko",
    english = "en"
}
const user1 = {
    name: "이정현",
    role: Role.ADMIN,
    language : Language.korean
}
const user2 = {
    name: "김민경",
    role: Role.USER
}
const user3 = {
    name: "김지원",
    role: Role.GUEST
}

console.log(user1, user2, user3)