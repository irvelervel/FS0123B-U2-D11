console.log('la funzione constructor')

// la funzione costruttore è utile a creare in serie numerosi oggetti dotati delle
// stesse caratteristiche

let person1 = {
  name: 'Mario',
  surname: 'Bros',
  address: 'Via Roma 1',
  email: 'mario.bros@gmail.com',
  showCompleteName: function () {
    return this.name + ' ' + this.surname
  },
}

// benissimo, ora cerchiamo di "generalizzare" questa struttura al fine di creare
// altri oggetti dotati delle stesse proprietà/metodi

// NON vogliamo copiare/incollare l'oggetto, seguiamo la filosofia D R Y

// creiamo una funzione costruttore per riutilizzare la stessa struttura

const Person = function () {
  // convenzione: lettera iniziale MAIUSCOLA
  // definisco le proprietà che ogni oggetto di tipo Person possiederà:
  this.name = ''
  this.surname = ''
  this.address = ''
  this.email = ''
  this.showCompleteName = function () {}
}

// ho creato lo "scheletro" per oggetti fatti così:
// { name: '', surname: '', address: '', email: '', showCompleteName: function () {} }

let luigiBros = new Person()
console.log('luigiBros', luigiBros)
luigiBros.name = 'Luigi'
luigiBros.surname = 'Mario'
luigiBros.address = 'Mushroom Kingdom 5'
luigiBros.email = 'luigi.bros@gmail.com'
luigiBros.showCompleteName = function () {
  return this.name + ' ' + this.surname
}

// delete luigiBros.email // elimina la proprietà email solo sull'istanza luigiBros
console.log('luigiBros', luigiBros)

// ok funziona! però devo comunque a manina assegnare i valori delle proprietà...
// ...e tra l'altro rischio comunque di "inquinare" l'oggetto con proprietà che
// non erano state previste originariamente...
luigiBros.firstName = 'Gigi' // :(
console.log('luigiBros', luigiBros)

// proviamo a creare adesso un costruttore più furbo che utilizza dei PARAMETRI
const NamedPerson = function (name, surname, address, email, showCompleteName) {
  this.name = name
  this.surname = surname
  this.address = address
  this.email = email
  this.showCompleteName =
    showCompleteName || // verrà assegnata la seguente funzione nel caso
    // non venga invocata la funzione construttore con un quinto parametro
    function () {
      return this.name + ' ' + this.surname
    }
  //   this.age = 100 // la proprietà age avrà per tutte le istanze di NamedPerson un valore
  // fisso, ovvero 100
}

// è possibile aggiungere proprietà o metodi in un secondo momento ad un costruttore
// agendo sul suo prototipo
NamedPerson.prototype.age = 100

let namedLuigi = new NamedPerson(
  'Luigi',
  'Bros',
  'Mushroom Street 52',
  'luigi@bros.com',
  function () {
    console.log(this)
    return 'Ciao, mi chiamo ' + this.name
  }
)

console.log('namedLuigi', namedLuigi)
console.log(namedLuigi.showCompleteName())

console.log(namedLuigi.age)
// in JS, se una proprietà/metodo non viene trovata su un oggetto, viene cercata
// nel suo protitipo (che è esattamente dove abbiamo aggiunto la proprietà age)
