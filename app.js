const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const employeeRoutes = require('./src/routes/employee.route');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/employee', employeeRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
