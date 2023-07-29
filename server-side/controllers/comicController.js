const { default: axios } = require('axios');

class ComicController {
  static async fetchComics(req, res, next) {
    try {
      const baseUrl = 'https://api.mangadex.org'
      const imageBaseUrl = 'https://uploads.mangadex.org'
      let comics = await axios({
        method: 'get',
        url: `${baseUrl}/manga`
      })
      
      let comicsData = await Promise.all(comics.data.data.map(async comic => {
      // Get comics rating
      let getRating = (await axios.get(`${baseUrl}/statistics/manga/${comic.id}`)).data.statistics
      let dataRating = Object.values(getRating)
      // Get latest chapter detail
      let chapterId = comic.attributes.latestUploadedChapter
      let latestChapter = (await axios.get(`${baseUrl}/chapter/${chapterId}`)).data.data
      // Get cover art
      // let coverArtId = comic.relationships.filter(relationship => relationship.type === 'cover_art')[0].id
      // let coverArt = (await axios.get(`${imageBaseUrl}/covers/${comicId}/${coverFileName}`, { responseType: 'arraybuffer' })).data
      // let coverArtDataURI = `data:image/jpeg;base64,${Buffer.from(coverArt, 'binary').toString('base64')}`;
        return {
          id: comic.id,
          title: comic.attributes.altTitles.find(title => 'ja-ro' in title)?.['ja-ro'] || comic.attributes.title.en,
          description: comic.attributes.description.en || 'Description not found',
          tags: comic.attributes.tags.map(el => {
            return el.attributes.name.en
          }),
          updatedAt: comic.attributes.updatedAt,
          latestChapter: latestChapter.attributes.chapter,
          publishAt: latestChapter.attributes.publishAt,
          // coverArt:
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
      const imageBaseUrl = 'https://uploads.mangadex.org'
      // Get comic detail by id
      let comic = await axios.get(`${baseUrl}/manga/${id}`);

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
      let coverArt = (await axios.get(`${imageBaseUrl}/covers/${comicId}/${coverFileName}`, { responseType: 'stream' }))
      // Get all comic chapters based on english languange
      let chapters = await axios({
        method: 'get',
        url: `${baseUrl}/manga/${comicId}/feed`,
        params: {
            translatedLanguage: ['en']
        }
      })
      
      let detailChapters = await Promise.all(chapters.data.data.map(async chapter => {
        let scanGroup = 'Unknown' // Default value jika scanGroupId tidak ditemukan
        // Check apakah relationships memiliki data dan merupakan array
        if (chapter.relationships && Array.isArray(chapter.relationships)) {
          let scanGroupData = chapter.relationships.find(data => data.type === 'scanlation_group')
          // Check apakah scanGroupData ditemukan
          if (scanGroupData && scanGroupData.id) {
            let scanGroupId = scanGroupData.id
            // Jika scanGroupId ditemukan, ambil nama scanGroup dari API
            try {
              let scanGroupResponse = await axios.get(`${baseUrl}/group/${scanGroupId}`)
              scanGroup = scanGroupResponse.data.data.attributes.name
            } catch (err) {
              console.log(err)
              // Jika terjadi kesalahan saat mengambil data dari API, tetapkan scanGroup menjadi 'Unknown'
              scanGroup = 'Unknown'
            }
          }
        }
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
        // coverArt: coverArt,
        author: author,
        rating: setRating,
        totalChapter: chapters.data.data.length,
        detailChapters: detailChapters
      }

      let mimeType = coverFileName.endsWith('.png') ? 'image/png' : 'image/jpeg'
      // res.setHeader('Content-Type', mimeType);
      
      // coverArt.data.pipe(res);
      res.status(200).json(comicData)
    } catch (err) {
      console.log(err)
    }
  }

  static async fetchChapterPages(req, res, next) {
    try {
      const baseUrl = 'https://api.mangadex.org';
      const imageBaseUrl = 'https://uploads.mangadex.org'
      const { chapterId } = req.params
      const getChapterPages = (await axios.get(`${baseUrl}/at-home/server/${chapterId}`)).data;
      let chapterHash = getChapterPages.chapter.hash
      let chapterArr = getChapterPages.chapter.data
      let chapterPages = await Promise.all(chapterArr.map(async pageId => {
        return (await axios.get(`${imageBaseUrl}/data/${chapterHash}/${pageId}`, { responseType: 'stream' }))
      }))
      res.setHeader('Content-Type', 'image/jpeg');
      chapterPages[1].data.pipe(res);
    } catch (err) { 
      console.log(err)
    }
  }
}

module.exports = ComicController