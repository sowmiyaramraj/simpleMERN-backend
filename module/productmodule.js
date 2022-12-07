const mongo = require("../connect");
const {ObjectId}= require("mongodb");

module.exports.getproduct=async(req,res,next)=>{
    try{
        const getproduct= await mongo.selectedDb
        .collection("product")
        .find().toArray();
        res.send(getproduct);
    }catch(err){
        res.status(500).send(getproduct);

    }
  
};

module.exports.updateproduct=async(req,res,next)=>{
  try{
    const id=req.params.productid;
  const updatedresponce=await mongo.selectedDb
  .collection("product")
  .findOneAndUpdate({_id:ObjectId(id)},
  {$set:{...req.body}},
 { returnDocument:"after"});
  res.send(updatedresponce);
}
  catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};

module.exports.createproduct=async(req,res,next)=>{
   try{
   const insertedresponse=await mongo.selectedDb
   .collection("product")
   .insertOne(req.body);
   res.send(insertedresponse);
   }
   catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};

module.exports.deleteproduct=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const deletedresponce=await mongo.selectedDb
        .collection("product")
        .remove({_id:ObjectId(id)});
        res.send(deletedresponce);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
       }
};                  