require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');

//controllers
const {getUser, register, login, logout} = require('./controllers/authController');
const {getAllPosts, getPostsByUser, getPostsByPost, postBlog} = require('./controllers/postsController');

//dotenv
const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env;

//middleware
app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000*60*60*24*7
    }
}));

//database connection
massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('Database Connected :D')
});

//auth endpoints
app.get('/auth/user', getUser);
app.post('/auth/register', register);
app.post('/auth/login', login);
app.post('/auth/logout', logout);


//api endpoints
app.get('/api/posts', getAllPosts)
app.get('/api/posts/:user_id', getPostsByUser);
app.get('/api/posts/:post_id', getPostsByPost);
app.post('/api/post', postBlog);

//server connection
app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));