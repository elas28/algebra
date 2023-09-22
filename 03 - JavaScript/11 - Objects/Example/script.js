// Creating an object by using the new Object() method
var myCar = new Object();

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);

myCar.color = 'Blue';
console.log(myCar);

// Creating an object by using the object literal

var person = {
    firstName: 'Nino',
    lastName: 'Škuflić',
    id: 115648972,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.id);
console.log(person.lastName);
console.log(person.fullName());

myJson = `{ "id": 1, "name": "Georgiana Girling", "birthday": "10/28/1979", "address": { "street": "521 Memorial Street", "city": "Ayo", "country": "Peru" }, "email": "ggirling0@163.com", "phone": "843-489-1376" }`;
myObject = JSON.parse(myJson);

console.log(myObject.address.city);

// Another object example
var phones = {
    brand: {
        manufacturer: 'Apple',
        model: 'iPhone 15 Pro Max'
    },
    color: ['Sierra Blue', 'Silver', 'Gold', 'White'],
    price: 999,
    display: '6.1-inch display',
    qty: 184,
    checkStock: function () {
        if (this.qty > 0) {
            return 'in-stock';
        } else {
            return 'out-of-stock';
        }
    }
}

console.log(`You have selected ${phones.brand.model}. ${phones.checkStock() == 'in-stock' ? 'Congrats, this phone is in stock.' : 'Sorry, we do not have that phone in stock.'}`);

var myPhonesJSON = JSON.stringify(phones);
console.log(myPhonesJSON);