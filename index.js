const { program } = require("commander");
const contacts = require("./contacts.js");

program
  .option("-a, --action,  <action>", "Action to invoke")
  .option("-i, --id,  <id>", "Contact ID")
  .option("-n, --name,  <name>", "Contact name")
  .option("-e, --email,  <email>", "Contact email")
  .option("-p, --phone,  <phone>", "Contact phone");

program.parse(process.argv);

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "get":
      const oneContact = await contacts.getContactById(id);
      if (!oneContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    case "update":
      const updateContact = await contacts.updateContactById(id, {
        name,
        email,
        phone,
      });
      if (!updateContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      return console.log(updateContact);
    case "remove":
      const removeContact = await contacts.removeContactById(id);
      if (!removeContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      return console.log(removeContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

(async () => {
  await invokeAction(options);
})();
