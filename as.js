class PlaceholderBoxPainter {
  static get inputProperties() {
    return ["--line-color"];
  }

  paint(ctx, size, properties) {    
    let color = properties.get("--line-color");
    ctx.beginPath();
    ctx.shadowBlur = 12;
    ctx.shadowColor = color;
    ctx.shadowOffsetY = 6;      
    ctx.moveTo(987, size.height);
    ctx.lineTo(-10, size.height);
    ctx.strokeStyle = color;
    ctx.lineWidth = "3";
    ctx.stroke();
    ctx.rotate(180 * Math.PI);
  }
}

registerPaint("placeholder-box", PlaceholderBoxPainter);
