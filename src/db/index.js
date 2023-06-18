import * as SQlite from "expo-sqlite";

const db = SQlite.openDatabase("places.db");

export const init = () => {
  const promise = new Promise((res, rej) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL)",
        [],
        () => {
          res();
        },
        (err) => {
          rej(err);
        }
      );
    });
  });

  return promise;
};

export const insertPlace = (title, image, address, coords) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO places (title, image, address, coords) VALUES(?,?,?,?)",
        [title, image, address, JSON.stringify(coords)],
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const selectPlace = () => {
  const promise = new Promise((res, rej) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places",
        [],
        (_, result) => {
          res(result);
        },
        (_, error) => {
          rej(error);
        }
      );
    });
  });

  return promise;
};
