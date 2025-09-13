// llamamos alas clases para crear las relaciones
import User from "./user";
import Cliente from "./cliente";


User.hasMany(Cliente,{foreignKey:"userId",as:"clientes"  })// decimos que user tendra muchos clientes es relacion de uno a muchos 
Cliente.belongsTo(User,{foreignKey:"userId",as:"users"}) //decimos que la llave foranea apunte a usuarios

export {User,Cliente} 