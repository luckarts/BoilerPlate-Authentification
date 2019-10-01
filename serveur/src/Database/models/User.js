export default (connection, DataTypes) => {
    const User = connection.define("User", {
        "id": {
            "type": DataTypes.INTEGER(11),
            "allowNull": false,
            "autoIncrement": true,
            "primaryKey": true
        },
        "username": {
            "type": DataTypes.STRING(20),
            "allowNull": false,
            "required": true
        },
        "password": {
            "type": DataTypes.STRING(500),
            "allowNull": false,
            "required": true
        },
        "email": {
            "type": DataTypes.STRING(30),
            "allowNull": false,
            "lowercase": true,
            "trim": true,
            "unique": true,
            "required": true
        }
    });

    User.associate = (models) => {
        User.belongsTo(models.Permission);

        // associations can be defined here
    };
    return User;
};
