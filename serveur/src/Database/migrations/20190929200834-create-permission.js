module.exports = {
    "up": (queryInterface, Sequelize) => {
        return queryInterface.createTable("Permissions", {
            "id": {
                "allowNull": false,
                "autoIncrement": true,
                "primaryKey": true,
                "type": Sequelize.INTEGER
            },
            "type": {
                "type": Sequelize.STRING
            }
        });
    },
    "down": (queryInterface) => {
        return queryInterface.dropTable("Permissions");
    }
};
