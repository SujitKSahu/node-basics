let dbOperation = require('../dataLayer/dbOperation');
let operation = require('../dataLayer/operations');


class CustomerService {
    //Save, delete, find

    save(customer, cb) {
        console.log('Customer is', JSON.stringify(customer));
        dbOperation.save(customer, (result) => {
            console.log(`THis is service layer, result got from datalayer`);
            cb(result)
        })
    }

    saveWithoutCallback(customer) {
        console.log('Customer is', JSON.stringify(customer));
        let result = operation.save(customer)
        return result;
    }

    findAll() {
        let result = operation.findAll();
        return result;
    }

    find(id) {
        let result = operation.find(id);
        return result;
    }
}

module.exports = new CustomerService();