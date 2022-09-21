const express = require('express')
const router = express.Router()

module.exports = router

const Model = require('../models/model')
const Albums = require('../models/albums')

router.post('/singers', (req, res) => {
    const singers = Model({
        name: req.body.name,
        age: req.body.age,
        birthdate: req.body.birthdate,
        albums: req.body.albums
    })
    try {
        const dataToSave = singers.save()
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/singers', async (req, res) => {
    try {
        const data = await Model.find().populate('albums', {
            idalbum: 1,
            name: 1,
            date: 1,
            singer: 1
        })
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/singers/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id).populate('albums',{
            idalbum: 1,
            name: 1,
            date: 1
        })
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/singers/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true };
        console.log(updateData)
        const result = await Model.findByIdAndUpdate(
            id, updateData, options
        );
        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message })
    };
})

router.delete('/singers/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        await Albums.deleteMany({singer: id})
        res.send("documente deleted")
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/prueba', (req, res) => {
    let js = req.body.texto;
    const resultado = [];

    function recursividad(variables,resultado,j,i) {
        let n = j+1;
        let m = 1;
        if(variables.length == j){
            return;
        }
        if(i==0){
            let firstObject = new Object();
            firstObject.label = variables[j];
            firstObject.items = [];
            resultado.push(firstObject)
            return recursividad(variables,resultado[0].items,n,m);
        } else {

            let bandera = true
            //crear el json
            let firstObject = new Object();
            firstObject.label = variables[j];
            firstObject.items = [];

            resultado.forEach((el) => {
                if(el.label == firstObject.label){
                    bandera = false
                }
            })

            if(bandera){
                resultado.push(firstObject)
                console.log(resultado.length)
                if(resultado.length > 1){
                    return recursividad(variables,resultado[resultado.length-1].items,n,m);
                }else {
                    return recursividad(variables,resultado[resultado.length-1].items,n,m);
                }   
            } else {
                
                return recursividad(variables,resultado[resultado.length-1].items,n,m);
            }
        }
       
    }


    js.forEach((element, index) => {
        let variables = element.split('/');
        variables.shift();
        j=0
        recursividad(variables,resultado,j,index)
    
    })



    res.json(resultado)
    //console.log(variables);

    //
    //var secondObject = new Object();
    //let resultado = []

    //variables.forEach(element => {
    //  
    // 
    //resultado.concat(firstObject);
    //});



})