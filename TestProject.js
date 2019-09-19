let fs = require('fs')
let path = require('path')

class Operations {

    save(customer) {
        fs.writeFileSync(path.join(path.join(`${__dirname}`, './data/customer.txt')), JSON.stringify(customer));
        return 'Data Saved, customer id is ' + customer.Id;
    }

    findAll() {
        let customers = fs.readFileSync(path.join(path.join(`${__dirname}`, './data/customer.txt')))
        return customers;
    }

    find(id) {
        let _customers = fs.readFileSync(path.join(path.join(`${__dirname}`, './data/customer.txt')))
        //let customers = _customers.toString()
        return customers.toString(); //.find(customer => customer.Id == id)
    }
}


class CustomerService {
    //Save, delete, find
    constructor() {
        this.operation = new Operations()
    }

    saveWithoutCallback(customer) {
        console.log('Customer is', JSON.stringify(customer));
        let result = this.operation.save(customer)
        return result;
    }

    findAll() {
        let result = this.operation.findAll();
        return result;
    }

    find(id) {
        let result = this.operation.find(id);
        return result;
    }
}


class Customer {
    constructor(id, name, age) {
        this.Id = id;
        this.name = name;
        this.age = age;
    }
}


function CustomerAPI(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.customerService = new CustomerService();

    this.saveCustomer = function () {
        let customer = new Customer(this.id, this.name, this.age);
        this.customerService.save(customer, (result) => {
            console.log('Result from service layer')
            // console.log(result)
        })
    }

    this.save = function () {
        let customer = new Customer(this.id, this.name, this.age);
        let result = this.customerService.saveWithoutCallback(customer);
        return result;
    }

    this.findAll = function () {
        let result = this.customerService.findAll();
        return result.toString();
    }

    this.find = function (id) {
        //TODO  call service\
        let result = this.customerService.find(id);
        return result
    }
}



let obj = new CustomerAPI(2, 'Mukesh', 29);
//console.log(obj.save());
console.log(obj.findAll())
//console.log(obj.find(1))


//module.exports = new CustomerService();
