/**제네릭 인터페이스
 * 반드시 타입으로 정의할때,당할 타입을 <>와 함께 사용해야한다
 * 타입변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
 */
interface KeyPair<K, V> {
  key: K;
  value: V;
}
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["a", "b", "c"],
};

interface NumberMap {
  [key: string]: number;
}

let numberMap: NumberMap = {
  key: -1231,
  key2: 123123,
};

interface Map<V> {
  [key: string]: V;
}
let stringMap: Map<string> = {
  key: "value",
};
let booleanMap: Map<boolean> = {
  key: true,
};

/**제네릭 타입 별칭 */
type Map2<V> = {
  [key: string]: V;
};
let stringMap2: Map2<string> = {
  key: "hello",
};

/**제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분: 학생 구분 /개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}
interface Developer {
  type: "developer";
  skill: string;
}
interface User<T> {
  name: string;
  profile: T;
}
function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}
const developerUser: User<Developer> = {
  name: "김민경",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};
const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};
