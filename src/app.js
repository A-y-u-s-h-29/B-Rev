const express = require("express")

const app = express()
app.use(express.json())

// const notes =  []
// app.post("/notes",(req,res)=>{
//     const note = req.body
//     notes.push(note)
//     res.status(201).json({
//         message:"Note createed"
//     })
// })

// app.get("/notes",(req,res)=>{
//     res.status(200).json({
//         notes:notes
//     })
// })

// app.delete("/notes/:id",(req,res)=>{
//     const id = req.params.id
//     delete notes[id]
//     res.status(204).json({
//         message:"Note deleted"
//     })
// })

// app.patch("/notes/:id",(req,res)=>{
//     const id = req.params.id
//     const titel = req.body.titel
//     notes[id].titel = titel
//     res.status(202).json({
//         message:"Note Updated"
//     })
// })

module.exports = app;