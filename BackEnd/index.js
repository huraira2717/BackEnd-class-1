 const express = require('express')
 const cors = require('cors')
 const axios=require('axios')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/login', (req, res) => {
//     res.send('<h1>Hello h1</h1>')
//   })

//   app.get('/youtube', (req, res) => {
//     res.send('<h1>Youtube</h1>')
//   })


  app.get('/api/user', (req, res) => {
    const user=[
        {
        id:1,
        title:'practice',
        des:'description'
    },
    {
        id:2,
        title:'practice 2',
        des:'description 2'
    },
    {
        id:3,
        title:'practice 3',
        des:'description 3'
    },
    {
        id:4,
        title:'practice 4',
        des:'description 4'
    }
];
    res.send(user)
  })
  const port=process.env.port || 3000;

app.listen(port, () => {
  console.log(`sarver at http://localhost:${port}`)
})