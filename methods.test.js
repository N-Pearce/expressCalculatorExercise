const {findMean, findMode, findMedian} = require('./methods')

describe('mean', () => {
    test('mean finds average', () =>{
        let avg = findMean([1,2,3,4])
        expect(avg).toBe(2.5)
        avg = findMean([1,2,3,4,5])
        expect(avg).toBe(3)
    })
})

describe('median', () => {
    test('median finds midPoint', () =>{
        let midPoint = findMedian([1,2,3,4])
        expect(midPoint).toBe(2.5)
        midPoint = findMedian([1,1,2,99,99])
        expect(midPoint).toBe(2)
    })
})

describe('mode', () => {
    test('mode finds highest frequency in the form of an array', () =>{
        let modeArr = findMode([1,2,3,4])
        expect(modeArr).toEqual([1,2,3,4])

        modeArr = findMode([1,1,2,99,99])
        expect(modeArr).toEqual([1,99])

        modeArr = findMode([1,1,4,4,4,4,4,4,4,9])
        expect(modeArr).toEqual([4])
    })
})