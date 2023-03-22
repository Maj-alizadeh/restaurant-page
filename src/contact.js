function contactPage() {
  const contact = document.createElement("div");
  contact.classList.add("contact");
  const location = document.createElement("p");
  location.innerText = "Location";
  location.classList.add("contact-bold");
  const address = document.createElement("p");
  address.innerText = "	277 Canal St, New York";
  const phoneNumber = document.createElement("p");
  const phone = document.createElement("p");
  phone.classList.add("contact-bold");
  phone.innerText = "Phone";
  phoneNumber.innerText = "123456789";
  const workingHours = document.createElement("p");
  workingHours.innerText = "Working Hours";
  workingHours.classList.add("contact-bold");
  const hours1 = document.createElement("p");
  hours1.innerText = "Friday & Saturday at 1:00p";
  const hours2 = document.createElement("p");
  hours2.innerText = "Thursday, Sunday, & Monday at 4:30p";

  contact.appendChild(location);
  contact.appendChild(address);
  contact.appendChild(phone);
  contact.appendChild(phoneNumber);
  contact.appendChild(workingHours);
  contact.appendChild(hours1);
  contact.appendChild(hours2);

  return contact;
}

export default contactPage();
