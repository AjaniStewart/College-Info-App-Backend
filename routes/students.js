const router = require("express").Router();

let students = [
    {
    "id": 4,
    "firstName": "Jerry",
    "lastName": "Jingle",
    "email": "jerryjingle@bells.com",
    "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
    "gpa": null,
    "createdAt": "2018-12-06T19:58:21.314Z",
    "updatedAt": "2018-12-06T19:58:21.314Z",
    "campusId": 3
    },
    {
    "id": 6,
    "firstName": "Barry",
    "lastName": "Huang",
    "email": "someemailgoeshere@yahoo.com",
    "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
    "gpa": null,
    "createdAt": "2018-12-06T20:04:04.275Z",
    "updatedAt": "2018-12-06T20:04:04.275Z",
    "campusId": 1
    },
    {
    "id": 1,
    "firstName": "justin",
    "lastName": "mintzer",
    "email": "mintzer.justin@gmail.com",
    "imageUrl": "https://i.imgur.com/N9Koe2G.jpg",
    "gpa": 4,
    "createdAt": "2018-12-05T23:02:45.257Z",
    "updatedAt": "2018-12-05T23:02:45.257Z",
    "campusId": 1
    },
    {
    "id": 24,
    "firstName": "first",
    "lastName": "LAST",
    "email": "email@email.com",
    "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
    "gpa": null,
    "createdAt": "2018-12-10T04:50:33.677Z",
    "updatedAt": "2018-12-10T04:50:33.677Z",
    "campusId": null
    },
    {
    "id": 2,
    "firstName": "bob",
    "lastName": "jones",
    "email": "bobbyboy1234@yahoo.com",
    "imageUrl": "https://i.imgur.com/GuAB8OE.jpg",
    "gpa": 3.7,
    "createdAt": "2018-12-05T23:02:45.270Z",
    "updatedAt": "2019-06-14T00:15:35.429Z",
    "campusId": 1
    }
  ];
  
  router.get('/', (req, res, next) => {
    res.status(200).send(students);
  });
  
  router.get('/:id', (req, res, next) => {
    let num = req.params.id;
    res.status(200).send(students[num]);
  });
  
  router.post('/', (req, res, next) => {
    let newStudent = req.body;
    students.push(newStudent);
    res.status(201).send(newStudent);
  });

  router.delete('/', (req, res, next) => {

  });
// app.delete()

// app.put()
// 204

  module.exports = router;