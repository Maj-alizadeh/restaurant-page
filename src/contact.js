// P element creator
function elementCreator(type, innerText, classList) {
  const element = document.createElement(type);
  element.innerText = innerText;
  element.classList = classList;
  return element;
}

function contactPageMaker(contact) {
  const location = elementCreator("p", "Location", "contact-bold");
  const address = elementCreator("p", "277 Canal St, New York");
  const phone = elementCreator("p", "Phone", "contact-bold");
  const phoneNumber = elementCreator("p", "123-456789");
  const workingHours = elementCreator("p", "Working Hours", "contact-bold");
  const hours1 = elementCreator(
    "p",
    "Friday & Saturday at 1:00p \n Thursday, Sunday, & Monday at 4:30p"
  );

  contact.appendChild(location);
  contact.appendChild(address);
  contact.appendChild(phone);
  contact.appendChild(phoneNumber);
  contact.appendChild(workingHours);
  contact.appendChild(hours1);
}

function contactPage() {
  const contact = elementCreator("div", "", "contact");
  contactPageMaker(contact);

  return contact;
}

export default contactPage();
export { elementCreator };
