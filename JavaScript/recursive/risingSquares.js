// Rising Squares
// print out odd numbers from 1 to num and then descend back down with even numbers from num (ending at 4)
// e.g. (num = 3) 1 9 4 
// e.g. (num = 4) 1 9 25 16 2

risingSquares(8)

function risingSquares(num, idx=1){
    if(num === 0 || num === 2){return null}
    console.log(idx*idx)
    if(idx === num || idx === num-1)
        return risingSquares(num, (idx == num ? idx-1 : idx+1))
    if(idx % 2 !== 0)
        return risingSquares(num, idx+2)
    else
        return risingSquares(num, idx-2)
}
