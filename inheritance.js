// con ereditarietà si intende la capacità di una classe di ESTENDERE un'altra
// estendendo una classe a partire da una già esistente, ne erediteremo tutte le funzionalità senza doverle riscriverle

class Computer {
  constructor(brand) {
    this.brand = brand
  }

  showBrand() {
    return 'Ho un computer ' + this.brand
  }
}

// esempio di oggetto creato con la classe Computer
// { brand: 'Apple', showBrand(){ return 'Ho un computer ' + this.brand } }

const macbook = new Computer('Apple')
const surface = new Computer('Microsoft')

console.log(macbook.showBrand())

// ora però servono anche oggetti fatti in altro tipo: dei computer che possiedono anche
// un modello

class ComputerWithModel extends Computer {
  // per merito dell'extend, ogni ComputerWithModel erediterà i metodi e le proprietà
  // di Computer
  constructor(brand, model) {
    // quello che voglio fare è utilizzare il parametro "brand" come facevo prima
    // quindi, INVOCHERÒ il costruttore di Computer passandogli "brand"
    super(brand) // super è un riferimento alla mia superclasse (Computer)
    // invocando super (super()) io invoco il COSTRUTTORE della superclasse
    // adesso mi ritrovo in ComputerWithModel ad avere una proprietà "brand"
    this.model = model
  }

  showModel() {
    return this.showBrand() + ', il modello è ' + this.model
  }
}

const macbookPro15 = new ComputerWithModel('Apple', 'Macbook Pro 15')
console.log(macbookPro15.brand) // non ho dichiarato una proprietà "brand" da nessuna
// parte in ComputerWithModel! ma la EREDITO grazie all'invocazione del costruttore
// di Computer, la classe che sto estendendo, eseguita tramite super()
console.log(macbookPro15.model)

console.log(macbookPro15.showBrand()) // questo arriva dalla classe Computer
console.log(macbookPro15.showModel()) // questo arriva dalla classe ComputerWithModel

// console.log(macbookPro15.showBrand() + ', il modello è ' + macbookPro15.model)
