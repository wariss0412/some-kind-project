//ดึงโคด้ของ express เข้ามาใน java
const express = require('express')
const cors = require('cors')

//สร้าง server
const app = express()
app.use(express.json())
app.use(cors())
//บอก server ฟังportอะไร
app.listen(3000, () => {
    console.log("Server starts successfully")
})

//สร้างApi ที่ parth
app.get('/', (req, res) =>{
    const A = parseFloat(req.query.A)
    const B = parseFloat(req.query.B)
    const ope = req.query.ope

    if (isNaN(A) || isNaN(B)){
        return res.json("error: Invalid number")
    }else if (ope == '+'){
        result = A+B
    }else if (ope === '-') {
        result = A - B
    } else if (ope === '*') {
        result = A * B
    } else if (ope === 'x') {
        result = A * B
    } else if (ope === '%') {
        result = B !== 0 ? A % B : "It a zero can't divide"
    } else if (ope === '/') {
        result = B !== 0 ? A / B : "It a zero can't divide" 
    } else { result = "error : You need some operator or correct operater" 

    }
   
        
    
    res.json({
        
        "result": result
    })
})