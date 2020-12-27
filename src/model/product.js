const { Model, DataTypes } = require('sequelize');
const sequelize = require('../lib/database');

class Product extends Model { 

  static updateOrCreate(obj) {
    var where = { 'id': obj.id };

    return Product.findOne({where: where}).then(item => {
        if (!item) {
          return Product.create(obj);
        }

        // Item already exists, so we update it
        return Product.update(obj, {where: where});
      });
  }
}

Product.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
}, { 
  sequelize, modelName: 'product' 
});

module.exports = Product;


/*
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
  console.log(jane.toJSON());
})();
*/