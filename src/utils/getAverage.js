function getAverage(arr) {
  let total = arr.reduce((acc, grade) => (acc += Number(grade)), 0);
  let average = total / arr.length;
  return average;
}

module.exports = getAverage;
