import User from "./user";
import Cliente from "./cliente";

User.hasMany(Cliente,{foreignKey:"userId",as:"clientes"  })
Cliente.belongsTo(User,{foreignKey:"userId",as:"users"})

export {User,Cliente}