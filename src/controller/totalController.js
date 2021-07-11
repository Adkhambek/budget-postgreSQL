const model = require('../model/totalModel');
const GET = async (req, res) => {
    res.render('total.html', {total: await model.getTotal()})
};

module.exports = { GET }