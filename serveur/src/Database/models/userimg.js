'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserImg = sequelize.define('UserImg', {
    "id": {
      "type": DataTypes.INTEGER(11),
      "allowNull": false,
      "autoIncrement": true,
      "primaryKey": true
    },
    path: DataTypes.STRING
  }, {});
  UserImg.associate = function (models) {
    UserImg.belongsTo(models.User, { foreignKey: 'id' });
  };
  return UserImg;
};