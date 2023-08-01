const { History } = require("../models")
const { default: axios } = require('axios')
const comicUpdateDate = require('../helpers/comicUpdateDate')

class HistoryController {
  static async fetchHistories(req, res, next) {
    try {
      const { userId } = req.user
      const histories = await History.findAll({ where: { UserId: userId } })

      const baseUrl = 'https://api.mangadex.org'
      const imageBaseUrl = 'https://uploads.mangadex.org'

      let historiesData = await Promise.all(histories.map(async history => {
        // Get comic detail by id
        let comic = await axios.get(`${baseUrl}/manga/${history.ComicId}`);
        let comicId = history.ComicId
        let coverArtId = comic.data.data.relationships.filter(relationship => relationship.type === 'cover_art')[0].id
        // Get cover art picture
        let coverFileName =  (await axios.get(`${baseUrl}/cover/${coverArtId}`)).data.data.attributes.fileName
        // let coverArt = (await axios.get(`${imageBaseUrl}/covers/${comicId}/${coverFileName}`, { responseType: 'stream' }))
        let coverArt = `${imageBaseUrl}/covers/${comicId}/${coverFileName}`
        // Get comic chapter detail
        let chapter = await axios.get(`${baseUrl}/chapter/${history.ChapterId}`)
        return {
          comicId: comic.data.data.id,
          title: comic.data.data.attributes.altTitles.find(title => 'ja-ro' in title)?.['ja-ro'] || comic.data.data.attributes.title.en,
          coverArt: coverArt,
          chapterId: chapter.data.data.id,
          chapter: chapter.data.data.attributes.chapter,
          openedAt: comicUpdateDate(history.createdAt)
        }
      }))

      // let mimeType = coverFileName.endsWith('.png') ? 'image/png' : 'image/jpeg'
      // res.setHeader('Content-Type', mimeType);
      // coverArt.data.pipe(res);
      res.status(200).json(historiesData)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

module.exports = HistoryController