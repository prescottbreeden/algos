// This describes a graph implemented using an adjacency list
const Vertex = require("./GraphNode");

class ALGraph
{
    // this implementation is gonna for ease: undirected&unweighted edges
    constructor()
    {
        this._vertices = {};
        this._edges = {};
    }

    generateID()
    {
        let x = ['a','b','c','d','e','f','g','h',1,2,3,4,5,6,'i','z'];
        let id = [x[Math.floor(Math.random()*x.length)], x[Math.floor(Math.random()*x.length)], x[Math.floor(Math.random()*x.length)], x[Math.floor(Math.random()*x.length)]].join("");
        while(id in this._vertices)
        {
            id = [x[Math.floor(Math.random()*x.length)], x[Math.floor(Math.random()*x.length)], x[Math.floor(Math.random()*x.length)], x[Math.floor(Math.random()*x.length)]].join("");
        }
        return id;
    }

    addVertex(value, props)
    {
        let id = this.generateID();
        let neo = new Vertex(id, value, props); // this relies on a vertex being correctly made...
        this._vertices[id] = neo;
        this._edges[id] = [];
        return id;
    }

    removeVertex(target_id)
    {
        // remove vertex
        delete this._vertices[target_id];
        // remove couplings
        let edges = this._edges[target_id];
        delete this._edges[target_id];
        edges.forEach(id => {
            // find vertex
            let vtx = this._edges[id];
            // remove edge
            let vdx = vtx.indexOf(target_id);
            if(vdx !== -1)
            {
                vtx.splice(vdx,1);
            }
        });
        return this;
    }

    addEdge(vertID1, vertID2)
    {
        // multiple edges to same node???
        this._edges[vertID1].push(vertID2);
        this._edges[vertID2].push(vertID1);
        return this;
    }

    removeEdge(vertID1, vertID2)
    {
        let vdx1 = this._edges[vertID1].indexOf(vertID2);
        if(vdx1 !== -1)
        {
            this._edges[vertID1].splice(vdx1,1);                
        }
        let vdx2 = this._edges[vertID2].indexOf(vertID1);
        if(vdx2 !== -1)
        {
            this._edges[vertID2].splice(vdx2,1);                    
        }
        return this;
    }

    neighbors(vertID)
    {
        return this._edges[vertID];
    }

    adjacent(vertID1, vertID2)
    {
        return this._edges[vertID1].indexOf(vertID2) >= 0 &&
               this._edges[vertID2].indexOf(vertID1) >= 0;
    }
}

module.exports = ALGraph;