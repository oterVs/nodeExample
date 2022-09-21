const express = require('express')
const router = express.Router()

module.exports = router


const Albums = require('../models/albums')
const Model = require('../models/model')

router.post('/albums', async (req, res) => {
    const singer = await Model.findById(req.body.singer)
    if (!singer) {
        res.status(404).json({ 'messange': 'Usuario no encuentrado' }).end
    } else {
        const Albumss = Albums({
            idalbum: req.body.idalbum,
            name: req.body.name,
            date: req.body.date,
            singer: singer._id
        })
        try {
            const AlbumSave = await Albumss.save();
            singer.albums = singer.albums.concat(AlbumSave._id);
            await singer.save()
            res.json(AlbumSave)
        } catch (error) {
            res.status(400).json({ 'messange': 'Algo salio mal' })
        }

    }
})

router.get('/albums/:id', async (req,res) => {
    try {
        const data = await Albums.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/albums/:id', async (req, res) => {
   
    try {
        const idAlbum = req.params.id;
        const infoAlbum = req.body;
        const options = { new: true };
        const resul = await Albums.findByIdAndUpdate(idAlbum, infoAlbum, options)
        res.send(resul)

    }catch (error){
        res.status(400).json({message: error.message})
    }
})


router.delete('/albums/:id', async (req, res) => {
    try {
        let idAlbum = req.params.id;
        const Album = await Albums.findById(idAlbum);
        const Singer = await Model.findById(Album.singer);

        Singer.albums = Singer.albums.filter((el) => JSON.stringify(el) !== JSON.stringify(Album._id));
        console.log(Singer.albums)
        await Singer.save();
        await Albums.findByIdAndDelete(idAlbum);   
        res.send("Album deleted")
    }catch (error){
        res.send(400).json({message: error.message});
    }
})

router.get('/albumsSinger/:id',async (req,res) => {
    let idSinger = req.params.id
    try {
        const data = await Albums.find({singer: idSinger})
        res.json(data)
    }catch(error){
        res.send(400).json({message: error.message})
    }
})

router.get('/albums', async (req, res) => {
    try {
        const data = await Albums.find().populate('singer',{
            name: 1,
            age: 1,
            birthdate: 1
        });
        res.json(data);
    } catch (error) {
        res.send(400).json({'message':error.message})
    }
})