const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");

const {loadPlanetsData} = require('./models/planets.model');

const PORT = process.env.PORT || 8001

MONGODB_URL = 'mongodb+srv://mrchukwusinbox:plbforVmUuC6Xf0y@nasacluster.fej6fu8.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
})

async function startServer() {
await  mongoose.connect(MONGODB_URL);
await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
startServer();


 
// plbforVmUuC6Xf0y