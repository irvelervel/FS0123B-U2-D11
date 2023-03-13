console.log('recap oggetti')

// definiamo un oggetto in JS con la definizione letterale: aprendo le graffe
let myHouse = {
  // un oggetto può contenere infinite coppie chiave/valore
  // queste coppie chiave/valore possono definire una caratteristica dell'oggetto
  // (attributo, o proprietà)
  // oppure una funzionalità dell'oggetto
  // (un metodo)
  'color-of-the-wall': 'yellow', // nome proprietà un po' particolare...
  floors: 10,
  collapse: function () {
    console.log('ouch!')
  },
}

// per accedere alle proprietà/metodi esistono due modi:
// 1) dot notation
console.log(myHouse.floors) // 10

// 2) square brackets notation
console.log(myHouse['color-of-the-wall'])

// invochiamo collapse() con la dot notation
myHouse.collapse()

let person = {
  firstName: 'Mike',
  lastName: 'Bongiorno',
  address: {
    // address sarà a sua volta un oggetto
    street: 'Via Roma 22',
    zipCode: 12345,
  },
}

console.log(person.address.zipCode) // 12345

person.firstName = 'Stefano'
person.age = 35
console.log('person', person)

// metodi negli oggetti
let anotherPerson = {
  name: 'Mario',
  surname: 'Rossi',
  sayHello: function () {
    console.log('Hello, my name is ' + this.name) // funziona...?
  },
}

anotherPerson.sayHello()

let anotherPerson2 = anotherPerson // creo un nuovo riferimento per lo stesso oggetto in memoria
anotherPerson = null // elimino il riferimento originale all'oggetto

// adesso anotherPerson2 è l'unico modo rimasto per accedere all'oggetto
anotherPerson2.sayHello()

// come creare molti oggetti "simili" in JS?
// farli a mano non è una grande idea...

let dog1 = {
  name: 'Fido',
  breed: 'Corgi',
}

let dog2 = {
  name: 'Fufy',
  breed: 'Labrador',
}

let dog3 = {
  names: 'Gigi', // posso sbagliare il nome della proprietà inavvertitamente
  bred: 'Golden', // posso sbagliare il nome della proprietà inavvertitamente
}

// la metodologia corretta per creare degli oggetti "simili" in serie
// è utilizzare una speciale funzione: la funzione COSTRUTTORE

// proseguiamo su constructor.js :)
