// keyof는 반드시 뒤에 타입이 와야한다!!!!
function getPropertyKey(person, key) {
    return person[key];
}
const person = {
    name: "김민경",
    age: 27,
};
getPropertyKey(person, "name");
export {};
