class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    add(data){
        const node = this.root;
        if(node == null){
            this.root = new Node(data);
        }else{
            const searchTree = (node)=> {
                if(data < node.data){
                    if(node.left == null){
                        node.left = new Node(data);
                    }else{
                        searchTree(node.left);
                    }
                }else {
                    if(node.right == null){
                        node.right = new Node(data);
                    }else {
                        searchTree(node.right);
                    }
                }
            }
            return searchTree(node);
        }
    }
}

// const tree = new BST();
// tree.add(8);
// tree.add(4);
// tree.add(10);
// tree.add(5);
