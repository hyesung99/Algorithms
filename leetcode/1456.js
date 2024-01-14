/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  const stringArr = s.split('')
  let sum = stringArr.slice(0, k).filter((char) => vowels.includes(char)).length
  let max = sum

  for (let i = 0; i < stringArr.length; i++) {
    if (i + k >= stringArr.length) break
    if (vowels.includes(stringArr[i])) {
      sum--
    }
    if (vowels.includes(stringArr[i + k])) {
      sum++
    }
    if (sum > max) {
      max = sum
    }
  }

  return max
}
