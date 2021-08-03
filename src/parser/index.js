// 글자 추출하기 : exec
let pattern = RegExp('a')
console.log(pattern.exec('abcde'))

// . => 하나의 문자(가 있어야함)
// a. => 하나의 문자가 있어야하고, 반드시 그 앞에는 a라는 글자가 들어간다.
pattern = /a./
console.log(pattern.exec('abcde'))

// 테스트하기 : test
console.log(pattern.test('abcde'))
console.log(pattern.test('bcde'))

// string 에 직접 사용하기
// match
console.log('test'.match(pattern))

// replace
console.log('abcde'.replace(pattern, 'wow'))

// option
// i : 대소문자 구분없이
const allAlphaCase = /a/i
console.log('Abcdea'.match(allAlphaCase))

// g : 여러개 선택 가능
const manyCase = /a/g
console.log('Abcdea'.match(manyCase))

// 두 옵션을 한번에 작성하는 것도 가능
const allAlphaManyCase = /a/ig
console.log('Abcdea'.match(allAlphaManyCase))