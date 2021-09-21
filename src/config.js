import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://teseo55:admin123@mini-merm.1oegf.mongodb.net/pruebas",
  PORT: process.env.PORT || 5000,
  SECRET: 'products-api'
};
