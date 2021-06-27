const argv = require('yargs').argv;

const { jsonReader } = require('./utils');
const { listContacts, addContact, removeContact, getContactById } = jsonReader;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
      case 'list':
        const list = await listContacts();
        console.table(list)
      break;

      case 'get':
        const contact = await getContactById(id);
        console.table(contact)
      break;

      case 'add':
        const newList = await addContact(name, email, phone)
       console.table(newList);
      break;

      case 'remove':
        const updatedList = await removeContact(id)
       console.table(updatedList);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);