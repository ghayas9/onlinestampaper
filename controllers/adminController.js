const  adminValidation = require('../verifications/adminValidation')
const AdminRegistration  = require('../Models/Admin')


const addAdmin = async(req,res) =>{
    // const {idNumber,firstName,lastName,licenceNo,contact,city,dateOfBirth,persAddress,permAddress}=req.body;
    // res.send(`${idNumber} is successfully registered.`)
   
    const {error} = adminValidation(req.body);
    if (error) return res.send(error);
  
    const findUser = await AdminRegistration.findOne({ idNumber: req.body.idNumber });
    if (findUser) return res.status(400).send("User is already register!!"); 
  
    // const salt = await bcrypt.genSalt(10);
    // const hash = await bcrypt.hash(req.body.password, salt);
  
    const user = new AdminRegistration({
      idNumber: req.body.idNumber,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      image:req.body.image,
      contact: req.body.contact,
      city: req.body.city,
      dateOfBirth: req.body.dateOfBirth,
      presAddress: req.body.presAddress,
      permAddress: req.body.permAddress,
    });
  
    try {
      const userSave = await user.save();
      res.send(`${userSave.lastName} is successfully registered`);
    } catch (err) {
      res.status(400).send(err);
    }

}

const getAllAdmin =async (req,res) =>{
     const allAdmin = await AdminRegistration.find({})
     res.send(allAdmin)
}

const deleteAdmin = async(req,res) =>{
    // const {idNumber,firstName,lastName,licenceNo,contact,city,dateOfBirth,persAddress,permAddress}=req.body;
    // res.send(`${idNumber} is successfully registered.`)

}

const updateAdmin = (req,res) =>{
    // const {idNumber,firstName,lastName,licenceNo,contact,city,dateOfBirth,persAddress,permAddress}=req.body;
    // res.send(`${idNumber} is successfully registered.`)

}


module.exports = { getAllAdmin,
                   addAdmin,
                   deleteAdmin,
                   updateAdmin
                }