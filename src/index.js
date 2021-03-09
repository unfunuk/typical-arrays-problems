
exports.min = function min(array) {
  if (array.length == 0) {
    return 0
  }
  let el_min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < el_min) {
      el_min = array[i];
    }
  }
  return el_min;
}

exports.max = function max(array) {

  if (array.length == 0) {
    return 0;
  }
  let el_max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > el_max) {
      el_max = array[i];
    }
  }
  return el_max;
}

exports.avg = function avg(array) {
  if (array.length == 0) {
    return 0;
  }
  let avg_el = 0;
  for (let i = 0; i < array.length; i++) {
    avg_el += array[i];
  }
  avg_el /= array.length;
  return avg_el;
}
