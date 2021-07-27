
const express = require("express");
const app = express();
const faker=require("faker")

class User {
  constructor(){
    this.First_name=faker.name.firstName()
    this.Last_name=faker.name.lastName()
    this.phoneNumber=faker.phone.phoneNumber()
    this.email=faker.internet.email()

  }


}

class Company{
    constructor(){
      this.Name=faker.company.companyName();
      this.Street=faker.address.streetName();
      this.City=faker.address.cityName();
      this.Zip=faker.address.zipCode();
      this.Country=faker.address.country();

      

    }


}





const newuser= new User();
const newcompany= new Company();



app.get("/api/user", (req, res) => {
  res.json(`fisrt name: ${newuser.First_name} last name:  ${newuser.Last_name} phone: ${newuser.phoneNumber} email: ${newuser.email} ` );
});


app.get("/api/company", (req, res) => {
  res.json(`Street: ${newcompany.Street} City:  ${newcompany.City} ZIP: ${newcompany.Zip} Country: ${newcompany.Country} ` );
});

// app.get("/api/user", (req, res) => {
//   res.send("Our ");
// });



const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
