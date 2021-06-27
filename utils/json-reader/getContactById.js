const contactList = require('./listContacts');

const getContactById = async (contactId) => {
    try {
        const list = await contactList();
        const contact = list.find(item => item.id === contactId);
        return contact;
    }
    catch (error) {
        throw error;
    }
}

module.exports = getContactById;