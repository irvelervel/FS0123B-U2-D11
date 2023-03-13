// le classi in JS sono un metodo alternativo per la creazione di oggetti in serie
// sotto al cofano funzionano esattamente come le funzioni costruttore, di fatto
// sono semplicemente un modo diverso per scriverle

class Person {
  // constructor è la funzione in carico di inizializzare l'oggetto
  // a partire dai parametri utilizzati durante l'invocazione della classe
  constructor(name, surname, address, email) {
    this.name = name
    this.surname = surname
    this.address = address
    this.email = email
    // constructor è l'unico posto in cui posso inizializzare una proprietà
    // tramite i parametri
  }

  // stefano è un valore fisso, non dipende dai parametri, lo dichiaro
  // come attributo della classe
  stefano = 100

  sayHello() {
    return 'Hello, my name is ' + this.name
  }
}

const person1 = new Person(
  'Luigi',
  'Bianchi',
  'Via Fiumicino 23',
  'luigi.bianchi@gmail.com'
)

console.log(person1)
console.log(person1.sayHello())

const person2 = new Person(
  'Giuseppe',
  'Verdi',
  'Via Fiumicino 23',
  'luigi.bianchi@gmail.com'
)
console.log(person2.sayHello())
