const  userRoute = require("express").Router();
const {addUser,getAllUser,updateUser,deleteUser} = require('../controllers/userController')

userRoute.route('/')
                  .get(getAllUser)
                  .post(addUser)
                  .patch(updateUser)
userRoute.route('/:id').delete(deleteUser);

module.exports = userRoute;