const express = require('express');
const companyRoutes = require('./routes/company.route');
const bodyParser = require('body-parser');
const app = express();
const PID = process.pid;

const PORT = process.env.port ?? 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', companyRoutes);



app.listen(PORT, () => {
    console.log(`App started ar port ${PORT}, and PID ${PID}`);
})
