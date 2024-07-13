import db from '../models/index'


let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll(); // tìm tất cả db trong user
        return res.render('homepage.ejs', { data: JSON.stringify(data) })
    } catch (e) {
        console.log(e);
    }

}

module.exports = {
    getHomePage: getHomePage,
}