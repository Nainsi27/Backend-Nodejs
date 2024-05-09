
## backend Nodejs

create file in vs code  
-> run node index.js 

run -> npm init
may or may not run -> npm install -g npm@10.7.0

install express
run -> npm install express --save

# index.js file  -> getting started hello world 
then in index.js file  all expressjs content

# then add in package.json 
"scripts": {
    "start": "node index.js"
  }, 

# then run 
    npm run start
# port  run -->>  http://localhost:4000/

# then run 
    npm i dotenv
    # .env file create and save it there.

# then add      
 # require('dotenv').config() 
 # process.env.PORT
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

<!--    https://www.npmjs.com/package/dotenv   -->
<!--   https://expressjs.com/    --> 

