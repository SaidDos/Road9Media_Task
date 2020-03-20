// this is a function takes 1 arg and retrun sorted array by prices

export const getSortedArray = array => {
  let clonnedArray = JSON.parse(JSON.stringify(array));
  return clonnedArray.sort((a, b) =>
    a.price > b.price ? 1 : a.price === b.price ? 0 : -1,
  );
};
