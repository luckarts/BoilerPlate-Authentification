module.exports = {
    "up": (queryInterface) => {
        return queryInterface.bulkInsert(
            "Permissions",
            [ { "type": "admin" }, { "type": "teacher" }, { "type": "student" } ],
            {}
        );
    },

    "down": (queryInterface) => {
        return queryInterface.bulkDelete("Permissions", null, {});
    }
};
