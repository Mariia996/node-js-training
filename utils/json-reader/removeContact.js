const contactList = require('./listContacts');

const removeContact = async (contactId) => {
    try {
        const list = await contactList();
        const idx = list.findIndex(item => item.id === contactId);
        list.splice(idx, 1);
        return list;
    }
    catch (error) {
        throw error;
    }
}

module.exports = removeContact;