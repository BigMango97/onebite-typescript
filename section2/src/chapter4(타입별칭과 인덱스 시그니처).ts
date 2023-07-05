// 타입 별칭 
// 타입 별칭은 중복된 이름으로 선언하면 안된다!
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// 인덱스 시그니처
// 프로퍼티와 벨류에 타입 관련된 규칙을 확인하기!
// key는 string타입이고 value도 string 타입이다! 
// key와 value의 규칙을 기준으로 객체의 타입을 정의할 수 있는 문법!

// 💡인덱스 시그니처 주의사항!
//  인덱스 시그니처 타입은 규칙을 위반하지만 않으면 모든 객체를 허용하는 타입
//  -> 아래와 같은 경우는 아무런 프로퍼티가 없기때문에 규칙을 위반할 일이없다.
//  -> ex)
// type countryNumberCodes = {
//   [key: string]: number
//   Korea:string -> 반드시 Korea라는 number 프로퍼티가 있어야하는 경우 적어야함! 
// };
// 추가적인 프로퍼티 value의 타입이 반드시 인덱스 시그니처 벨류의 타입과 일치하거나 호환해야함
//  let countryNumberCodes: countryNumberCodes = {} //Korea라는 프로퍼티가 없으므로 오류!!
//   let countryNumberCodes: countryNumberCodes = {
//   Korea :410;
// } //오류해결

type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
type countryNumberCodes = {
  [key: string]: number
};
let countryNumberCodes: countryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
