import app from "./app";
import config from "./config";

const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect(config.database_url);
        console.log("database connected");

        app.listen(config.port, () => {
            console.log(`app listening on port ${config.port}`)
        })
    } catch (error) {
        console.log("failed to connect database", error)
    }

};

main();