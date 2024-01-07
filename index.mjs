
// import dotenv from 'dotenv';
// dotenv.config();

import {config} from 'dotenv';
config();

console.log(process.env.DB_URL);
console.log(process.env.DB_USERNAME);
console.log(process.env.PASSWORD);