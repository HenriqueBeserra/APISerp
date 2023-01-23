const express = require("express");
const router = express.Router();
const { getEscritor, getImgURL, getRevistas } = require("../bdConexção");




router.use(
    express.urlencoded(
        {
            extended : true
        }
    )
)

router.get("/on", (req,res)=> {
    res.send("API ONLINE AT: http://localhost:4340/app ");
})

router.get("/revistas", async (req, res)=> {
    
    try{
        
        let revistas = await getRevistas();
        
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        
        res.send(revistas)
    
    } 
    catch(err) {
        console.log(err)
        res.send(err);
    }
    
})

router.get("/img", async (req, res)=> {
    try{

        let imagemUrl =  await getImgURL();

        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.send(imagemUrl);

    }
    catch(err){
        console.log(err);
        res.send(err);
    }
})

router.get("/escritor", async (req, res)=>{
    try{

        let escritor = await getEscritor();

        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.send(escritor); 

    }
    catch(err){
        console.log(err);
        res.send(err);
    }
})

router.use(express.json())

module.exports = router;