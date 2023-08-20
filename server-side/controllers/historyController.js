const { History } = require("../models")
const { default: axios } = require('axios')
const comicUpdateDate = require('../helpers/comicUpdateDate')

class HistoryController {
  static async fetchHistories(req, res, next) {
    try {
      const { userId } = req.user
      const histories = await History.findAll({ where: { UserId: userId }, order: [ ['id', 'DESC'] ], limit: 15 })

      const baseUrl = 'https://api.mangadex.org'
      const imageBaseUrl = 'https://uploads.mangadex.org'

      let historiesData = await Promise.all(histories.map(async history => {
        // Get comic detail by id
        let comic = await axios.get(`${baseUrl}/manga/${history.ComicId}`);
        let comicId = history.ComicId;
        let coverArtId = comic.data.data.relationships.find(relationship => relationship.type === 'cover_art')?.id;
        if (!coverArtId) {
            // Handle jika coverArtId tidak ditemukan
            return null;
        }
        // Get cover art picture
        let coverFileName = (await axios.get(`${baseUrl}/cover/${coverArtId}`)).data.data.attributes.fileName;
    
        // Get comic chapter detail
        let chapter = null;
        if (typeof history.ChapterId !== 'undefined') {
            try {
                chapter = await axios.get(`${baseUrl}/chapter/${history.ChapterId}`);
            } catch (error) {
                // Handle jika request ke API chapter mengalami error
                console.error(`Error fetching chapter ${history.ChapterId}:`, error);
            }
        }
    
        return {
            comicId: comic.data.data.id,
            title: comic.data.data.attributes.altTitles.find(title => 'ja-ro' in title)?.['ja-ro'] || comic.data.data.attributes.title.en,
            coverFileName: coverFileName === null ? null : coverFileName,
            chapterId: chapter ? chapter.data.data.id : null,
            chapter: chapter ? chapter.data.data.attributes.chapter : null,
            openedAt: comicUpdateDate(history.createdAt)
        };
    }));
      res.status(200).json(historiesData)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

module.exports = HistoryController