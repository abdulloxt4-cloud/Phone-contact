const contacts = [];

// VOID — hech narsa qaytarmaydi, faqat qo'shadi
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

// RETURN — kontaktlar sonini qaytaradi
function contactCount() {
  return contacts.length;
}

// ARROW — faqat ismlarni oladi
const getNames = () => contacts.map(c => c.name);

// VOID — ekranda ko'rsatadi
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