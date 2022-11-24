const { Transfer } = require("./config");

const storeDataToDatabase = async (from, to, value) =>{
    try {
        // create a document and store to the database
        const newTransfer = await Transfer.create({
          from: from,
          to: to,
          value: value,
        
        });
        if(newStudent){
            // return newStudent
            console.log("Data stored successfully")
        }
    } catch (error) {
      console.log(error)
    }
  }

module.exports = {storeDataToDatabase};