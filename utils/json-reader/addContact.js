const fs = require('fs').promises;
const { v4 } = require("uuid");
const contactsPath = require("./contactsPath");
const contactList = require('./listContacts');

const addContact = async (name, email, phone) => {
    try {
        const list = await contactList();
        const newContactId = v4();
        list.push({
            id: newContactId,
            name,
            email,
            phone
        });
        fs.writeFile(contactsPath, JSON.stringify(list));
        return list;
    }
    catch (error) {
        throw error;
    }
}

module.exports = addContact;