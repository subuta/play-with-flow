/* global describe, it */

import Hoge from '@'

describe('index', () => {
  it('test truth', async () => {
    expect(Hoge).toEqual({name: 'hoge'});
  })
})
