'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

class Animal {
  constructor(type, name) {
    this.name = name;
    this.type = type;
  }
}

describe('AnimalShelter', () => {

  it('initializes new AnimalShelter object', () => {
    let shelter = new AnimalShelter();
    expect(shelter.dogs).toBeDefined();
    expect(shelter.cats).toBeDefined();
    expect(shelter.count).toEqual(0);
  });

  describe('enqueue(animal) method', () => {
    it('adding dogs', () => {
      let shelter = new AnimalShelter();
      let dog = new Animal('dog', 'Cody');
      let dog1 = new Animal('dog', 'Tom');
      let dog2 = new Animal('dog', 'Alex');
      let dog3 = new Animal('dog', 'Jake');
      let dog4 = new Animal('dog', 'Rachel');

      shelter.enqueue(dog);
      shelter.enqueue(dog1);
      expect(shelter.count).toEqual(2);
      shelter.enqueue(dog2);
      shelter.enqueue(dog3);
      shelter.enqueue(dog4);
      expect(shelter.count).toEqual(5); // total animals that have been at the shelter
    });
  
    it('adding cats', () => {
      let shelter = new AnimalShelter();
      let cat = new Animal('cat', 'Cody');
      let cat1 = new Animal('cat', 'Tom');
      let cat2 = new Animal('cat', 'Alex');
      let cat3 = new Animal('cat', 'Jake');
      let cat4 = new Animal('cat', 'Rachel');
      shelter.enqueue(cat);
      shelter.enqueue(cat1);
      expect(shelter.count).toEqual(2);
      shelter.enqueue(cat2);
      shelter.enqueue(cat3);
      expect(shelter.count).toEqual(4);
      shelter.enqueue(cat4);
      expect(shelter.count).toEqual(5); // total animals that have been at the shelter
    });
  
    it('adding animal not of type dog or cat returns exception', () => {
      let shelter = new AnimalShelter();
      let snake = new Animal('snake', 'ssss');
      let dog = new Animal('dog', 'roof');
      expect(() => shelter.enqueue(snake)).toThrow(/wrong shelter/ig);
      expect(shelter.enqueue(dog)).toEqual(1);
    });
  });

  describe('dequeue(pref) method', () => {
    it('dequeue of empty shelter returns null for any animal preference', () => {
      let shelter = new AnimalShelter();
      let dog = new Animal('dog', 'buress');

      expect(shelter.dequeue('')).toBeNull();
      expect(shelter.enqueue(dog)).toEqual(1);
      expect(shelter.dequeue('')).toBeDefined();
    });
  
    it('dequeue with preference cat returns senior cat in shelter', () => {
      let shelter = new AnimalShelter();
      let cat = new Animal('cat', 'buress');
      let cat1 = new Animal('cat', 'joe');
      let dog1 = new Animal('dog', 'tom');
      let dog2 = new Animal('dog', 'kate');


      expect(shelter.enqueue(cat)).toEqual(1);
      expect(shelter.enqueue(cat1)).toEqual(2);
      expect(shelter.enqueue(dog1)).toEqual(3);
      expect(shelter.enqueue(dog2)).toEqual(4);


      expect(shelter.dequeue('cat').name).toEqual('buress');
      expect(shelter.dequeue('cat').name).toEqual('joe');
    });

    it('dequeue with preference dog returns senior dog in shelter', () => {
      let shelter = new AnimalShelter();
      let dog = new Animal('dog', 'buress');
      let dog1 = new Animal('dog', 'joe');
      let cat1 = new Animal('cat', 'tom');
      let cat2 = new Animal('cat', 'kate');

      expect(shelter.enqueue(dog)).toEqual(1);
      expect(shelter.enqueue(cat1)).toEqual(2);
      expect(shelter.enqueue(cat2)).toEqual(3);
      expect(shelter.enqueue(dog1)).toEqual(4);

      expect(shelter.dequeue('dog').name).toEqual('buress');
      expect(shelter.dequeue('dog').name).toEqual('joe');
    });
  
    it('dequeue with preference dog returns null if no dogs in shelter', () => {
      let shelter = new AnimalShelter();
      let cat1 = new Animal('cat', 'tom');
      let cat2 = new Animal('cat', 'kate');

      expect(shelter.enqueue(cat1)).toEqual(1);
      expect(shelter.enqueue(cat2)).toEqual(2);
      
      expect(shelter.dequeue('dog')).toBeNull();
    });

    it('dequeue with preference cat returns null if no cats in shelter', () => {
      let shelter = new AnimalShelter();
      let dog = new Animal('dog', 'buress');
      let dog1 = new Animal('dog', 'joe');

      expect(shelter.enqueue(dog)).toEqual(1);
      expect(shelter.enqueue(dog1)).toEqual(2);

      expect(shelter.dequeue('cat')).toBeNull();
    });

    it('dequeue with preference other than dog and cat return null', () => {
      let shelter = new AnimalShelter();
      let dog = new Animal('dog', 'buress');
      let dog1 = new Animal('dog', 'joe');

      expect(shelter.enqueue(dog)).toEqual(1);
      expect(shelter.enqueue(dog1)).toEqual(2);

      expect(shelter.dequeue('snake')).toBeNull();
    });
  
    it('dequeue with empty string preference returns most senior animal in shelter', () => {
      let shelter = new AnimalShelter();
      let dog = new Animal('dog', 'buress');
      let cat1 = new Animal('cat', 'tom');
      let cat2 = new Animal('cat', 'kate');
      let dog1 = new Animal('dog', 'joe');

      expect(shelter.enqueue(dog)).toEqual(1);
      expect(shelter.enqueue(cat1)).toEqual(2);
      expect(shelter.enqueue(cat2)).toEqual(3);
      expect(shelter.enqueue(dog1)).toEqual(4);

      expect(shelter.dequeue('').name).toEqual('buress');
      expect(shelter.dequeue('').name).toEqual('tom');
    });
  });
});