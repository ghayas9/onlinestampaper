const  adminRoute = require("express").Router();
const {addAdmin,getAllAdmin,updateAdmin,deleteAdmin} = require('../controllers/adminController')

adminRoute.route('/')
                  .get(getAllAdmin)
                  .post(addAdmin)
                  .patch(updateAdmin)
 adminRoute.route('/:id').delete(deleteAdmin);

module.exports = adminRoute;