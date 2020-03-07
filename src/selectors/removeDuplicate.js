export default function removeDuplicate(arr, param) {
  return [...new Set(arr.map((ele) => ele[param]))];
}
