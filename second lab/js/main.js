//first part Sets 
const arrayOfFood = ["burger", "pizza", "donuts", "pizza", "koshary", "donuts", "seafood", "burger"];
const mySet = new Set(arrayOfFood);
console.log(mySet);
mySet.add("pasta");
console.log(mySet);
mySet.delete("burger");
console.log(mySet);

function clearSet(set) {
    if (set.size > 2) {
        set.clear();
    }

    console.log(set);
}
clearSet(mySet);
//....................................................................................................
// second Part Classes

var vehicleCount = 0;
class Vehicle {
    constructor(wheels = 4, speed = 100) {
        this._wheels = wheels;
        this._speed = speed;
        vehicleCount++;
    }


    static compareSpeed() {

    }

}

class Bike extends Vehicle {
    constructor(wheels = 2, speed = 10, basket = true) {
        super(wheels, speed);
        this._basket = basket;
    }

}
//...................................................................................

// third part Async and await 

async function fetchJsonFile() {
    const response = await fetch('../user.json');

    const file = await response.json();

    const result = file['results'];

    // merge first name and last name 

    for (let item of result) {

        let firstName = item['name']['first'];
        let lastName = item['name']['last'];
        let fullName = `${firstName} ${lastName}`;
        item['name'].fulName = fullName;

    }

    // print only mens over 50 
    for (let item of result) {
        if (item["dob"]["age"] > 50 && item['gender'] == 'male') {
            console.log(item);
        }



    }

    // Print older french Human 
    let sum = 0;
    for (let item of result) {


        if (item['location']['country'] == 'France') {

            if (sum < item["dob"]["age"]) {
                sum = item["dob"]["age"];
            }


        }
    }
    console.log(sum);


}


fetchJsonFile();

//...................................................................................
//Forth Part iterable object


let range = {
    from: 1,
    to: 10,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
}