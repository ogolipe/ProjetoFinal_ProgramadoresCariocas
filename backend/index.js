import express from "express"
import mysql from "mysql"
import cors from "cors"

 const app = express ()

 const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"riole"
 })//codigo para conexão com o banco de dados
 
 app.use(express.json())/*permite enviar qualquer arquivo json usando um 
 client( codigo usado para corrigir erro de fazer post no body do postman)*/
 app.use(cors())//permitir que uma aplicação use a api 

 app.get("/", (req, res) => {
    res.json("hello this is backend")
 })

 app.get("/eventos", (req, res) => {
    const q = "SELECT * FROM eventos"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })//criei um query q vai me retornar um erro(se tiver), 
    //ou, se der tudo certo retornara os dados
 })


 app.post("/eventos", (req, res) => {
    const q = "INSERT INTO eventos (`nome`, `banner`, `valor_min`, `descricao`) VALUES (?)"/*poderia colocar no lugar da "?" os values
    que no caso seriam title, desc, etc...*/
    const values = [ req.body.nome, req.body.banner, req.body.valor_min, req.body.descricao ]//aqui pegando valores do body do postman
    // const values  = ["title from backend", "desc from backend","cover from backend"]/*esa parte o usuario que vai 
    // disponibilizar, mas como teste inseri no backend e depois comentei*/

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("evento has been created")
    })
 })

app.delete("/eventos/:id", (req, res)=>{
   const eventoId = req.params.id//para pegar o id, o params representa a url acima e o .id representa a id acima
   const q = "DELETE FROM eventos WHERE id = ?"

   db.query(q,[eventoId], (err, data) => {
      if (err) return res.json(err)
      return res.json("role has been deleted succesfully")
   })
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//update

app.put("/eventos/:id", (req, res)=>{
   const eventoId = req.params.id//para pegar o id, o params representa a url acima e o .id representa a id acima
   const q = "UPDATE eventos SET `nome` = ?, `banner`= ?, `valor_min`  = ?, `descricao` = ? WHERE id = ?"

   const values = [ req.body.nome, req.body.banner, req.body.valor_min, req.body.descricao ]

   db.query(q,[...values, eventoId], (err, data) => {
      if (err) return res.json(err)
      return res.json("role has been updated succesfully")
   })
})

 app.listen(3000, () => {
    console.log("connected to backend")
 })