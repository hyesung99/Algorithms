/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  const getFeq = (word) => {
    const feq = {}
    for (let char of word) {
      if (feq[char]) {
        feq[char] += 1
      } else {
        feq[char] = 1
      }
    }
    return feq
  }

  const feq1 = getFeq(word1)
  const feq2 = getFeq(word2)

  console.log(Object.keys(feq1))
  console.log(Object.keys(feq2))
  console.log(Object.values(feq1))
  console.log(Object.values(feq2))

  return (
    Object.keys(feq1).sort().join('') === Object.keys(feq2).sort().join('') &&
    Object.values(feq1).sort().join('') === Object.values(feq2).sort().join('')
  )
}
