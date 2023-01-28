import Realm from "realm";

const DogSchema = {
  name: "Dog",
  properties: {
    _id: 'int',
    name: "string",
    age: "int",
  },
  primaryKey: '_id'
};

const dbConfig: Realm.Configuration = {
  schema: [
    DogSchema
  ],
  deleteRealmIfMigrationNeeded: true,
  path: "realm-files/myrealm",
};

let realmInstance: Realm | null;
let dbPromise: ProgressPromise;

const getDB = (): Realm => {
  if (realmInstance == null) realmInstance = new Realm(dbConfig);
  return realmInstance!;
};

export const getDbPromise = () => {
  if (!dbPromise) dbPromise = Realm.open(dbConfig);
  return dbPromise;
};

export default getDB;