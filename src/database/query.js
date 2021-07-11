const GET_ALL_EXPANSES = `
    SELECT 
        id,
        name,
        cost,
        TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS') as date
    FROM expanses
`;

const INSERT_EXPANSE = `
    INSERT INTO expanses (
        name,
        cost
    ) VALUES ($1, $2)
    RETURNING *
`

const DELETE_EXPANSE =`
    DELETE FROM expanses
    WHERE id = $1
`

const GET_ALL_INCOMES = `
    SELECT 
        id,
        name,
        cost,
        TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS') as date
    FROM income
`;

const INSERT_INCOME = `
    INSERT INTO income (
        name,
        cost
    ) VALUES ($1, $2)
    RETURNING *
`

const DELETE_INCOME =`
    DELETE FROM income
    WHERE id = $1
`
const SUM_INCOMES =`
    SELECT SUM(cost)
    FROM income 
` 
const SUM_EXPANSE =`
    SELECT SUM(cost)
    FROM expanses 
`

module.exports = {
    GET_ALL_EXPANSES,
    INSERT_EXPANSE,
    DELETE_EXPANSE,
    GET_ALL_INCOMES,
    INSERT_INCOME,
    DELETE_INCOME,
    SUM_INCOMES,
    SUM_EXPANSE
}