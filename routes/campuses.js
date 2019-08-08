const router = require("express").Router();
let model = require('../database/models/campus')

router.get('/', async (req, res, next) => {
    // let currentCampus = {
    //   "id": 3,
    //   "name": "Brown University",
    //   "imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Brown_University_coat_of_arms.svg/130px-Brown_University_coat_of_arms.svg.png",
    //   "address": "Providence, RI 02912",
    //   "description": "Brown University is a private Ivy League research university in Providence, Rhode Island. Founded in 1764 as the College in the English Colony of Rhode Island and Providence Plantations, it is the seventh-oldest institution of higher education in the U.S. and one of the nine colonial colleges chartered before the American Revolution.",
    //   };
    //   const builtCampus= await model.create(currentCampus).then(console.log('ewqeqw')).catch(function(error) {
    //     console.log(error);
    //   });
    res.status(200).send(await model.findAll().catch(function(error){
      console.log(error);
    }));
  });
  
  router.get('/:id', (req, res, next) => {
    let num = req.params.id;
    res.status(200).send(campuses[num]);
  });
  
  router.post('/', (req, res, next) => {
    let newCampus = {'hello':'salmdl'};
    campuses.push(newCampus);
    res.json({'code':'campusCreated'});
  });

  router.delete('/:id', (req, res, next) => {
    let num = req.params.id;
    campuses.splice(num, 1); 
   res.json({'code':'campusDeleted'});
  });

  router.put('/:id', (req, res, next) => {
    let modifiedCampus = req.body;
    let num = req.params.id;
    campuses[num] = modifiedCampus;
    res.status(200);
  });

module.exports = router;