import { v4 as uuidv4 } from 'uuid';
import movieList from './data/movieList';
import rents from './data/rents';


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//var router = express.Router();

/* GET home page. */
router.get("/movies/", function (req, res, next) {

  res.status(200).json(movieList);
});

router.get("/movies/:id", function (req, res, next) {

  var id = req-prams.id;
  res.status(200).json(id);
});

router.post("/movies/", function (req, res, next) {
  let newMovie = req.body;
  newMovie.id = uuidv4;
  movieList.push(newMovie);
  res.sendStatus(200).json(newMovie);
});

router.put("/movies/:id", function (req, res, next) {
  const editMovieId = req.params.id;
  let editMovie = req.body;
  let movie = data.find(movie=>movie.id === parseInt(editMovieId))
  if(movie){
     
      res.status(200).send(editMovie);

}
});

router.delete("movies/:id", function (req, res, next) {
  const deletedMovieId = req.params.id;
  const deletedMovie = data.find(movie=> movie.id === parseInt(deletedMovieId));
  if(deletedMovie){
  data = data.filter(movie => movie.id !==  parseInt(deletedMovieId))  
  res.status(200).end();
  }else{
      res.status(404).json({errorMessage: "Film Yok"})
  }
});



router.get("/rents", function (req, res, next) {
  res.status(200).json(rents);
});

router.post("/rents", function (req, res, post) {
  let rentedMovie = req.body;
  rentedMovie.id==movieList.id;
  rents.push(rentedMovie);
  res.status(200).json(rentedMovie);
});

ServiceWorkerRegistration.listen(3000, ()=>{
  console.log('http://localhost:3000')
})

module.exports = router;
