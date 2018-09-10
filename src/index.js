/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  let f, s;
  let array = preferences.map(function(number) {
      return number - 1;
  });

  for (let i = 0; i < array.length; i++) {
    if (array[i] == i) continue;
    f = array[i];
    s = array[f];

    if (array[s] == i) {
      count++;
      array[i] = -1;
      array[f] = -1;
      array[s] = -1;
    }
  }
  return count;
};
