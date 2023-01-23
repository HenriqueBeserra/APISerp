const express = require("express");
const app = express();
const PORT = process.env.PORT || 4342;


app.use(
    express.urlencoded(
        {
            extended : true
        }
    )
)
app.use(express.json())

// Rotas
const router = require("./routes/route");
app.use("/app", router);

// Servidor
app.listen(PORT, ()=>{
    console.log(`App online at: http://localhost:${PORT}`)
})