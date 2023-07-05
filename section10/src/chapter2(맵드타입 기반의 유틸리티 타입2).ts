/**Pick<T,K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumnailURL?: string;
}
type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags'|'content'|'thumnailURL'
  // 'title' | 'content' extends 'title' | 'tags'|'content'|'thumnailURL'
  [key in K]: T[key];
};
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**Omit<T,K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K='title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'tags'|'content'|'thumnailURL','title'>>
// Pick<Post,'content'|'tags'|'thumbnailURL'>
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumnailURL: "",
};

/**
 * Record<K,V>
 */
type Record<K extends keyof any, V> = {
  [key in K]: V;
};
type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
