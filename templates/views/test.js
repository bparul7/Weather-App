const path = require ('path')
console.log (__dirname)
console.log (__filename)
const newpath = path.join (__dirname, './../public/css/style.css')
console.log (newpath)
const newpath1 = path.join ("/" , "css/style.css")
console.log (newpath1)