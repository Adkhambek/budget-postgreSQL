const {fetch, fetchAll} = require('../database/connect');
const {GET_ALL_EXPANSES, 
       INSERT_EXPANSE,
       DELETE_EXPANSE
       } = require('../database/query');
const getAllExpanses = () => fetchAll(GET_ALL_EXPANSES);
const insertExpanse = ({name, cost}) => fetch(INSERT_EXPANSE, name, +cost);
const deleteExpanse = ({id}) => fetch(DELETE_EXPANSE, id);

module.exports = {
    getAllExpanses,
    insertExpanse,
    deleteExpanse
}