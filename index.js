
const express = require("express");
const{useRouter}=require("./routes/user");
const { mongoose} = require("mongoose");
const{courseRouter}=require("./routes/courses");
const{adminRouter}=require("./routes/admin");


require('dotenv').config();

const port = process.env.PORT;
const dbUrl = process.env.DB_URL;



const app = express()
app.use(express.json())

app.use("/api/v1/user", useRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);





async function main() {
   
    await mongoose.connect(dbUrl)

    app.listen(port,()=>{
        console.log(`listening on port ${port}....`)
    })
    
}
main()