require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "nekomics_development",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USER_TEST || "root",
    password: process.env.DB_PASSWORD_TEST || null,
    database: process.env.DB_NAME_TEST || "database_test",
    host: process.env.DB_HOST_TEST || "127.0.0.1",
    port: process.env.DB_PORT_TEST || 3306,
    dialect: "mysql",
  },
  production: {
    use_env_variable: "DATABASE_URL",
  },
};
