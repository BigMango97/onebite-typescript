/**
 * 기본 타입간의 호환성
 */

import { type } from "os";

let num1: number = 10;
let num2: 10 = 10;
num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?!
 * -> 프로퍼티의 갯수가 더 작은것이 슈퍼타입이다!
 */

type Animal = {
  name: string;
  color: string;
};
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};
let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;
// dog = animal;

type Book = {
  name: string;
  price: number;
};
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};
let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크키로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js",
};
book = programmingBook;
// programmingBook = book

/**초과 프로퍼티 검사
 * -> 변수를 초기화할때 초기화하는 값으로 객체 리터럴을 사용하면 초과프로퍼티 검사 발생
 */

let book2: Book = {
  name: "한 입 크키로 잘라먹는 리액트",
  price: 33000,
  // skill: "react.js",
};

