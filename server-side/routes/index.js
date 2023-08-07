const BookmarkController = require("../controllers/bookmarkController");
const ComicController = require("../controllers/comicController");
const HistoryController = require("../controllers/historyController");
const MidtransController = require("../controllers/midtransController");
const UserController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");
const router = require("express").Router();

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.get('/comics/popularcomics', ComicController.fetchComics)
router.get('/comics/latestcomics', ComicController.fetchComics)
router.get('/comics/seriescomics', ComicController.fetchComics)
router.get('/comics/detail/:id', ComicController.fetchComicById)
router.get('/comics/coverart/:comicId/:coverFileName', ComicController.fetchCoverArt)
router.get('/comics/read/:comicId/:chapterId', ComicController.fetchChapterPages)

router.post('/generate-mt-token', MidtransController.generateMidtransToken)

router.use(authentication)

router.post('/bookmarks', BookmarkController.createBookmark)
router.get('/bookmarks', BookmarkController.fetchBookmarks)
router.delete('/bookmarks/:comicId', BookmarkController.deleteBookmarkById)

router.get('/histories', HistoryController.fetchHistories)

module.exports = router;
