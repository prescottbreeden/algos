class GraphNode
{
    constructor(id, value=null, props={})
    {
        this.id = id;
        this.value = value;
        this.props = props;
    }
}

module.exports = GraphNode;