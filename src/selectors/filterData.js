export default function filterData(arr, param, name) {
  const result = arr.filter((ele) => ele[param] === name);
  return result;
}
