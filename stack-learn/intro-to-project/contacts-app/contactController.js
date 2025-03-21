const contacts = require("./Contacts");

exports.getAllContacts = (req, res) => {
  res.json(contacts.getAllContacts());
};

exports.createContact = (req, res) => {
  const { name, phone, email } = req.body;
  let contact = contacts.createContact({
    name,
    phone,
    email,
  });
  res.json(contact);
};
