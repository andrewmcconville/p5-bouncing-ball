class UIWindow {
    constructor(config) {
      this.position = createVector(config.x, config.y);
      this.width = config.width;
      this.height = config.height;
      this.title = config.title;
      this.headerHeight = 30;
      this.contentHeight = this.height - this.headerHeight;
      this.strokeWeight = config.strokeWeight;
      this.stroke = {
        h: fillHSL.h,
        s: 50,
        l: 75,
      };
      this.contents = [];
    }
    
    drawWindow() {
      this.drawWindowShadow();
      this.drawWindowContent();
      this.drawWindowHeader();
    }  
    
    drawWindowHeader() {
      fill(fillHSL.h, 20, 99);
      strokeWeight(this.strokeWeight);
      stroke(this.stroke.h, this.stroke.s, this.stroke.l);
      rect(this.position.x, this.position.y, this.width, this.headerHeight);
      let headerTitle = new TextLabel(
        {
          text: this.title,
          font: "IBM Plex Mono",
          size: 12,
          fill: {
            h: fillHSL.h,
            s: fillHSL.s,
            l: fillHSL.l,
          },
          x: this.position.x,
          y: this.position.y,
          width: this.width,
          height: this.headerHeight,
          horizAlign: CENTER,
          vertAlign: CENTER,
        }
      ).drawTextLabel();
    }
    
    drawWindowContent() {
      fill(fillHSL.h, 20, 95);
      strokeWeight(this.strokeWeight);
      stroke(this.stroke.h, this.stroke.s, this.stroke.l);
      rect(this.position.x, this.position.y + this.headerHeight, this.width, this.contentHeight);
    }
    
    drawWindowShadow() {
      fill(fillHSL.h, 30, 60, 0.1);
      strokeWeight(0);
      rect(this.position.x + 4, this.position.y + 4, this.width, this.height);
    }
    
    getContainerBounds() {
      return {      
        left: this.position.x,      
        right: this.position.x + this.width,
        top: this.position.y + this.headerHeight,
        bottom: this.position.y + this.headerHeight + this.contentHeight,
      }
    }
  }