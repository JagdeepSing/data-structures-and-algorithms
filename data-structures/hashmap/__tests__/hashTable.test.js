const HashTable = require('../hashTable');

describe('HashTable', () => {
  it('Adding a key/value pair works', () => {
    const hashtable = new HashTable(1);
    expect(hashtable.data[0]['base']).toEqual('ball');
    expect(hashtable.add('base', 'ball')).toEqual('ball');
  });

  it('Get(key) returns value for key', () => {});

  it('Get(key) returns null if key not in hashtable', () => {});

  it('Handle a collision within the hashtable', () => {});

  it('Retrieve a value from a bucket within the hashtable that has a collision', () => {});

  it('Hash a key to an in-range value', () => {});
});
