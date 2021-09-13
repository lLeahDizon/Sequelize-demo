const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize('lemon', 'root', '123456', {
  dialect: 'mysql'
})

// 创建 User 模型
class User extends Model {}
// 初始化 User
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, {sequelize, modelName: 'user'});

(async () => {
  // 同步到数据库
  await sequelize.sync()
  // 创建一条记录
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  })
  // 打印结果
  console.log(jane.toJSON())
})()
