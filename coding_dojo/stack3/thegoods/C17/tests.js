const ALGraph = require("./adjacencyList");

function canCreateAGraph()
{
    // arrange
    // act
    let bob = new ALGraph();
    // assert
    let res = (bob instanceof ALGraph);
    console.log(`ALGraph can be instantiated: ${res}`);
}

function graphCanGenerateId()
{
    let bob = new ALGraph();
    let res = bob.generateID();
    console.log(`ALGraph can generate an ID: ${(typeof res == "string") && (res.length == 4)}`);
}

function canAddVertex()
{
    // arrange
    let bob = new ALGraph();
    let preLength = Object.keys(bob._vertices).length;
    // act
    let id = bob.addVertex('rob', {})
    // assert
    let res = Object.keys(bob._vertices).length > preLength;
    console.log(`ALGraph can add a vertex: ${res}`);
}

function canRemoveVertex()
{
    // arrange
    let bob = new ALGraph();
    let id = bob.addVertex("ross",{});
    let preState = Object.keys(bob._vertices).length;
    // act
    bob.removeVertex(id);
    // assert
    let res = Object.keys(bob._vertices).length < preState;
    console.log(`ALGraph can remove a vertex: ${res}`);
}

function canAddEdge()
{
    // arrange
    let bob = new ALGraph();
    let vtxid1 = bob.addVertex('rob', {});
    let vtxid2 = bob.addVertex('ross', {});
    // act
    bob.addEdge(vtxid1, vtxid2);
    // assert
    let res = bob._edges[vtxid1].indexOf(vtxid2) !== -1 
              && bob._edges[vtxid2].indexOf(vtxid1) !== -1;
    console.log(`ALGraph can add an edge: ${res}`);
}

function canRemoveEdge()
{
    // arrange
    let bob = new ALGraph();
    let vtxid1 = bob.addVertex('rob', {});
    let vtxid2 = bob.addVertex('ross', {});
    bob.addEdge(vtxid1, vtxid2);
    // act
    bob.removeEdge(vtxid1, vtxid2);
    // assert
    let res = bob._edges[vtxid1].indexOf(vtxid2) === -1 
              && bob._edges[vtxid2].indexOf(vtxid1) === -1;
    console.log(`ALGraph can remove an edge: ${res}`);
}

function canListNeighbors()
{
    // arrange
    let bob = new ALGraph();
    let vid1 = bob.addVertex('robbo', {});
    let vid2 = bob.addVertex('robbo', {});
    let vid3 = bob.addVertex('robbo', {});
    let vid4 = bob.addVertex('robbo', {});
    bob.addEdge(vid1, vid2);
    bob.addEdge(vid1, vid3);
    bob.addEdge(vid1, vid4);
    bob.addEdge(vid2, vid3);
    bob.addEdge(vid2, vid4);
    // act
    let neighborsOf1 = bob.neighbors(vid1);
    let neighborsOf2 = bob.neighbors(vid2);
    let neighborsOf3 = bob.neighbors(vid3);
    let neighborsOf4 = bob.neighbors(vid4);
    // assert
    let res = neighborsOf1.length == 3 &&
              neighborsOf2.length == 3 &&
              neighborsOf3.length == 2 &&
              neighborsOf4.length == 2;
    console.log(`ALGraph can list the neighbors of a noodle: ${res}`);
}

function canDetectAdjacency()
{
    // arrange
    let bob = new ALGraph();
    let vid1 = bob.addVertex('robbo', {});
    let vid2 = bob.addVertex('robbo', {});
    bob.addEdge(vid1, vid2);
    // act
    let connected = bob.adjacent(vid1, vid2);
    // assert
    let res = connected==true;
    console.log(`ALGraph can detect adjacency: ${res}`);
}

function canBreadthFirstTraverse()
{

}

function canDepthFirstTraverse()
{

}

// TESTS
// graph deetz
canCreateAGraph();
graphCanGenerateId();

// vertex CRUD
canAddVertex();
canRemoveVertex();

// edge CRUD
canAddEdge();
canRemoveEdge();

// graph 
canListNeighbors();
canDetectAdjacency();

// graph traversalss
// canDepthFirstTraverse();
// canBreadthFirstTraverse();