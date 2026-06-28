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

const valAB = (req, res, next) => {
    const A = parseFloat(req.query.A);
    const B = parseFloat(req.query.B);
    if (isNaN(A) || isNaN(B)){
        return res.json("error: Invalid number")
    }
    req.numA = A;
    req.numB = B;
    next();
};

app.get('/add', valAB, (req, res) => {
    const result = req.numA + req.numB;
    res.json({'result': result});

});

app.get('/sub', valAB, (req, res) => {
    const result = req.numA - req.numB;
    res.json({'result': result});

});

app.get('/multi', valAB, (req, res) => {
    const result = req.numA * req.numB;
    res.json({'result': result});

});

app.get('/divide', valAB, (req, res) => {
    if (req.numB === 0) {
        return res.json({"result": "error: It a zero can't divide"})
    }
    const result = req.numA / req.numB;
    res.json({'result': result});

});
