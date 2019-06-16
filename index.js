import express from 'express'
import bodyParser from 'body-parser'
// import { version } from './helper/variables'
import AdminRoutes from './routes/adminRoutes'

const app = express()

app.use('/api/**', bodyParser.json())

AdminRoutes(app)

if (process.env.NODE_ENV === 'production') {
  // Express wil serve up production assets
  // like main.js, main.css
  app.use(express.static('client/dist'))

  // Express will serve up the index.hml file
  // if does not recognize the route
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.timeout = 300000
const server = app.listen(PORT)

export default server
