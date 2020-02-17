import { fetchResults, FETCH_PLANTS } from './actions';

jest.mock('../services/getPlants.js');

describe('ACTION TESTS', () => {
  it('Call the fetch plant action', () => {
    const dispatch = jest.fn();
    const action = fetchResults('Rose');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_PLANTS, payload: [{
            commonName: 'Rose',
            id: 123
          }]
        });
      });
  });
});
