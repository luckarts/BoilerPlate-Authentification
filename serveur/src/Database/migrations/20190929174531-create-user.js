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
                "type": Sequelize.STRING
            },
            "password": {
                "type": Sequelize.STRING
            },
            "email": {
                "type": Sequelize.STRING
            },
            "PermissionId": {
                "type": Sequelize.INTEGER
            }
        });
    },
    "down": (queryInterface) => {
        return queryInterface.dropTable("Users");
    }
};
