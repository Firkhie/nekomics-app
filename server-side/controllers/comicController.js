const { default: axios } = require('axios');

class ComicController {
  static async fetchComics(req, res, next) {
    try {
      let comics = await axios({
        method: 'get',
        url: 'https://api.mangadex.org/manga'
      })
      let comicsData = await Promise.all(comics.data.data.map(async comic => {
        let getRating = await (await axios.get(`https://api.mangadex.org/statistics/manga/${comic.id}`)).data.statistics
        let dataRating = Object.values(getRating)
        return {
          id: comic.id,
          title: comic.attributes.altTitles.find(title => 'ja-ro' in title)?.['ja-ro'] || comic.attributes.title.en,
          description: comic.attributes.description.en || 'Description not found',
          tags: comic.attributes.tags.map(el => {
            return el.attributes.name.en
          }),
          updatedAt: comic.attributes.updatedAt,
          coverArt: comic.relationships.filter(relationship => relationship.type === 'cover_art')[0].id,
          rating: dataRating[0].rating.average
        }
      }))
      res.status(200).json(comicsData)
    } catch (err) {
      console.log(err)
    }
  }

  static async fetchComicById(req, res, next) {
    try {
      const { id } = req.params
      const baseUrl = 'https://api.mangadex.org'
      const coverBaseUrl = 'https://uploads.mangadex.org'
      // Get comic detail by id
      let comic = await axios({
        method: 'get',
        url: `${baseUrl}/manga/${id}`
      })

      let comicId = comic.data.data.id
      let authorId = comic.data.data.relationships.filter(relationship => relationship.type === 'author')[0].id
      let coverArtId = comic.data.data.relationships.filter(relationship => relationship.type === 'cover_art')[0].id
      // Get comic average rating
      let getRating = (await axios.get(`${baseUrl}/statistics/manga/${comicId}`)).data.statistics
      let setRating = Object.values(getRating)[0].rating.average
      // Get comic author name
      let author = (await axios.get(`${baseUrl}/author/${authorId}`)).data.data.attributes.name
      // Get cover art picture
      let coverFileName =  (await axios.get(`${baseUrl}/cover/${coverArtId}`)).data.data.attributes.fileName
      let coverArt = (await axios.get(`${coverBaseUrl}/covers/${comicId}/${coverFileName}`, { responseType: 'arraybuffer' })).data
      let coverArtDataURI = `data:image/jpeg;base64,${Buffer.from(coverArt, 'binary').toString('base64')}`;
      // Get all comic chapters based on english languange
      let chapters = await axios({
        method: 'get',
        url: `${baseUrl}/manga/${comicId}/feed`,
        params: {
            translatedLanguage: ['en']
        }
      })
      
      let detailChapters = await Promise.all(chapters.data.data.map(async chapter => {
        // Get scanner group name for each translated chapter
        let scanGroupId = chapter.relationships.find(data => data.type === 'scanlation_group').id
        let scanGroup = (await axios.get(`${baseUrl}/group/${scanGroupId}`)).data.data.attributes.name
        return {
          chapterId: chapter.id,
          chapter: chapter.attributes.chapter,
          publishAt: chapter.attributes.publishAt,
          totalPages: chapter.attributes.pages,
          scanGroup: scanGroup
        }
      }))

      let comicData = {
        id: comic.data.data.id,
        title: comic.data.data.attributes.altTitles.find(title => 'ja-ro' in title)?.['ja-ro'] || comic.data.data.attributes.title.en,
        type: comic.data.data.type,
        description: comic.data.data.attributes.description.en || 'Description not found',
        status: comic.data.data.attributes.status,
        year: comic.data.data.attributes.year,
        tags: comic.data.data.attributes.tags.map(el => {
          return el.attributes.name.en
        }),
        createdAt: comic.data.data.attributes.createdAt,
        updatedAt: comic.data.data.attributes.updatedAt,
        coverArt: coverArtDataURI,
        author: author,
        rating: setRating,
        totalChapter: chapters.data.data.length,
        detailChapters: detailChapters
      }
      res.status(200).json(comicData)
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = ComicController