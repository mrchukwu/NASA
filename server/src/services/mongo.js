const mongoose = require("mongoose");

// Use test database when running in test environment
const MONGODB_URL = process.env.NODE_ENV === 'test' 
    ? 'mongodb+srv://mrchukwusinbox:plbforVmUuC6Xf0y@nasacluster.fej6fu8.mongodb.net/nasa-test?retryWrites=true&w=majority&appName=NASACluster'
    : 'mongodb+srv://mrchukwusinbox:plbforVmUuC6Xf0y@nasacluster.fej6fu8.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster';


mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
})

async function mongoConnect(){
    await mongoose.connect(MONGODB_URL)
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}
