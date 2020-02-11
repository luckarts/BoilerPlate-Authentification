'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('UserImgs', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			path: {
				type: Sequelize.STRING
			},

		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('UserImgs');
	}
};