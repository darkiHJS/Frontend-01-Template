/**
 * 状态机从字符串中匹配abababx
 */

function match (string) {
  let state = start
  for (let i = 0; i < string.length; i++) {
    state = state(string.charAt(i))

    if (state === end) {
      return true
    }
  }

  return false
}

function start (char) {
  if (char === 'a') {
    return findA
  }

  return start
}

function findA (char) {
  if (char === 'b') {
    return findB
  }

  return start(char)
}

function findB (char) {
  if (char === 'a') {
    return findA2
  }

  return start
}

function findA2 (char) {
  if (char === 'b') {
    return findB2
  }

  return start(char)
}

function findB2 (char) {
  if (char === 'a') {
    return findA3
  }

  return start
}

function findA3 (char) {
  if (char === 'b') {
    return findB3
  }

  return start(char)
}

function findB3 (char) {
  if (char === 'x') {
    return end
  }

  return findB2(char)
}

function end (char) {
  return end
}