import { type } from "os";

/**
 * infer : 조건부 타입내에서 특정 타입만 추론한다!
 * inference -> 추론하다.
 */
type FuncA = () => string;
type FuncB = () => number;
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;
type C = ReturnType<number>; //추론 불가하기 때문에 never

/**예제*/
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스타입이어야한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야한다.
type PromiseA = PromiseUnpack<Promise<number>>;
//number
type PromiseB = PromiseUnpack<Promise<string>>;
//string
