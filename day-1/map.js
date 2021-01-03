/**
 * @template T - Type of the elements in the input array
 * @template R - Type of the result in the returned array
 *
 * @description
 * Returns a new array with each value substituted
 * for the value returned by mapFn(array[i]).
 *
 * @param {Array.<T>} array - The array whose elements will be fed to mapFn
 * @param {function(T, number, Array.<T>): R} mapFn - The function which will be used to calculate
 * the values in the resulting array
 *
 * @returns {Array.<R>}
 **/
const map = (array, mapFn) => {
  const result = [];
  for (let i = array.length - 1; i >= 0; --i) {
    result[i] = mapFn(array[i], i, array);
  }

  return result;
};

module.exports = { map };
