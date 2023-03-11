const  userValidation = require('../verifications/userValidation')
const UserRegistration  = require('../Models/User')


const addUser = async(req,res) =>{
    const {idNumber,firstName,lastName,licenceNo,contact,city,dateOfBirth,persAddress,permAddress}=req.body;
    // res.send(`${idNumber} is successfully registered.`)
   
    const {error} = userValidation(req.body);
    if (error) return res.send(error);
  
    const findUser = await UserRegistration.findOne({ idNumber: req.body.idNumber });
    if (findUser) return res.status(400).send("User is already register!!"); 
  
    // const salt = await bcrypt.genSalt(10);
    // const hash = await bcrypt.hash(req.body.password, salt);
  
    const user = new UserRegistration({
      idNumber: req.body.idNumber,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      licenceNo: req.body.licenceNo,
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

const getAllUser =async (req,res) =>{
     const allUser = await UserRegistration.find({})
     res.send(allUser)
}

const deleteUser = (req,res) =>{
    const {idNumber,firstName,lastName,licenceNo,contact,city,dateOfBirth,persAddress,permAddress}=req.body;
    res.send(`${idNumber} is successfully registered.`)

}

const updateUser = (req,res) =>{
    const {idNumber,firstName,lastName,licenceNo,contact,city,dateOfBirth,persAddress,permAddress}=req.body;
    res.send(`${idNumber} is successfully registered.`)

}


module.exports = { getAllUser,
                   addUser,
                   deleteUser,
                   updateUser
                }