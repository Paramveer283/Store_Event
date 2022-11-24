//Connection file to mongo db
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
};

// database schema
const transferSchema = new mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    value: { type: Number, required: true},
  },
  { timestamps: true }
);

const Transfer = new mongoose.model("Transfer", transferSchema);

module.exports = { Transfer, connectDB };