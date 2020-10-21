const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
dotenv.config({ path: './config/config.env' });
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json());

// DB Connection and Test
const db = require('./config/postgres-db');

db.authenticate().then(() => console.log('Database connected...')).catch((error) => { console.log('Error: ', error); });

// Routes
const project = require('./routes/project');
const projectUser = require('./routes/projectUser');
const ticket = require('./routes/ticket');
const ticketAttachment = require('./routes/ticketAttachment');
const ticketComment = require('./routes/ticketComment');
const ticketHistory = require('./routes/ticketHistory');
const user = require('./routes/user');

app.use('/api/v1/project', project);
app.use('/api/v1/projectuser', projectUser);
app.use('/api/v1/ticket', ticket);
app.use('/api/v1/ticketattachment', ticketAttachment);
app.use('/api/v1/ticketcomment', ticketComment);
app.use('/api/v1/tickethistory', ticketHistory);
app.use('/api/v1/user', user);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
