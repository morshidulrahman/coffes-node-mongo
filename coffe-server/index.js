const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

// midleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("coffe server is running");
});

// coffeMaster PvqyHMxxCnGP1kNW

// mongodb connections
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.apzeojt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const databasecollection = client.db("coffesDB").collection("coffes");

    // add data store in database
    app.post("/coffes", async (req, res) => {
      const coffes = req.body;
      const result = await databasecollection.insertOne(coffes);
      res.send(result);
    });

    // getting data from database
    app.get("/coffes", async (req, res) => {
      const coffes = req.body;
      const cursor = await databasecollection.find(coffes).toArray();
      res.send(cursor);
    });

    // getiing single data
    app.get("/coffes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await databasecollection.findOne(query);
      res.send(result);
    });

    // edit data from database

    app.put("/coffes/:id", async (req, res) => {
      const id = req.params.id;
      const updatecoffes = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: updatecoffes.name,
          chef: updatecoffes.chef,
          details: updatecoffes.details,
          supplier: updatecoffes.supplier,
          category: updatecoffes.category,
          price: updatecoffes.price,
          photourl: updatecoffes.photourl,
        },
      };
      const result = await databasecollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // delet data from database
    app.delete("/coffes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await databasecollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
