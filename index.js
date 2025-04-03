



const express = require("express");
const{useRouter}=require("./routes/user");
const{courseRouter}=require("./routes/courses");
const{adminRouter}=require("./routes/admin");



const app = express()

app.use("/api/v1/user", useRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);







app.listen(3000,()=>{
    console.log("listening on port 3000....")
})