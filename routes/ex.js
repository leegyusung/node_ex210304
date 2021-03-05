const express = require('express');

const router = express.Router();


router.get('/btn1', (req, res, next) => {
    console.log('BTN1');
    res.render('btn1');
});


router.post('/btn1',  (req, res, next) => {
    try {
        const text1={text1:'qwqweqew'};
        res.json(text1);
        console.log(text1,'규성이');
        //res.render('index', { text1: req.body.text1 });
    } catch (error) {
        console.log(error);
        next(error);
    }
});



router.get('/btn2', (req, res, next) => {
    console.log('BTN2');
    res.render('btn2');
})
router.get('/btn3', (req, res, next) => {
    console.log('BTN3');
    res.render('btn2');
})



module.exports = router;