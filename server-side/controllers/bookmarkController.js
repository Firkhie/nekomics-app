const { default: axios } = require('axios');
const { Bookmark } = require("../models")

class BookmarkController {
  static async createBookmark(req, res, next) {
    try {
      const { comicId } = req.body
      const { userId } = req.user
      
      const comic = await Bookmark.findOne({ where: { ComicId: comicId, UserId: userId } })
      if (comic) throw { name: 'BookmarkDuplicated' }
      const bookmark = await Bookmark.create({ ComicId: comicId, UserId: userId })
      res.status(201).json({ bookmark })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  static async deleteBookmarkById(req, res, next) {
    try {
      const { comicId } = req.params
      const { userId } = req.user
      const bookmark = await Bookmark.findOne({ where: { ComicId: comicId, UserId: userId } })
      if (!bookmark) throw { name: 'NotFound' }

      if (userId !== bookmark.UserId) throw { name: 'Forbidden' }

      await Bookmark.destroy({ where: { ComicId: comicId } })
      res.status(200).json({
        message: `Success to delete id ${comicId}`,
     })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  static async fetchBookmarks(req, res, next) {
    const { userId } = req.user
    try {
      const bookmarks = await Bookmark.findAll({ where: { UserId: userId } })
      const baseUrl = 'https://api.mangadex.org'
      const imageBaseUrl = 'https://uploads.mangadex.org'

      let bookmarksData = await Promise.all(bookmarks.map(async bookmark => {
        // Get comic detail by id
        let comic = await axios.get(`${baseUrl}/manga/${bookmark.ComicId}`);

        let comicId = bookmark.ComicId
        let authorId = comic.data.data.relationships.filter(relationship => relationship.type === 'author')[0].id
        let coverArtId = comic.data.data.relationships.filter(relationship => relationship.type === 'cover_art')[0].id
        // Get comic author name
        let author = (await axios.get(`${baseUrl}/author/${authorId}`)).data.data.attributes.name
        // Get cover art picture
        let coverFileName =  (await axios.get(`${baseUrl}/cover/${coverArtId}`)).data.data.attributes.fileName
        
        return {
          id: comic.data.data.id,
          title: comic.data.data.attributes.altTitles.find(title => 'ja-ro' in title)?.['ja-ro'] || comic.data.data.attributes.title.en,
          description: comic.data.data.attributes.description.en || 'Description not found',
          coverFileName: coverFileName === null ? null : coverFileName,
          author: author,
        }
      }))
      res.status(200).json(bookmarksData)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}
module.exports = BookmarkController