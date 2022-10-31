/* 
    Question Instructions:
    Design a class pattern for the following requirements using JavaScript.
    A pharmacist writes prescriptions to people.
    A cashier collects cash and returns cash to pharmacy
    A manager manages employees
    A manager can sometimes work as a cashier and a pharmacist.
*/

// Generic employee class
class MedShopEmployee{
    constructor(title){
        this.title = title
    }
    medEmployee(){
        console.log(`${this.title} is a member of this Pharmacy`);
    }
}


// Specific pharmacist class
class Pharmacist extends MedShopEmployee{
    constructor(){
        super()
        this.title = "Pharmacist John"
    }

    writePrescription(){
        super.medEmployee()
        console.log(`${this.title} Writes prescriptions to people`);
    }
}



// Specific Cashier class
class Cashier extends MedShopEmployee{
    constructor(title){
        super()
        this.title = title
    }

    collectCash(){
        console.log(`${this.title} Collects cash`);
    }
    returnCash(){
        console.log(`${this.title} Returns cash to pharmacy`);
    }
}

// testing cashier class
console.log(new Cashier('Michael').collectCash());
console.log(new Cashier('Michael').medEmployee());


// Mixin class to inherit various employee tasks
let allTasksMixin = {
    collectCash(){
        console.log(`${this.title} Collects cash`);
    },
    returnCash(){
        console.log(`${this.title} Returns cash to pharmacy`);
    },
    writePrescription(){
        console.log(`${this.title} Writes prescription to people`);
    }
}


// Specific Manager class, gets the mixin
class Manager extends MedShopEmployee{
    constructor(title){
        super()
        this.title = title
    }
    manageEmployees(){
        console.log(`${this.title} manages employees`);
    }
}

// copying object properities from mixin
Object.assign(Manager.prototype, allTasksMixin)


// managers performing all tasks and member of pharmacy
console.log(new Manager('Manager Frank').medEmployee())
console.log(new Manager('Manager Frank').collectCash())
console.log(new Manager('Manager Frank').returnCash())
console.log(new Manager('Manager Frank').manageEmployees())