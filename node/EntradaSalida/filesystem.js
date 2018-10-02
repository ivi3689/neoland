const fs = require('fs')
const moment = require('moment')

let startDate = moment()

// let result = fs.readdirSync('.')

// result.forEach((item)=>{

//   let content = fs.readFileSync(item)
//   console.log(content.toString())
// })

// console.log(result)

// let endDate = moment()

// console.log(endDate.diff(startDate))
// co
fs.readdir('./mds', (err, files)=>{
  if(err) return console.log(err)
  files.forEach(item=>{
    if(item.endsWith('md'))
    fs.readFile(`./mds/${item}`, 'utf-8', (err, data)=>{
      if(err) return console.lor(err)
      console.log(data)
    })
  })

})
