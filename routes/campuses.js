const router = require("express").Router();
let model = require('../database/models/campus');
let students = require('../database/models/student');

router.get('/', async (req, res, next) => {
    let allCampuses = await model.findAll()
    .catch(error =>{
      console.log(error);
    });
    if (allCampuses) res.status(200).send(allCampuses);
    else{
      res.status(404).send();
    }
  });
  
  router.get('/:id', async (req, res, next) => {
    let num = req.params.id;
    let singleCampus = await model.findOne({
      where : {
        id : num
      }
    }).catch(error =>{
      console.log(error);
    });
    singleCampus ? res.status(200).send(singleCampus) : res.status(404).send();
  });
  
  router.post('/', async (req, res, next) => {
    const campus = req.body;
    let builtCampus = await model.create(campus).catch(error =>{
      console.log(error);
    });
    if (builtCampus) res.status(200).send(builtCampus)
    else{
      res.status(404).send("Invalid campus info");
    }
  });

  router.delete('/:id', async (req, res, next) => {
    let num = req.params.id;
    let modified = await students.update(
      {
        "CampusId": null
      }, 
      {
        where : {
          CampusId : num
        }
      }).catch(error=>{console.log(error)});

    const numberDeleted = await model.destroy({
      where: {
        id : num
      }
    }).catch(error =>{
      console.log(error);
    });

    if (numberDeleted != 0) res.status(200).send(`Deleted ${numberDeleted} number of rows with id ${num}. Also modified ${modified} with campus id.`)
    else{
      res.status(404).send(`Did not find any campuses with id ${num} to delete. `)
    }
  });

  router.put('/:id', async (req, res, next) => {
    let modifiedCampus = req.body;
    let num = req.params.id;
    let modified = await model.update(
      {
        "name": modifiedCampus.name,
        "imgUrl": modifiedCampus.imgUrl,
        "address": modifiedCampus.address,
        "description": modifiedCampus.description
      }, 
      {
        where : {
          id : num
        }
      }).catch(error=>{console.log(error)});

      if(modified) res.status(200).send(`Updated campus with id ${num}`);
      else{
        res.status(404).send(`did not find student`);
      }
  });

module.exports = router;