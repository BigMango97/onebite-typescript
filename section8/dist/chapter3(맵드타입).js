/**
 * 맵드타입
 * 인터페이스에서는 쓸수없다. 타입별칭에서만 쓰인다!!
 * 활용도 높다. 잘 알아두자
 */
//한명의 유저 정보를 불러오는 기능
function fetchUser() {
    return {
        id: 1,
        name: "김민경",
        age: 27
    };
}
//한명의 유저 정보를 수정하는 기능
function updateUser(user) {
}
updateUser({
    // id:1,
    // name:"김민경",
    age: 25
});
export {};
