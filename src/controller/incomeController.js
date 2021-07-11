const model = require('../model/incomeModel');

const GET = async (req, res) => {
    res.render('income.html', {incomes: await model.getAllIncomes()})
};

const POST = async (req, res) => {
    try {
        const response = model.insertIncome(req.body);
        res.redirect('/income'); 
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

const DELETE = async (req, res) => {
    try {
        const response = model.deleteIncome(req.params);
        res.redirect('/income'); 
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

module.exports = {
    GET,
    POST,
    DELETE
}