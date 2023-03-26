const Form = require("../model/formModel");
exports.createForm = async (req, res) => {
  try {
    const { fname, lname, address, pincode, monumber } = req.body;
    const createData = await Form.create(req.body);
    return res.status(201).json({ data: createData ,message:"success"});
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};


exports.getallform=async(req,res)=>{
try{
  let fetchData=await Form.find()
  return res.status(200).json({data:fetchData,message:"all data"})

}catch(err){
 return res.status(500).json({error:err.message})
}
}
