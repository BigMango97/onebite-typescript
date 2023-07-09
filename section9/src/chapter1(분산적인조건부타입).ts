/**
 * 분산적인 조건부 타입 : 조건부타입을 유니온과 함께 사용할 떄 
 * 조건부 타입이 분산적으로 동작하게 업그레이드 되는 것
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; 
// 일반적인조건부 타입으로 동작하지않는다.
// 그대로 들어오는게 아니라 분산적인 조건부 타입으로 동작함
// 아래 처럼 동작 한번은 number 한번은 string
// StringNumberSwitch<number>
// StringNumberSwitch<string>


let d: StringNumberSwitch<boolean | number | string>;
// 1단계 : 각각 다 분리된다!
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과 => number | string

// 실용적인 예제
// 유니온에서 특정 타입만 제거하는거!!
// 타입변수 T가 타입변수 U의 서브타입이라면 never 아니라면 T
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string> |

// 2단계
// number |
// never |
// boolean

//결과
// number | never | boolean
// union :집합들간의 합집합을 만드는것인데 never은 공집합이다!

// 최종결과 number | boolean

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
//1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

//2단계
// never |
// string |
// never

// 3단계
// string
