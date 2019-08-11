let model = require('../database/models/student')
const router = require("express").Router();


  //api/students/  gets all students
  router.get('/', async (req, res, next) => {
    let foundStudents = await model.findAll().catch(
      function(error){
        console.log(error);
      }
    );
    if (foundStudents) res.json(foundStudents);
    else{
      res.status(404).send(`No students found`);
    }
  });

  ///api/students/id - gets student with id
  router.get('/:id', async (req, res, next) => {
    let num = req.params.id;
    foundStudent = await model.findOne({
      where: {
        id : num
      }
    }).catch(function(error){
      console.log(error);
    });
    if (foundStudent) res.status(200).send(foundStudent);
    else{
      res.status(404).send(`No student with id ${num} found`);
    }
  });
  
  router.post('/', async(req, res, next) => {
    const student = req.body;
    console.log(student);
    let builtStudent = await model.create(student).catch(error =>{
      console.log(error);
    });
    if (builtStudent) res.status(200).send(builtStudent)
    else{
      res.status(404).send("Invalid student info");
    }
  });

  router.delete('/:id', async (req, res, next) => {
    let num = req.params.id;
    const numberDeleted = await model.destroy({
      where: {
        id : num
      }
    }).catch(error =>{
      console.log(error);
    });
    if (numberDeleted != 0) res.status(200).send(`Deleted ${numberDeleted} number of rows with id ${num}.`)
    else{
      res.status(404).send(`Did not find any students with id ${num} to delete. `)
    }
  });

  router.put('/:id', async (req, res, next) => {
    let modifiedStudent = req.body;
    let num = req.params.id;
    let modified = await model.update(
    {
      "firstName": modifiedStudent.firstName,
      "lastName": modifiedStudent.lastName,
      "email": modifiedStudent.emailName,
      "imageUrl": modifiedStudent.imageUrl,
      "gpa": modifiedStudent.gpa,
      "campusId": modifiedStudent.CampusId
    }, 
    {
      where : {
        id : num
      }
    }).catch(error=>{console.log(error)});
    if(modified) res.status(200).send(`Updated student with id ${num}`);
    else{
      res.status(404).send(`did not find student`);
    }
  });

  module.exports = router;