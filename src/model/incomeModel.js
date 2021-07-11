const {fetch, fetchAll} = require('../database/connect');
const {GET_ALL_INCOMES, 
       INSERT_INCOME,
       DELETE_INCOME
       } = require('../database/query');
const getAllIncomes = () => fetchAll(GET_ALL_INCOMES);
const insertIncome = ({name, cost}) => fetch(INSERT_INCOME, name, +cost);
const deleteIncome = ({id}) => fetch(DELETE_INCOME, id);

module.exports = {
    getAllIncomes,
    insertIncome,
    deleteIncome
}