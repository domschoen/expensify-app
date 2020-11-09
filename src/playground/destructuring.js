const person = {
    age:27,
    location: {
        city: 'Lausanne',
        temp: 6
    }
}

const {name = 'Anonymous', age} = person;

//const name = person.name;
//const age = person.age;


console.log(`${name} is ${age}.`)

const {cityL, temp: temperature} = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} is ${cityL}.`)
}

const book = {
    title : 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};


const { name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName);

//// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//const address = ['1299 S Juniper Street', 'Philadelphia'];
const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [beverage, , mediumPrice] = item;

console.log(`A medium ${beverage} costs ${mediumPrice}`);

