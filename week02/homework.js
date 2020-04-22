// homework 1 匹配所有数字直接量

const homework01 = new RegExp(/(0x(\d|[A-F]|[a-f])+)|(0b[0-1]+)|(0o[0-7]+)|(0[0-7]+)|(((\.\d+)|((0|([1-9]+\d*))(\.\d*)?))((E|e)(\+|\-)?\d+)?)/)

function test01(binary) {
  if(binary.test(homework01)) {
    console.log('success!')
  }
}

test01(0b1)
test01(0x11)

// homework 2 utf-8 encoding

function homework2(string) {
  return string.split('').map(char =>'\\u' + char.charCodeAt().toString(16)).join('')
}

homework2('没钱好难受') //"\u6ca1\u94b1\u597d\u96be\u53d7"

// homework 3 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
// /(^[\u4E00-\u9FA5A-Za-z0-9]+$) | (?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*/)

function homework03(string) {
  if(/(("([^"\r\n\u2028\u2029\\]|\u2028|\u2029|\\((['"\bfnrtv]|[^'"\bfnrtvdxu\r\n\u2028\u2029])|0(?!d)|x[0-9a-fA-F][0-9a-fA-F]|(u[0-9a-fA-F]{4}|u{(0[0-9a-fA-F]{5}|10[0-9a-fA-F]{4}|[0-9a-fA-F]{1,4})}))|\\(\r\n|[\r\n\u2028\u2029]))*"|'([^'\r\n\u2028\u2029\\]|\u2028|\u2029|\\((['"\bfnrtv]|[^'"\bfnrtvdxu\r\n\u2028\u2029])|0(?!d)|x[0-9a-fA-F][0-9a-fA-F]|(u[0-9a-fA-F]{4}|u{(0[0-9a-fA-F]{5}|10[0-9a-fA-F]{4}|[0-9a-fA-F]{1,4})}))|\\(\r\n|[\r\n\u2028\u2029]))*'))/.test(string)) {
    console.log('success!')
  }
}