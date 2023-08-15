import express from "express";
import pgPromise from "pg-promise";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Создаем экземпляр pg-promise
const pgp = pgPromise();

// Настраиваем параметры соединения с PostgreSQL
const connectionConfig = {
  host: "localhost",
  port: 5432,
  database: "user",
  user: "postgres",
  password: "586939561303",
};

// Создаем подключение к базе данных
const db = pgp(connectionConfig);

app.get("/details", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const pageSize = 10; // Количество записей на странице
    const offset = (page - 1) * pageSize;
    // Запрос к базе данных
    const details = await db.any(
      "SELECT * FROM details ORDER BY id ASC LIMIT $1 OFFSET $2",
      [pageSize, offset]
    );
    res.json(details);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка при запросе к базе данных" });
  }
});
app.get("/models", async (req, res) => {
  try {
    // Запрос к базе данных
    const model = await db.any("SELECT * FROM model ORDER BY name ASC");
    res.json(model);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка при запросе к базе данных" });
  }
});
app.get("/submodels", async (req, res) => {
  try {
    // Запрос к базе данных
    const submodels = await db.any("SELECT * FROM submodel ORDER BY name ASC");
    res.json(submodels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка при запросе к базе данных" });
  }
});
app.get("/modelyears", async (req, res) => {
  try {
    // Запрос к базе данных
    const modelyears = await db.any(
      "SELECT * FROM modelyear ORDER BY year ASC"
    );
    res.json(modelyears);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка при запросе к базе данных" });
  }
});

app.post("/details", async (req, res) => {
  try {
    const { name, code, manufacturer } = req.body;

    // Выполните запрос к базе данных для добавления новой записи
    await db.none(
      "INSERT INTO details(name, code, manufacturer) VALUES($1, $2, $3)",
      [name, code, manufacturer]
    );

    res.status(200).json({ message: "Данные успешно добавлены" });
  } catch (error) {
    console.error("Ошибка при добавлении данных", error);
    res.status(500).json({ error: "Ошибка при добавлении данных" });
  }
});

app.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Проверяем, есть ли уже пользователь с таким именем пользователя или электронной почтой
    const userExistsQuery =
      "SELECT * FROM users WHERE username = $1 OR email = $2";
    const userExistsValues = [username, email];
    const userExistsResult = await db.any(userExistsQuery, userExistsValues);

    if (userExistsResult.length > 0) {
      return res.status(400).json({
        error:
          "Пользователь с таким именем пользователя или электронной почтой уже существует",
      });
    }

    // Хешируем пароль
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Создаем новую запись пользователя в базе данных
    const insertUserQuery =
      "INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4)";
    const insertUserValues = [username, email, hashedPassword, role];
    await db.none(insertUserQuery, insertUserValues);

    res.status(200).json({ message: "Регистрация успешна1" });
    res.redirect("http://localhost:3000/");
  } catch (error) {
    console.error("Ошибка при регистрации", error);
    res.status(500).json({ error: "Ошибка при регистрации" });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
