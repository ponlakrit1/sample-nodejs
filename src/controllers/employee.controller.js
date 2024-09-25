const pool = require('../config/db');

exports.getFirstEmployee = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Employee');
    
        res.render('first-employee', { employees: result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.getCreateEmployeeTemplate = async (req, res) => {
    try {
        res.render('create-employee', {});
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.createEmployee = async (req, res) => {
    const { EmpNum, EmpName, Position } = req.body;
    try {
        const empNumDuplicate = await pool.query('SELECT empnum FROM Employee WHERE empnum = $1', [EmpNum]);
        if (empNumDuplicate.rows.length == 0) {
            const result = await pool.query(
                'INSERT INTO Employee (empnum, empname, position) VALUES ($1, $2, $3) RETURNING *',
                [EmpNum, EmpName, Position]
            );
            res.status(201).json({status: 201, data: result.rows[0]});
        }
        
        res.status(400).json({status: 400, message: 'Duplicate employee number'});
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding employee');
    }
};