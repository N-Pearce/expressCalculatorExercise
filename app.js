const express = require('express')
const nodeman = require('nodemon')
const ExpressError = require('./expressError')
const {findMean, findMode, findMedian} = require('./methods')

const app = express()

/// app requests 

app.get('/', (req, res) => {
    return res.send('Welcome!')
})

app.get('/mean', (req, res) => {
    let nums = req.query.nums;
    if (!nums){
        return res.status(400).json("Nums are Required")
    }

    let stringNums = req.query.nums.split(',');
    let intNums = stringNums.map(Number);

    if (intNums.includes(NaN)){
        return res.status(400).json("Must only include numbers")
    }

    console.log(intNums)
    let avg = findMean(intNums)
    console.log(avg)
    return res.json({operation: 'mean', value: avg});
})

app.get('/median', (req, res) => {
    let nums = req.query.nums;
    if (!nums){
        return res.status(400).json("Nums are Required")
    }

    stringNums = req.query.nums.split(',');
    let intNums = stringNums.map(Number);
    intNums.sort()

    if (intNums.includes(NaN)){
        return res.status(400).json("Must only include numbers")
    }

    const midPoint = findMedian(intNums)
    return res.json({operation: 'median', value: midPoint});
})


app.get('/mode', (req, res) => {
    let nums = req.query.nums;
    if (!nums){
        return res.status(400).json("Nums are Required")
    }

    stringNums = req.query.nums.split(',');
    let intNums = stringNums.map(Number);

    if (intNums.includes(NaN)){
        return res.status(400).json("Must only include numbers")
    }

    const mode = findMode(intNums)
    return res.json({operation: 'mode', value: mode});
})

/// Error handlers and main listener

app.use((req, res, next) => {
    const notFoundError = new ExpressError("Page Not Found", 404)
    console.log(notFoundError.message)
    return next(notFoundError)
})

app.use((err, req, res, next) => {
    let status = err.status || 500;
    let message = err.message
    return res.status(status).json({
        error: { message, status }
    });
});

app.listen(3000, () => {
    console.log('App on port 3000')
})