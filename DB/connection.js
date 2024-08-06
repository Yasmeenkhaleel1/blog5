import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('freedb_blogDB', 'freedb_yasmeen', '8eTB$nPH?SnVj9G', {
    host: 'sql.freedb.tech',
    port: 3306,
    dialect: 'mysql'
});
export const connectDb=async()=>{
    try{
        return await sequelize.sync();

    }catch (error){
        console.log("error to connect db");
    }
}

export default connectDb;
