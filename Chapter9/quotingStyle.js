// 여기 단원 문제는 특히 홈페이지 답 확인하기!

let text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/\s(')|(')\s|^(')|(')$/g, x => { return '"' }));
