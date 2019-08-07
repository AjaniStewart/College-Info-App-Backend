const router = require("express").Router();

router.get('/', (req, res, next) => {
    res.status(200).send(campuses);
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