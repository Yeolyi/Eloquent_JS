const abc = /abc/;
const abc2 = new RegExp("abc");

console.log(abc.test("abcde"));
console.log(abc.test("abxcd"));

const num = /[0-9]/;
console.log(num.test("120938"));
console.log(num.test("hrllo 12380"));

const hangul = /[가-핳]/;
console.log(hangul.test("Hello"));
console.log(hangul.test("꿇땷"));

let date = /\d\d\d\d-\d\d-\d\d/; // D는 digit이 아닌 것. 대문자면 정반대
console.log(date.test("2022-06-03"));

// ^를 사용해 반전시킬 수도 있음
const notBinary = /[^01]/;
console.log(notBinary.test("10210101010101010"));

const singleNum = /\d+/;
const singleNum2 = /\d*/;
console.log(singleNum.test(""));
console.log(singleNum2.test(""));

const color = /colou?r/;
console.log(color.test("color"));
console.log(color.test("colour"));

date = /\d{4}-\d{1,2}-\d{1,2}/;
console.log(date.test("2022-12-12"));

const cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("bOOooHoooHoooooHoo"));

let match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);

let	quotedText = /'([^']*)'/;
// The whole match is always the first element. 
// The next element is the part matched by the first group, then the second group, and so on.
console.log(quotedText.exec("she said 'hello' 'bye'"));

console.log(/bad(ly)?/.exec("bad"));
console.log(/bad(ly)?/.exec("badly"));
console.log(/(\d)+/.exec("123"));

// https://ohgyun.com/392
console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatenate"));
console.log(/\bcat\b/.test("there is cat in the middle of the words."));

const animalCount = /\b\d+ (pig|cow|chicken)s?\b/; // + 없으면 숫자 딱 하나만 되는 듯
console.log(animalCount.test("13 pigs"));
console.log(animalCount.test("a13 pigs"));
console.log(animalCount.exec("13 chickens 5 pigs"));

// 103과 같은 경우 3에서 binary가 아님을 깨달아 backtrack
const bOrh = /\b([01]+b|[\da-f]+h|\d+)\b/;
// The .* part will fist try to consume the whole string.
const temp = /^.*x/;
