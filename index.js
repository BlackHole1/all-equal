const isArray = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

const allEqual = (...arrays) => {
  const result = []
  for (let i = 0; i < arrays.length; i++) {
    if (!isArray(arrays[i])) throw new Error(`arguments must be a Array`)
    if (arrays[i].length < 1) throw new Error(`The number of array values must be greater than one`)
    result.push(!arrays[i].some((value, index) => value !== arrays[i][0]))
  }
  return result.every((v) => v === true)
}

module.exports = allEqual