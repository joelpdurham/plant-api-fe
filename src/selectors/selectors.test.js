import { fakeFlower } from '../fakeFlower';
import { toGetPlants } from './selectors';

describe('SELECTORS TEST', () => {
  it('return plant info from the store', () => {
    const state = {
      plantReducer: {
        plants: fakeFlower
      }
    };

    expect(toGetPlants(state)).toEqual(fakeFlower);
  });
});
