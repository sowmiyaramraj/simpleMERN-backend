const express=require("express");
const router=express.Router();
const productModule=require("../module/productmodule");
const auth=require("../module/authmodule");

router.get("/get",productModule.getproduct);

router.put("/update/:productid",productModule.updateproduct);

router.delete("/delete/:id",productModule.deleteproduct);

router.post("/create",productModule.createproduct);

module.exports=router;