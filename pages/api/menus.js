// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function GetMenu (req, res) {
  // res.status(200).json({ name: 'John Doe' })
    return new Promise((resolve, reject) => {
        axios
        .get(`https://bukas-strapi.herokuapp.com/api/menus`)
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
