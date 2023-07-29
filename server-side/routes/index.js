const ComicController = require("../controllers/comicController");
const UserController = require("../controllers/userController");

const router = require("express").Router();

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.get('/comics', ComicController.fetchComics)
router.get('/comics/detail/:id', ComicController.fetchComicById)
router.get('/comics/read/:chapterId', ComicController.fetchChapterPages)

module.exports = router;
