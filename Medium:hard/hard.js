const express = require('express');
const employees = require('./employees.json');

const app = express();
const PORT = 3000;

app.get('/employees', (req, res) => {
    res.json(employees);
});

app.get('/employees/:employeeID', (req, res) => {
    const { employeeID } = req.params;
    const employee = employees.employees.find(emp => emp.employeeID === parseInt(employeeID));

    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ error: 'Employee not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
