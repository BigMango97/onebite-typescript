/**
 * 인덱스드 엑세스 타입 : 객체,배열,튜블 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입
 */
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}
//Post["author"]에서 author는 값이 아니라 타입이다!!
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.id}-${author.name}`);
}
const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
  },
};

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];
function printAuthorInfo1(author: PostList[number]["author"]) {
  console.log(`${author.id}-${author.name}`);
}
const postlist: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
  },
};

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
