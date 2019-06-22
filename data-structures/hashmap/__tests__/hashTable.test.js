const HashTable = require('../hashTable');

describe('HashTable', () => {
  it('Adding a key/value pair works', () => {
    const hashtable = new HashTable(2);
    expect(hashtable.data[0]['base']).toBeUndefined();
    expect(hashtable.add('base', 'ball')).toEqual('ball');
  });

  it('Get(key) returns value for key', () => {
    const hashtable = new HashTable(2);
    hashtable.add('basket', 'ball');
    hashtable.add('base', 'ball');
    expect(hashtable.get('base')).toEqual('ball');
    expect(hashtable.get('basket')).toEqual('ball');
  });

  it('Get(key) returns null if key not in hashtable', () => {
    const hashtable = new HashTable(10);
    hashtable.add('basket', 'ball');
    expect(hashtable.get('madeUpKey')).toBeNull();
    expect(hashtable.get('basket')).not.toBeNull();
    expect(hashtable.get('basket')).toEqual('ball');
  });

  it('Handle a collision within the hashtable', () => {
    const hashtable = new HashTable(2);
    hashtable.add('basket', 'ball');
    hashtable.add('base', 'ball');
    hashtable.add('base', 'ball2');
    hashtable.add('volley', 'ball');
    expect(hashtable.get('basket')).toEqual('ball');
    expect(hashtable.get('base')).toEqual('ball2');
    expect(hashtable.get('volley')).toEqual('ball');
    expect(hashtable.get('fake')).toBeNull();
    expect(hashtable.data.length).toEqual(2);
  });

  it('Retrieve a value from a bucket within the hashtable that has a collision', () => {
    const hashtable = new HashTable(2);
    hashtable.add('basket', 'ball');
    hashtable.add('base', 'ball');
    hashtable.add('volley', 'ball');
    expect(hashtable.get('basket')).toEqual('ball');
    expect(hashtable.get('base')).toEqual('ball');
    expect(hashtable.get('volley')).toEqual('ball');
  });

  it('Hash a key to an in-range value', () => {
    const hashtable = new HashTable(100);
    let keyHash = hashtable._hash('base');
    expect(keyHash > 0 && keyHash < 100).toBeTruthy();
    keyHash = hashtable._hash('basket');
    expect(keyHash > 0 && keyHash < 100).toBeTruthy();
    keyHash = hashtable._hash('someKey');
    expect(keyHash > 0 && keyHash < 100).toBeTruthy();
  });
});
