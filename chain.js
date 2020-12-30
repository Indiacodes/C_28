class chain{
    constructor(objectA, objectB){
        var chainoptions = {
            stiffness : 0.3,
            bodyA : objectA,
            pointB : objectB,
            legnth : 30
        }

        this.chain = Matter.Constraint.create(chainoptions);
        World.add(world, this.chain);
    }

    showChain(){
        strokeWeight(5);
        if(this.chain.bodyA != null){
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x, this.chain.pointB.y);
        }
        
    }

    launched(){
        this.chain.bodyA = null;
    }
}

