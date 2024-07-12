import express from "express";

let router = express.Router();


//Tất cả các route sẽ viết tại đây, app: ứng dụng server
let initWebRoute = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello world with Ngan')
    })
    return app.use("/", router)
}

module.exports = initWebRoute;
