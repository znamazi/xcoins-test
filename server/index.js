const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')

const axios = require('axios')

const port = process.env.PORT
const app = express()
app.use(cors())

app.get('/:currentCurrency', async (req, res) => {
  const { currentCurrency } = req.params
  let response = await axios.get(
    `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_KEY}/latest/${currentCurrency}`
  )

  res.send(response.data)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
