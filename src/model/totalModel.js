const {fetch, fetchAll} = require('../database/connect');
const {SUM_INCOMES, SUM_EXPANSE} = require('../database/query');

const getTotal = async () => {
    const totalIncome = await fetch(SUM_INCOMES)
    const totalExpanse = await fetch(SUM_EXPANSE)
    return [totalIncome, totalExpanse]
}

module.exports = {getTotal}