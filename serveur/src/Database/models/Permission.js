module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define(
        "Permission",
        {
            "id": {
                "type": DataTypes.INTEGER(11),
                "allowNull": false,
                "autoIncrement": true,
                "primaryKey": true
            },
            "type": {
                "type": DataTypes.STRING(20),
                "allowNull": false,
                "required": true
            }
        },
        {}
    );

    Permission.associate = function(models) {
        Permission.hasMany(models.User);
        // associations can be defined here
    };

    return Permission;
};
