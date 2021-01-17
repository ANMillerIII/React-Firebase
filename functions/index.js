// //index.js

// const functions = require('firebase-functions');
// const app = require('express')();

// const auth = require('./util/auth');

// const { getAllTodos } = require('./APIs/todos')
// const { postOneTodo } = require('./APIs/todos')
// // const { getOneTodo } = require('./APIs/todos')
// const { deleteTodo } = require('./APIs/todos')
// const { editTodo } = require('./APIs/todos')
// const { loginUser } = require('./APIs/users')
// const { signUpUser } = require('./APIs/users')
// const { uploadProfilePhoto } = require('./APIs/users')
// const { getUserDetail } = require('./APIs/users')
// const { updateUserDetails } = require('./APIs/users')

// // Users
// app.get('/todos', auth, getAllTodos);
// // app.get('/todo/:todoId', auth, getOneTodo);
// app.post('/todo',auth, postOneTodo);
// app.delete('/todo/:todoId',auth, deleteTodo);
// app.put('/todo/:todoId',auth, editTodo);



// app.post('/signup', signUpUser);

// // Users
// app.post('/login', loginUser);


// app.post('/user/image', auth, uploadProfilePhoto);


// app.get('/user', auth, getUserDetail);
// app.post('/user', auth, updateUserDetails);

// exports.api = functions.https.onRequest(app);


const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');
 
const {
    getAllTodos,
    getOneTodo,
    postOneTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos')

const { 
    loginUser,
    signUpUser,
    uploadProfilePhoto,
    getUserDetail,
    updateUserDetails
} = require('./APIs/users')

// Todos
app.get('/todos', auth, getAllTodos);
app.get('/todo/:todoId', auth, getOneTodo);
app.post('/todo',auth, postOneTodo);
app.delete('/todo/:todoId',auth, deleteTodo);
app.put('/todo/:todoId',auth, editTodo);

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user/image', auth ,uploadProfilePhoto);
app.post('/user', auth ,updateUserDetails);
app.get('/user', auth, getUserDetail);

exports.api = functions.https.onRequest(app);