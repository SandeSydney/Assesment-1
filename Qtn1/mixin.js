class MedShop{
  constructor(empName){
    this.employeeName = empName
  }

  work() {
    console.log(this.employeeName, "Works at the Medicine Shop") 
  }
}

// Pharmacist 
class Pharmacist extends MedShop{
  constructor(){
    super()
    this.employeeName = 'Pharmacist'
  }
  work(){
    console.log("Writes prescriptions to people");
  }
}

// Cashier
class Cashier extends MedShop{
  constructor(){
    super()
    this.employeeName = 'Cashier'
  }
  work(){
    MedShop.prototype.work()
    console.log("Collects Cash");
    console.log("Returns Cash to the Medicine Shop");
  }
}

// Manager
class Manager extends MedShop{
  constructor(){
    super()
    this.employeeName = 'Manager'
  }
  work(){
    console.log("Manages Employees")
    super.work()
    Pharmacist.prototype.work()
    Cashier.prototype.work()
  }
}