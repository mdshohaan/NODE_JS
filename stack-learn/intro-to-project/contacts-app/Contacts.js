class Contact {
  constructor() {
    this.contacts = [];
  }
  getAllContacts() {
    return this.contacts;
  }
  getContactsById(id) {
    return this.contacts.find((contact) => contact.id === id);
  }
}
