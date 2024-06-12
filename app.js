const express=require('express')
const app = express()
const port=4000

app.get('/',(req,res)=>{
    res.json({mensaje:'Aplicacion Funcionando Correctamente'})
})

app.listen(port,()=>{
    console.log(`Aplicacion corriendo en el puerto ${port}`)
})

