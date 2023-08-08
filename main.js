/*
연산자란?
하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입, 지수연산 등을 수행하여 하나의 값을 만드는 것
이때 연산의 대상을 피연산자라고하고, 피연산자는 갑쇼으로 평가될 수 있는 표현식이어야 합니다
따라서 피여난자를 명사에 비유한다면, 연산자는 피연산자들로 또 다른 값을 만드는 동사라고 할 수 있습니다

1. 산술연산자
피연산자를 대상으로 수학적 계산을 수행해서 새로운 숫자값을 만드는 것
산술연산이 불가능한 경우 NaN을 반환한다(대소문자주의)
Not a Number라는 뜻으로 대소문자가 다르면 다른 뜻이 되니 주의

항이란 산술연산에 있어서 산술연산자를 제외한 것
즉 피연산자를 항이라 함

단항 산술연산자
항이 하나인 산술연산을 하는 것으로
++ 증가연산
++a , a++ =>  피연산자를 +1한다
-- 감소연산 
--a , a-- =>  피연산자를 -1한다

let num = 5;
let result;

//변수할당은 우변이 좌변에 할당 되므로 우변의 연산이 끝나고 난 뒤 값이 좌변 변수에 담기는데
result = num++;
//num++는 후위연산으로 값을 엄기는 연산을 먼저 수행하고, 이후 후위연산인 증가를 시킵니다
//따라서 result에는 5가 담기고, num은 이후에 연산이 되어 6이 됩니다
console.log(result, num);
//이후부턴 num이 6입니다

result = ++num;
//++num은 전위연산으로 값을 넘기기전(변수로)에 먼저 연산을 수행하고
//그 이후에 변수 담깁니다 다라서 num은 7이 되고 result에도 7이 담김

console.log(result, num);
//num은 7
result = num--;
console.log(result, num);
//num은 6
result = num++;
console.log(result, num);

이항 산술연산자
두개의 피연산자를 대상으로 연산하여 새로운 숫자를 만듭니다
만약 산술연간이 불가능하면 NaN을 반환합니다
기존 4칙연산인 + - * /
추가적으로 %는 나머지를 구하는 연산자입니다
예) 6%4 =?

+ , -는 단항산술연산자 이면서 이항 산술연산자입니다
사용의미는 똑같습니다

console.log(typeof ""); 문자열
console.log(typeof 1); 숫자
console.log(typeof NaN); 숫자
console.log(typeof true); 불린
console.log(typeof Symbol); 함수
console.log(typeof Symbol()); 심볼
console.log(typeof function() { }); 함수
console.log(typeof null); 버그로 객체(원래는 null)
console.log(typeof []); 객체(의 종류인 배열)
console.log(typeof abc); 식별자(변수이름, 함수이름) - underfined

숫자 형변환
let num1 = "1";
console.log(num1);
console.log(typeof num1);
console.log(+num1);
console.log(typeof +num1);

문자열 연결 연산자
+ 연산자는 피연산자 중 하나이상이 문자열인경우 문자열을 연결하는 연산을 합니다
이로 인해 형변환이 또 일어납니다
let res = "1" + 2;
let res1 = 1 + "2"
console.log(typeof res);
console.log(typeof res1);

console.log(true == 1);

let res2 = 1 + true;
console.log(res2);

할당연산자
우항에 잇는 피연산자의 평가 결과를 좌항에 있는 변수에 할당하는 것
이떄 좌항의 변수값은 변하게 됩니다
기존 5였던 number가 할당연산자 이후 10으로 바뀜
+ 뿐아니라 -, *, /도 가능합니다.
let number = 5;
Number += 5;
number = number + 5;
Number *= 5;
number = number * 5;
Number /= 5;
number = number / 5;
Number -= 5;
number = number - 5;
console.log(number);

비교연산자 : 좌항과 우항의 피연산자를 비교한 다음 불린값으로 반환하며
if문(조건문), for문(반복문)등에 사용하는 연산자입니다

1. 동등/일치 비교연산자
== 동등비교연산자는 수학에서 등호와 같습니다
=== 일치비교연산자 값이 같음을 넘어서 데이터타입까지도 일치하는 것인지 비교하는 것입니다
!= 동등하지 않다
!== 일치하지 않다

동등비교 연산자의 경우, 좌항과 우항의 피연산자를 비교할 때 
먼저 암묵적 다입변환을 통해서 타입을 일치 시키고 값이 동등한지 비교합니다
(즉 자바스크립트가  자동적으로 변환하는 과정이 있습니다)

동등비교연산자와 자바스크립트의 맹점
=> 암묵적인 타입변환이 일어나기 때문에 개발자는 값을 예상하기 어렵다
따라서 동등비교보다는 일치비교(===)를 하는 것이 좋습니다
왜냐하면 일치비교는 타입변환을 하지 않고 타입까지 같은지를 비교하기 떄문입니다

대소비교 연산자
<, >, <=, >=

논리연산
|| (or)
&& (and)
! (not)

true || true - t
true || false - t
false || true - t
false || false - f

true && true - t
true && false - f
false && true - f
false && false - f

() 그룹연산자
피연산자를 감싸서 해당 표현식을 가장 먼저 평가하도록 합니다.
*/

