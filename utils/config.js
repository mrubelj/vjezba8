require('dotenv').config()

const PORT = process.env.PORT

// Baza podataka
const password = process.env.ATLAS_PASS
const dbname = 'novi'
const DB_URI = `mongodb+srv://novi:${password}@cluster0.no3zf.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = {PORT, DB_URI}