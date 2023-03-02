export const isIn = (arr = [], key, value) => {
  let res = false;
  arr.map(element => {
    if (element[key] == value) {
      res = true;
    }
  });
  console.log("re", res, arr);
  return res;
};
