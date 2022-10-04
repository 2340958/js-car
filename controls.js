class Controls{
    constructor(){
        this.forward=false;
        this.reverse=false;
        this.left=false;
        this.right=false;
        this.#addKeyboardListeners();
    }
        
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;
                case "a":
                    this.left=true;
                    break;
                case "d":
                    this.right=true;
                    break;
                case "w":
                    this.forward=true;
                    break;
                case "s":
                    this.reverse=true;
                    break;
            }
            console.table(this);
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
                case "a":
                    this.left=false;
                    break;
                case "d":
                    this.right=false;
                    break;
                case "w":
                    this.forward=false;
                    break;
                case "s":
                    this.reverse=false;
                    break;
            }
        console.table(this);
        }
    }
}
