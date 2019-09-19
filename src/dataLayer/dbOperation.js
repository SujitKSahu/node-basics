
class DbOperation {

    save(customer, cb) {
        //SAVE
        console.log('Data inserted successfully')
        cb('Data inserted successfully')
    }


    delete(customerId, cb) {
        //SAVE
        console.log('Data deleted successfully')
        cb('Data deleted successfully')
    }



    find(customerId, cb) {
        //SAVE
        console.log(`${customerId} found successfully`)
        cb(`${customerId} found successfully`);
    }
}

module.exports = new DbOperation();