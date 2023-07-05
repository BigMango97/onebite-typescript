//Post["author"]에서 author는 값이 아니라 타입이다!!
function printAuthorInfo(author) {
    console.log(`${author.id}-${author.name}`);
}
const post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
    },
};
function printAuthorInfo1(author) {
    console.log(`${author.id}-${author.name}`);
}
const postlist = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
    },
};
export {};
