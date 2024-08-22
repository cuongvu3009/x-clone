
import { MongoClient } from 'mongodb'
const uri = process.env.MONGO_URI as string

class DatabaseService {
    private client: MongoClient

    constructor() {
        this.client = new MongoClient(uri)   
    }

    async connect() {
        try {
          // Send a ping to confirm a successful connection
          await this.client.db("admin").command({ ping: 1 });
          console.log("Pinged your deployment. You successfully connected to MongoDB!");
        } finally {
          // Ensures that the client will close when you finish/error
          await this.client.close();
        }
      }
}

//  Create object from class DatabaseService
const databaseService = new DatabaseService()
export default databaseService

