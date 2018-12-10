const {BryannaSort} = require("./lesorts");

const sorts = [BryannaSort];

function calcTime(start, end)
{
    return parseFloat(`${end[0]-start[0]}.${end[1]-start[1]}`);
}

function timeASort(sort, arr)
{
    let start = process.hrtime();
    sort(arr);
    let end = process.hrtime();
    return {
        name: sort.name,
        time: calcTime(start,end)
    }
}

function chooseWinner(sortInfoArray)
{
    return sortInfoArray.reduce((prev, cur)=>prev['time']>cur['time']?cur:prev);
}

function genRadnoArr(size=10)
{
    return new Array(size).fill(size).map(v=>Math.floor(Math.random()*size+1));
}

function timeABunchOfSorts(sorts)
{
    let bob = genRadnoArr();
    let res = [];
    for(let sort of sorts)
    {
        res.push(timeASort(sort, bob.slice()));
    }
    return chooseWinner(res);
}

let res = timeABunchOfSorts(sorts)
console.log(res)
