const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
	sequelize.define('user', {
		name: {
			type: DataTypes.STRING,
			allowNull:false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.ENUM('client', 'admin', 'Guest'),
			defaultValue: 'Guest',
			allowNull: false,
		},
	});
};


