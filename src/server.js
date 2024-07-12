import express from "express";
import bodyParser from "body-parser"; // thư viện hỗ trợ chúng ta lấy tham số phía clien sử dụng cho chúng ta
//   ví dụ: /user?id=7
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require('dotenv').config(); // gọi đến hàm config của thư viện .env

let app = express();


//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }))
viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;
app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on port: " + port);
})