class Graph{
    constructor(numberOfVertices){
        this.numberOfVertices = numberOfVertices;
        this.adjacentList = new Map();
    }

    addVertex(vertex){
        this.adjacentList.set(vertex, []);
    }

    addEdge(vertexA, vertexB){  
        this.adjacentList.get(vertexA).push(vertexB); 
        this.adjacentList.get(vertexB).push(vertexA); 
    }

    print(){
        const keys = [...this.adjacentList.keys()];  
        keys.forEach( (key) =>{
            const values = [...this.adjacentList.get(key)];
            let result = ""; 
            values.forEach((value)=>{
                result += value + " ";
            });

            console.log(key + " => " + result); 
        });
    }
}

// (()=>{
//     var graph= new Graph(5); 
//     var vertices = [ 'v1', 'v2', 'v3', 'v4', 'v5' ]; 
    
//     vertices.forEach((vertex) => graph.addVertex(vertex));
    
//     graph.addEdge('v1', 'v2'); 
//     graph.addEdge('v1', 'v4'); 
//     graph.addEdge('v1', 'v5'); 
//     graph.addEdge('v2', 'v3'); 
//     graph.addEdge('v4', 'v5'); 
//     graph.addEdge('v5', 'v3'); 
    
//     graph.print(); 
// })();