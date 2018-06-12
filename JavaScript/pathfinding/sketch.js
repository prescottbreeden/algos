function removeFromArray(arr, el) {
    for (let i = arr.length-1; i >=0; i--) {
        if (arr[i] === el) {
            arr.splice(i, 1);
        }
    }
}

var cols = 5;
var rows = 5;
const grid = new Array(cols);

var openSet = [];
var closedSet = [];
var start;
var end;
var w, h;

    //making 2d array
    for (let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            console.log(grid);
            grid[i][j] = new Cell(i, j);
        }
    }

class Cell {
    
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.neighbors = [];

        this.show = () => {
            fill(255);
            stroke(0);
            rect(this.x * w, this.y * h, w, h)
        }

        this.addNeighbors = () => {
            if (i < cols-1) {
                this.neighbors.push(grid[this.i+1][this.j])
            }
            if (i > 0) {
                this.neighbors.push(grid[this.i-1][this.j])
            }
            if (j < rows-1) {
                this.neighbors.push(grid[this.i][this.j+1])
            }
            if (j > 0) {
                this.neighbors.push(grid[this.i][this.j-1])
            }
        }
    }



}

function setup() {
    createCanvas(400,400);
    console.log('A*');
    
    w = width/cols;
    h = height/rows;

    //making 2d array
    for (let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            console.log(grid);
            grid[i][j] = new Cell(i, j);
        }
    }

    for (let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            console.log(grid);
            grid[i][j].addNeighbors(grid);
        }
    }


    start = grid[0][0];
    end = grid[cols-1][rows-1];

    openSet.push(start);

    


}

function draw() {

    if (openSet.length > 0) {
        
        var lowestIndex = 0;
        for (var i = 0; i < openSet.length; i++) {
            if (openSet[i].f < openSet[lowestIndex].f) {
                lowestIndex = 1;
            }
        }
        var current = openSet[lowestIndex];

        if (current === end) {
            console.log("DONE!!!A@#E$@#$R!#$%");
        }

        removeFromArray(openSet, current);
        closedSet.push(current);

        var neighbors = current.neighbors;
        for (let i = 0; i < neighbors.length; i++) {
            var neighbor = neighbors[i];
        }

    } else {
        //no solution
    }

    background(0);

    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
}

