// const sequelize = require("../config/connection");
// const { User } = require("../models");

// const userData = [
//   {
//     username: "john_doe",
//     password: "password123"
//   },
//   {
//     username: "jane_doe",
//     password: "password456"
//   }
// ];

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();