const dotenv=require("dotenv");
dotenv.config({path : "./.env"});
module.exports  ={
    "db": {
        "name": "db",
        "connector": "memory"
    },
    
    "testdb": {
          "connector": "mysql",
          "host": process.env.DB_HOST || 'localhost',
          "port": process.env.DB_PORT || "3306",
          "url": "",
          "database": process.env.DB_NAME||"my_db",
          "password": process.env.DB_PASSWORD || "password",
          "name": "testdb",
          "user": process.env.DB_USER || "root" 
          
    }
  
};

// console.log(process.env.DB_HOST);

 