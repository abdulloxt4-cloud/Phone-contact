const contacts = [];

function addContact() {
  const name = document.getElementById("nameInput").value;
  const number = document.getElementById("numberInput").value;

  const ruxsat = confirm(name + " ni qo'shishni xohlaysizmi?");

  if (ruxsat) {
    contacts.push({ name: name, number: number });
    document.getElementById("nameInput").value = "";
    document.getElementById("numberInput").value = "";
    showContacts();
  }
}

function contactCount() {
  return contacts.length;
}

const getNames = () => contacts.map(c => c.name);

function showContacts() {
  const list = document.getElementById("contactList");
  list.innerHTML = "";

  contacts.forEach(function(c) {
    list.innerHTML = list.innerHTML +
      "<div class='contact'>" +
      c.name + " — " + c.number +
      "</div>";
  });
}
