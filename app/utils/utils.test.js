import {getSortedArray} from './functions/getSortedArray';

// testing functions
describe('utils', () => {
  const unSortedArray = [
    {id: 1, name: 'said'},
    {id: 2, name: 'dos'},
    {id: 3, name: 'Ahmed'},
  ];

  // testing getSortedArray()
  it('should return sorted names array when array is unSorted', () => {
    expect(getSortedArray(unSortedArray)).toStrictEqual([
      {id: 3, name: 'Ahmed'},
      {id: 2, name: 'dos'},
      {id: 1, name: 'said'},
    ]);
  });
});
