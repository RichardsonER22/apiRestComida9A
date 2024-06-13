const express=require('express')
const app = express()
const port=4000
const comidasRoutes=require('./routes/comidaRoutes.js')
const morgan = require('morgan');


app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use(morgan('dev'));

app.use("/API",comidasRoutes)

app.use((req,res)=>{
    res.status(404).json({message: "No se encontro la ruta solicitada"})
});

app.listen(port,()=>{
    console.log(`Aplicacion corriendo en el puerto ${port}`)
})

