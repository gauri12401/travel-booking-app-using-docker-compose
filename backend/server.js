const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const client = new Client({
  user: "postgres",
  host: "db",
  database: "mydb",
  password: "postgres",
  port: 5432,
});

async function connectDB() {

  while (true) {

    try {

      await client.connect();

      console.log("PostgreSQL Connected 🚀");

      await client.query(`
        CREATE TABLE IF NOT EXISTS bookings (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100),
          email VARCHAR(100),
          destination VARCHAR(100),
          people INT,
          date DATE
        )
      `);

      break;

    } catch (err) {

      console.log("Retrying database connection...");

      await new Promise(res => setTimeout(res, 5000));
    }
  }
}

connectDB();

app.post("/register", async (req, res) => {

const { name, email, destination, people, date } = req.body;

try {

await client.query(
`INSERT INTO bookings(name,email,destination,people,date)
VALUES($1,$2,$3,$4,$5)`,
[name,email,destination,people,date]
);

res.json({
message: "Tour Booked Successfully ✈️"
});

} catch(err){

res.json({
message: "Booking Failed"
});

}

});

app.get("/bookings", async (req, res) => {

const result = await client.query(
"SELECT * FROM bookings ORDER BY id DESC"
);

res.json(result.rows);

});

app.listen(5000, () => {

console.log("Server running on port 5000");

});
