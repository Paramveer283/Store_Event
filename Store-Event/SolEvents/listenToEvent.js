const ethers = require('ethers');
const tokenABI = require("./abi.json");
require("dotenv").config();
const { connectDB } = require("./config");
const { storeDataToDatabase} = require("./store");

connectDB();


async function main() {
    const witsAddress = "0xe4D52526BbC578948936E28851E45c5c4317CB5c";
    const provider = new ethers.providers.InfuraProvider(
        `https://goerli.infura.io/v3/${process.env.INFURA_ID}`
    );

    const contract = new ethers.Contract(witsAddress, tokenABI, provider);

    contract.on("Transfer", (From, To, Value) => {
        storeDataToDatabase(From, To, ethers.utils.formatUnits(Value,6))
    })
        

};

main();