import { MongoClient } from "mongodb";

class MongoRepository{
  private client: MongoClient;
  constructor() {
    this.client = new MongoClient(process.env.MONGO_URI || '');
  }

  public async connect(){
    return this.client.db(process.env.DB_NAME);
  }

  public async repository(collection: string){
    const db = await this.connect();
    const collections: Array<any> = await db.listCollections({ name: collection }).toArray();
    if (collections.length === 0) {
        await db.createCollection(collection);
        console.log(`Collection '${collection}' created successfully`);
    } else {
        console.log(`Collection '${collection}' already exists`);
    }
    return db.collection(collection);
  }
}

export default MongoRepository;