//ดึงโคด้ของ express เข้ามาใน java
const express = require('express')

//สร้าง server
const app = express()

//บอก server ฟังportอะไร
app.listen(3000, () => {
    console.log("Server starts successfully")
})

//สร้างApi ที่ parth
app.get('/', (req, res) =>{
    res.json({
        "message": "Hello World"
    })
})