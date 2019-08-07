const router = require("express").Router();

let campuses = [
    {
    "id": 1,
    "name": "FullStack Academy",
    "imgUrl": "https://www.fullstackacademy.com/images/fa-logo.png",
    "address": "5 Hanover Sq",
    "description": "Fullstack Academy is an immersive software engineering coding bootcamp located in New York City and Chicago.wCampuss of the full-time flagship course learn full stack JavaScript over the course of a 13-week, on-campus program.",
    "createdAt": "2018-12-05T23:02:45.290Z",
    "updatedAt": "2018-12-05T23:02:45.290Z"
    },
    {
    "id": 2,
    "name": "Nassau Community College",
    "imgUrl": "https://nccapps.ncc.edu/forms/ComplaintForm/logo.png",
    "address": " 1 Education Dr, Garden City, NY 11530",
    "description": "Nassau Community College is a two-year college located in East Garden City, New York, USA. The school is in Nassau County on Long Island. NCC maintains a nationwide reputation for ease of transferability to four-year institutions.",
    "createdAt": "2018-12-05T23:02:45.299Z",
    "updatedAt": "2018-12-05T23:02:45.299Z"
    },
    {
    "id": 5,
    "name": "Harvard",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/en/0/02/Harvard_shield-College.png",
    "address": "86 Brattle Street Cambridge, MA 02138",
    "description": "Harvard College is the undergraduate liberal arts college of Harvard University. Founded in 1636 in Cambridge, Massachusetts, it is the oldest institution of higher learning in the United States and one of the most prestigious in the world.",
    "createdAt": "2018-12-06T17:39:33.705Z",
    "updatedAt": "2018-12-06T17:39:33.705Z"
    },
    {
    "id": 3,
    "name": "Brown University",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Brown_University_coat_of_arms.svg/130px-Brown_University_coat_of_arms.svg.png",
    "address": "Providence, RI 02912",
    "description": "Brown University is a private Ivy League research university in Providence, Rhode Island. Founded in 1764 as the College in the English Colony of Rhode Island and Providence Plantations, it is the seventh-oldest institution of higher education in the U.S. and one of the nine colonial colleges chartered before the American Revolution.",
    "createdAt": "2018-12-05T23:02:45.306Z",
    "updatedAt": "2018-12-05T23:02:45.306Z"
    }
];

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