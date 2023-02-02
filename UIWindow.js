class UIWindow {
    constructor(config) {
      this.shadowOffset = 4;
      this.position = config.position;
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
      this.image = createGraphics(this.width, this.height);

      this.image.colorMode(HSL, 360, 100, 100, 1);
      this.makeWindowShadow();
      this.makeWindowContent();
      this.makeWindowHeader();
    }
    
    drawWindow() {
      image(this.image, this.position.x, this.position.y);
    }
    
    makeWindowHeader() {
      this.image.fill(fillHSL.h, 20, 99);
      this.image.strokeWeight(this.strokeWeight);
      this.image.stroke(this.stroke.h, this.stroke.s, this.stroke.l);
      this.image.rect(0, 0, this.width - this.shadowOffset, this.headerHeight);
      new TextLabel(
        {
          text: this.title,
          font: '"IBM Plex Mono",Arial,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
          size: 12,
          fill: {
            h: fillHSL.h,
            s: fillHSL.s,
            l: fillHSL.l,
          },
          x: 0,
          y: 0,
          width: this.width,
          height: this.headerHeight,
          horizAlign: CENTER,
          vertAlign: CENTER,
        }
      ).drawTextLabel(this.image);
    }
    
    makeWindowContent() {
      this.image.fill(fillHSL.h, 20, 95);
      this.image.strokeWeight(this.strokeWeight);
      this.image.stroke(this.stroke.h, this.stroke.s, this.stroke.l);
      this.image.rect(0, 0 + this.headerHeight, this.width - this.shadowOffset, this.contentHeight - this.shadowOffset);
    }
    
    makeWindowShadow() {
      this.image.fill(fillHSL.h, 30, 60, 0.1);
      this.image.strokeWeight(0);
      this.image.rect(this.shadowOffset, this.shadowOffset, this.width, this.height);
    }
    
    getContainerBounds() {
      return {      
        left: this.position.x,      
        right: this.position.x + this.width - this.shadowOffset,
        top: this.position.y + this.headerHeight,
        bottom: this.position.y + this.headerHeight + this.contentHeight - this.shadowOffset,
      }
    }
  }