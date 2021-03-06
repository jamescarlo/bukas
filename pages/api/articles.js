import axios from 'axios'

export default async function GetArticles (req, res) {
    return new Promise((resolve, reject) => {
        axios
        .get(`https://bukas-strapi.herokuapp.com/api/articles?populate=cover_image`)
        .then((response) => {
          if (response) {
            res.status(response.data ? 200 : 404).json(response.data.data)
          }
          resolve()
        })
        .catch((error) => {
          console.error('###ERROR WHEN FETCHING MENUS', error)
          res.status(500).json({ message: 'Internal Server Error', data: error })
          resolve()
        })
    })
}
