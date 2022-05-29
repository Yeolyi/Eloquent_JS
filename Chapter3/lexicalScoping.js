// https://velog.io/@ksh4820/Lexical-scoped와-클로저
// 함수의 호출이 아닌 함수의 선언에 따라 상위 스코프가 결정된다.
// let이면 실행 안되겠지,,?

var num = 1;

function a() {
	let num = 10;
	b();
}

function b() {
	console.log(num);
}

a();
b();

