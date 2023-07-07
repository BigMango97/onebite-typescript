/**
 * 인덱스드 엑세스 타입 : 객체,배열,튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입
 * 복잡하고 큰 타입으로부터 잘게 우리가 필요한 타입만 추출 할 수 있기 때문에 실무에서도 유용하다!
 * */
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}
//객체에서 중요한점 : Post["author"]에서 author는 값이 아니라 타입이다!!
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

// 배열타입은 타입별칭으로 !
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age?: number;
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
// 튜플
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
