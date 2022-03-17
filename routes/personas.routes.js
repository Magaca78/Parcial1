const express = require('express');
const routerApi = require('.');
const routes = express.Router();
const personaSchema = require('../models/persona');


/* POST
Endpoint: http://localhost:3000/api/v1/personas/persona */
routes.post('/persona',(req,res) =>{
    const persona = personaSchema(req.body)
    persona
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});


/* GET
Endpoint: http://localhost:3000/api/v1/personas */
routes.get("/", (req,res)=>{
    personaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});


//Endpoint para consultar factura por el valor de su referencia
//http://localhost:3000/api/v1/personas/parametro
routes.get('/:referenceValue', (req, res) => {
    const { referenceValue } = req.params;
    personaSchema
      .find({ 'dad.jobs.mainjob': referenceValue })
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  });


/* PUT
Endpoint: http://localhost:3000/api/v1/personas/parametro */
routes.put("/:personaId", (req,res) =>{
    const {personaId} = req.params;
    const {name,lastname,mom,dad} = req.body;
    personaSchema
        .updateOne(
            {_id: personaId},
            { $set: {name,lastname,mom,dad}}
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});



/*  DELETE*/
routes.delete('/:personaId', (req,res)=>{
    const {personaId}= req.params
    personaSchema
                .deleteOne({_id: personaId})
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message: error}))
});

module.exports = routes;