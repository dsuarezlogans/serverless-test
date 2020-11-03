const entities =
  process.env.NODE_ENV === "production"
    ? ["src/entity/*.js"]
    : ["./build/src/entity/*.js"];

module.exports = {
  // name: "sls-test",
  type: "mysql",
  host: "remotemysql.com",
  port: 3306,
  username: "WPS85Slkvx",
  password: "BFQE32biTb",
  database: "WPS85Slkvx",
  synchronize: true,
  entities,
};
