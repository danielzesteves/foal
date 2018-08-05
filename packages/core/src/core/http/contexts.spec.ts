// std
import { deepStrictEqual, strictEqual } from 'assert';

// FoalTS
import { Context } from './contexts';

describe('Context', () => {

  it('should instantiate with suitable properties.', () => {
    const request = {};
    const actual = new Context(request);
    strictEqual(actual.request, request);
    deepStrictEqual(actual.state, {});
    strictEqual(actual.user, undefined);
  });

});
