import FakeIndexedDB from 'fake-indexeddb';
import { openDatabase } from 'localforage';

const createObjectStoreDriver = (name, storeName, version, objectStoreConfig) => {
  const db = openDatabase(name, version, {}, {
    driver: new FakeIndexedDB(),
    storeName,
    objectStoreConfig,
  });

  return db;
};

export default createObjectStoreDriver;