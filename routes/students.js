let model = require('../database/models/student')
const router = require("express").Router();

  router.get('/', async (req, res, next) => {
    // let currentStudent = {
    //   "id": 4,
    //   "firstName": "Jerry",
    //   "lastName": "Jingle",
    //   "email": "jerryjingle@bells.com",
    //   "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
    //   "gpa": 1.0,
    //   "CampusId": 3
    //   };
    //let builtStudent = await model.build(currentStudent)
    // const builtstudent = await model.create(currentStudent).then(console.log('ewqeqw')).catch(function(error) {
    //   console.log(error);
    // });
    res.json(await model.findAll().catch(function(error){
      console.log(error);
    }));
  });
  
  router.get('/:id', (req, res, next) => {
    let num = req.params.id;
    res.status(200).send(students[num]);
  });
  
  // router.post('/', (req, res, next) => {
  //   let newStudent = {'hello':'salmdl'};
  //   students.push(newStudent);
  //   res.json({'code':'userCreated'});
  // });

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