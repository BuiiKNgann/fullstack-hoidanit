import db from '../models/index'
import CRUDServices from '../services/CRUDservices';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll(); // tìm tất cả db trong user
        return res.render('homepage.ejs', { data: JSON.stringify(data) })
    } catch (e) {
        console.log(e);
    }

}
let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message = await CRUDServices.createNewUser(req.body);
    //  console.log(req.body); // lấy tham số client gửi lên phía client 
    console.log(message);
    return res.send('post crud from server');
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDServices.getAllUser();
    console.log('---------');
    console.log(data);
    console.log('---------');
    return res.render('displayCRUD.ejs', { dataTable: data })
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;

    if (userId) {
        let userData = await CRUDServices.getUserInfoById(userId)
        //check user data not found



        return res.render('editCRUD.ejs', { user: userData });
    }
    else {
        return res.send('Users not found');
    }

}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDServices.updateUserData(data);
    return res.render('displayCRUD.ejs', { dataTable: allUser })
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD
}