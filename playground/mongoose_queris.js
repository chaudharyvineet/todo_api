const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5ab154e651b9cfbc1b65be7a";

<!-- validating object id -->
if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

<!-- todo find and findOne method -->
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

<!-- finding todo using find by one method -->
Todo.findById(id).then((todo) => {
  if(!todo){
   return  console.log('id not found');
  }
  console.log('Todo', todo);
}).catch((e) => console.log(e));

<!-- finding user using find by id method -->
User.findById(id).then((user) => {
  if(!user) {
    return console.log('user not found in database');
  }
  console.log('User', user);
}).catch((e) => console.log(e));
