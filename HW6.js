$(document).ready(function() {
    $("#ShowDisplayScreen").click(function(){
      $("#form1").hide();
      $("#DisplayScreen").show();
    });
  
    $("#ShowFormScreen").click(function(){
      $("#DisplayScreen").hide();
      $("#form1").show();
    });
  
    let contacts = [];
  
    class Contact {
      constructor(firstName, lastName, streetaddress, city, state, zipCode, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetaddress = streetaddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phone = phone;
        this.email = email;
      }
    }
  //chatGPT for lines 27-37 because my HW6PrepLab code i tried to get inspiration couldnt
    function displaySorted(contacts) {
        const sorted = contacts.sort((a, b) => a.lastName < b.lastName ? -1 : 1);
        const list = sorted.map(contact => {
          const name = $('<b></b>').text(`${contact.lastName}, ${contact.firstName}`);
          const address = $('<div></div>').text(`${contact.streetaddress}\n${contact.city}, ${contact.state}    ${contact.zipCode}`);
          const phone = $('<div></div>').text(`${contact.phone}`);
          const email = $('<div></div>').text(`${contact.email}`);
          return $('<li></li>').append(name, address, phone, email);
        });
        $("#contactList").html(list);
      }
  
    $("#submit").click(function(event){
      event.preventDefault();
  
      const firstName = $("#firstname").val();
      const lastName = $("#lastname").val();
      const streetaddress = $("#streetaddress").val();
      const city = $("#City").val();
      const state = $("#State").val();
      const zipCode = $("#zipcode").val();
      const phone = $("#phone").val();
      const email = $("#email").val();
  
      const contact = new Contact(firstName, lastName, streetaddress, city, state, zipCode, phone, email);
      contacts.push(contact);
  
      displaySorted(contacts);
  
      $("#firstname").val("");
      $("#lastname").val("");
      $("#streetaddress").val("");
      $("#City").val("");
      $("#State").val("");
      $("#zipcode").val("");
      $("#phone").val("");
      $("#email").val("");
    });
  });
  