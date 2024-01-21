module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define('Users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    is_admin: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
  });

  return Users;
};
