const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(userPassword) {
        return bcrypt.compareSync(userPassword, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty:true,
                isAlphanumeric:true,
                notNull: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                notEmpty:true,
                min: 8,
                notNull: true
            }
        },
         date_signed_up: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bycrypt.hash(newUserData.password, 10);
                return newUserData
            }
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    });

    module.exports = User;