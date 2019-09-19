let customerService = require('../businessLayer/customerService');
let Customer = require('../model/customer');

function CustomerAPI(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;

    this.saveCustomer = function () {
        let customer = new Customer(this.id, this.name, this.age);
        customerService.save(customer, (result) => {
            console.log('Result from service layer')
            // console.log(result)
        })
    }

    this.save = function () {
        let customer = new Customer(this.id, this.name, this.age);
        let result = customerService.saveWithoutCallback(customer);
        return result;
    }

    this.findAll = function () {
        let result = customerService.findAll();
        return result.toString();
    }

    this.find = function (id) {
        //TODO  call service\
        let result= customerService.find(id);
        return result
    }
}



let obj = new CustomerAPI(2, 'Mukesh', 29);
//console.log(obj.save());
//console.log(obj.findAll())
console.log(obj.find(1))