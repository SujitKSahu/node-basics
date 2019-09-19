
let fs = require('fs');
let path = require('path');

class Operations {

    save(customer) {
        fs.writeFileSync(path.join(path.join(`${__dirname}`, '../../data/customer.txt')), JSON.stringify(customer));
        return 'Data Saved, customer id is ' + customer.Id;
    }

    findAll() {
        let customers = fs.readFileSync(path.join(path.join(`${__dirname}`, '../../data/customer.txt')))
        return customers;
    }

    find(id) {
        let _customers = fs.readFileSync(path.join(path.join(`${__dirname}`, '../../data/customer.txt')))
        //let customers = _customers.toString()
        return customers.toString(); //.find(customer => customer.Id == id)
    }
}

module.exports = new Operations();