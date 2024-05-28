import {describe, expect, test} from '@jest/globals';
import {sum} from '../index';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('two zero added result give zero only', ()=>{
    expect(sum(0,0)).toBe(0);
  });

});