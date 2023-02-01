class Ball {
    constructor(config) {
      this.velocity = config.velocity;
      this.strokeWeight = config.strokeWeight;
      this.diameter = config.diameter;
      
      //if the ball has a container, use it as reference
      if(config.container) {
        this.container = config.container;
        this.position = createVector(
          (config.container.getContainerBounds().left + config.container.getContainerBounds().right) / 2,
          (config.container.getContainerBounds().top + config.container.getContainerBounds().bottom) / 2
        );
        this.leftBound = config.container.getContainerBounds().left;
        this.rightBound = config.container.getContainerBounds().right;
        this.topBound = config.container.getContainerBounds().top;
        this.bottomBound = config.container.getContainerBounds().bottom;
      }
      // else use the canvas as reference
      else {      
        this.container = null;
        this.position = config.position;
        this.leftBound = 0;
        this.rightBound = width;
        this.topBound = 0;
        this.bottomBound = height;
      }
    }
    
    drawBall() {
      fill(255);
      
      //if touch right
      if(this.position.x >= this.rightBound - (this.diameter / 2) - 1) {
        this.velocity.x *= -1;
        this.position.x = this.rightBound - (this.diameter / 2) - 1;
        this.edgeTouch();
      }
      //if touch left
      else if(this.position.x <= this.leftBound + (this.diameter / 2) + 1) {
        this.velocity.x *= -1;
        this.position.x = this.leftBound + (this.diameter / 2) + 1;
        this.edgeTouch();
      }
      
      //if touch bottom
      if(this.position.y >= this.bottomBound - (this.diameter / 2) - 1) {
        this.velocity.y *= -1;
        this.position.y = this.bottomBound - (this.diameter / 2) - 1;
        this.edgeTouch();
      }
      //if touch top
      else if(this.position.y <= this.topBound + (this.diameter / 2) + 1) {
        this.velocity.y *= -1;
        this.position.y = this.topBound + (this.diameter / 2) + 1;
        this.edgeTouch();
      }
  
      this.position = this.position.add(this.velocity);
      
      strokeWeight(this.strokeWeight);
      stroke(fillHSL.h, fillHSL.s, fillHSL.l);
      ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    }
    
    edgeTouch() {
      fill(fillHSL.h, 100, 40);
      this.velocity.mult(0.9);
    }
  }