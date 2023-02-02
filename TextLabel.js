class TextLabel {
    constructor(config) {
        this.text = config.text;
        this.font = config.font;
        this.size = config.size;
        this.fill = config.fill;
        this.position = createVector(config.x, config.y);
        this.width = config.width;
        this.height = config.height;
        this.horizAlign = config.horizAlign;
        this.vertAlign = config.vertAlign;
    }

    drawTextLabel(buffer) {
        buffer.textFont(this.font);    
        buffer.strokeWeight(0);
        buffer.textSize(this.size);
        buffer.fill(this.fill.h, this.fill.s, this.fill.l);
        buffer.textAlign(this.horizAlign, this.vertAlign);
        buffer.text(this.text, this.position.x, this.position.y, this.width, this.height);
    }
}