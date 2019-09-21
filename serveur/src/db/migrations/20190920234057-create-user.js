
module.exports = {
    "up": (queryInterface, Sequelize) => {
        return queryInterface.createTable("Users", {
            "id": {
                "allowNull": false,
                "autoIncrement": true,
                "primaryKey": true,
                "type": Sequelize.INTEGER
            },
            "username": {
                "type": Sequelize.STRING(),
                "allowNull": false,
                "required": true
            },
            "password": {
                "type": Sequelize.STRING(),
                "allowNull": false,
                "required": true
            },
            "email": {
                "type": Sequelize.STRING(),
                "allowNull": false,
                "lowercase": true,
                "trim": true,
                "unique": true,
                "required": true
            }
        });
    },
    "down": (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Users");
    }
};
