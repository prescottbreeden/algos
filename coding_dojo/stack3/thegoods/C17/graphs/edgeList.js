class Vertex
{
    constructor(data)
    {
        this.data = data;
        this._id = '???';
    }
}

class ELGraph
{

    constructor()
    {
        this._vertices = {}
        this._edges = []
    }
    
    addVertex(data)
    {
        let id = this._genId()
        let neo = new Vertex(data, id);
        this._vertices.push(neo);
        return this;
    }

    _genId()
    {
        let id = Math.floor(Math.random() * (this.power+1) * 17 * (this.order+1));
        while(id in this._vertices)
        {
            id = Math.floor(Math.random() * (this.power+1) * 17 * (this.order+1));
        }
        return id

    }

    removeVertex(id)
    {
        delete this._vertices[id];
        return this;
    }

    get power()
    {
        return this._edges.length;
    }

    get order()
    {
        return this._vertices.length;
    }
}

