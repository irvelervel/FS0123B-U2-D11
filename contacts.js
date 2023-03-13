// prendiamo i riferimenti del DOM a:
// campo name
let nameInputReference = document.getElementById('name-field')
// campo surname
let surnameInputReference = document.getElementById('surname-field')
// bottone
let addButtonReference = document.getElementById('add')
// lista inizialmente vuota
let contactsListReference = document.getElementById('contacts-list')

let contacts = []

class Contact {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }
  // { name: 'Gino', surname: 'Paoli' }
}

// definisco renderList()
const renderList = () => {
  contactsListReference.innerHTML = ''
  contacts.forEach((contact) => {
    // per ogni contatto cosa farò?
    // 1) creerò un <li> con il suo nome + cognome
    const newLi = document.createElement('li')
    // ho ottenuto un <li></li>
    // ora aggiungo nome + cognome
    newLi.innerText = contact.name + ' ' + contact.surname
    // ho ottenuto un <li>Gino Paoli</li>
    // 2) lo aggiungerò all'<ul>
    contactsListReference.appendChild(newLi)
    // <ul><li>Gino Paoli</li></ul>
  })
}

addButtonReference.addEventListener('click', () => {
  console.log('bottone cliccato!')
  let newContact = new Contact(
    nameInputReference.value, // valore dell'input name
    surnameInputReference.value // valore dell'input surname
  )
  // ho creato un oggetto di tipo Contact
  console.log(newContact)
  // lo pusho nell'array dei contatti
  contacts.push(newContact)
  console.log(contacts)
  //   azzera gli input per facilitare l'inserimento di un nuovo contact
  nameInputReference.value = ''
  surnameInputReference.value = ''
  renderList()
})
