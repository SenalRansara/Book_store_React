// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// require ("dotenv").config();

// const app = express();
// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())

// app.use(cors())

// const PORT = process.env.PORT || 8080;
// const URL = process.env.MONGODB_URL;

// //Book management - Senal
// const Book = require("./controller/BookController");
// app.use("/api", Book);




// mongoose.connect(URL).then(()=> {
//     console.log('DB Connected Successfully');
// })
// .catch((err) => console.log('DB Connection Error',err));

// app.listen(PORT,()=>{
//     console.log(`App is running on ${PORT}`);
// });


// app.get('/', (req, res) => {
//   res.send('<h1>Book store App Backend is Successfully connected </h1> <h4>Message: Success</h4> <p>Version: 1.0.0</p>');
// })



