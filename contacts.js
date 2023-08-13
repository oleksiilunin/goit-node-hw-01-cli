const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function write(data) {
  return fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
}

// TODO: задокументировать каждую функцию
async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
}

async function addContact(contactData) {
  const contacts = await listContacts();

  const newContact = { ...contactData, id: crypto.randomUUID() };

  contacts.push(newContact);

  await write(contacts);

  return newContact;
}

async function updateContactById(contactId, data) {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) {
    return null;
  }

  contacts[index] = { ...data, id: contactId };

  await write(contacts);

  return contacts[index];
}

async function removeContactById(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }

  const [result] = contacts.splice(index, 1);
  await write(contacts);
  return result;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContactById,
};
