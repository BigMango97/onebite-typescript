/**
 * 타입 추론
 * let은 타입 넓히기를 통해 조금 더 범용적인 타입으로 지정해줌 number,string 등
 * const는 값이 바뀌지않기때문에 리터럴 타입으로 지정해줌
 */

let a = 10;
let b = "hello";

//변수의 초기값을 보고 타입을 추론한다
let c = {
  id: 1,
  name: "이정현",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};
let { id, name, profile } = c;

// 함수의 반환값을 추론할때는 반환값을 기준으로 추론한다,
function fun() {
  return "hello";
}
function fun1(message = "hello") {
  return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello";

const num = 10; //넘버리터럴타입 왜? const로 선언한 num은 어차피 상수이다
const str = "hello" //문자리터럴타입

let arr = [1,"string"] //타입 추론이 될때 최적의 공통타입으로 추론해줌
