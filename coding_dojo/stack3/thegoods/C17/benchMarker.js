// imports
const ALAN = require("./graphs/edgeList")

const graphs = []


function benchMarkAdd(graphs)
{
    console.log("BENCHMARKING INSERTION...")
    let res = [];
    for(let g of graphs)
    {
        res.push(addLotsOfThings(g));
    }
    summarize(res);
    return res;
}

function addLotsOfThings(graph)
{
    // arrange
    let bob = new graph();
    // act
    let start = process.hrtime();
    let i = 1000;
    while(i-- > 0)
    {
        bob.add(i.toString(), 'bob');
    }
    let end = process.hrtime();
    // 'assert'
    return {
        'name': graph.name,
        'time': compareTimes(start, end)
    }
}


benchMarkAdd(graphs);