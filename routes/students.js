const router = require("express").Router();
  
  router.get('/', (req, res, next) => {
    res.status(200).send(students);
  });
  
  router.get('/:id', (req, res, next) => {
    let num = req.params.id;
    res.status(200).send(students[num]);
  });
  
  router.post('/', (req, res, next) => {
    let newStudent = {'hello':'salmdl'};
    students.push(newStudent);
    res.json({'code':'userCreated'});
  });

  router.delete('/:id', (req, res, next) => {
    let num = req.params.id;
    students.splice(num, 1); 
   res.json({'code':'userDeleted'});
  });

  router.put('/:id', (req, res, next) => {
    let modifiedStudent = req.body;
    let num = req.params.id;
    students[num] = modifiedStudent;
    res.status(200);
  });

  module.exports = router;