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

exports.getContactById = (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  let contact = contacts.getContactsById(id);
  res.json(contact);
};

exports.updateContact = (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const { name, phone, email } = req.body;
  let contact = contacts.updateContactById(id, {
    name,
    phone,
    email,
  });
  res.json(contact);
};

exports.deleteContact = (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  let contact = contacts.deleteContactById(id);
  res.json(contact);
};

// 👉 req.params, req.query, এবং req.body থেকে পাওয়া ডাটা ডিফল্টভাবে string হয়।
// 👉 কারণ HTTP request সবসময় text-based হয়, তাই যেকোনো ডাটা প্রথমে string হিসেবে আসে।
