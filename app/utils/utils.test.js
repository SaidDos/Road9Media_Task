import {getSortedArray} from './functions/getSortedArray';
import {getFilteredServices} from './functions/getFilteredServices';

// testing functions
describe('utils', () => {
  const unSortedArray = [
    {id: 1, price: 520},
    {id: 2, price: 100},
    {id: 3, price: 3050},
  ];
  const unFilterredArr = [
    {id: 1, price: 1000},
    {id: 2, price: 2000},
    {id: 3, price: 3000},
  ];

  const price = [0, 1000];
  // testing getSortedArray()
  it('should return sorted names array when array is unSorted', () => {
    expect(getSortedArray(unSortedArray)).toStrictEqual([
      {id: 2, price: 100},
      {id: 1, price: 520},
      {id: 3, price: 3050},
    ]);
  });

  // testing getSortedArray()
  it('should return {id: 1, price: 1000} when array is unFilterredArr and price range is price ', () => {
    expect(
      getFilteredServices(unFilterredArr, null, null, price),
    ).toStrictEqual([{id: 1, price: 1000}]);
  });
});
