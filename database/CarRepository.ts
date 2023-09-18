import { executeTransaction } from "./SQLiteDatabase";


export type Car = {
  id?: number;
  brand: string;
  model: string;
  hp: number;
};

export default class CarRepository {
  constructor() {
    this.up();
  }

  public async up() {
    await executeTransaction(
      "CREATE TABLE IF NOT EXISTS cars (id INTEGER PRIMARY KEY AUTOINCREMENT, brand TEXT, model TEXT, hp INT);"
    );
  }

  public async down() {
    await executeTransaction("DROP TABLE cars;");
  }

  public async create(car: Car) {
    const result = await executeTransaction(
      "INSERT INTO cars (brand, model, hp) values (?, ?, ?);",
      [car.brand, car.model, car.hp]
    );
    return result.insertId;
  }

  public async all() {
    const result = await executeTransaction("SELECT * FROM cars;");
    return result.rows._array;
  }

  public async filtroHp(min:number,max:number) {
    const resultFiltro = await executeTransaction("SELECT * FROM cars WHERE hp>=? AND hp<=?",[min,max]);
    return resultFiltro.rows._array;
  }
  
  public async remove(id:number) {
    const rowsAffected = await executeTransaction("DELETE FROM cars WHERE id=?;",[id]);
    return rowsAffected;
  }
  public async removeAll() {
    const result = await executeTransaction("DELETE FROM cars;");
    return result.rows._array;
  }
  public async contarAll() {
    const result = await executeTransaction("SELECT * FROM cars;");
    return result.rows._array.length;
  }

}
