const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    get name() {
      return this._name;
    },
    set name(name){
      this._name = name;
    },
    _breed: breed,
    get breed() {
      return this._breed;
    },
    set breed(breed){
      this._breed = breed;
    },
    _weight: weight,
    get weight(){
      return this._weight;
    },
    set weight(weight){
      this._weight = weight;
    },
    bark(){
      return 'ruff! ruff!';
    },
    eatTooManyTreats(){
      this._weight++;
    }
  }
};

console.log(dogFactory('Otis', 'Black Lab', 35));
