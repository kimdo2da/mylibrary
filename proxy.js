// proxy.js
import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors())

app.get('/aladin', async (req, res) => {
  const { query } = req
  const queryParams = new URLSearchParams(query).toString()
  const apiUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?${queryParams}`

  try {
    const response = await fetch(apiUrl)
    const text = await response.text()
    res.set('Content-Type', 'text/xml')
    res.send(text)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error fetching data')
  }
})

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`)
})
//서버실행