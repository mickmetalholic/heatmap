function getCircleImg({ x, y, r }) {
  const circleCanvas = document.createElement('canvas');
  const ctx = circleCanvas.getContext('2d');
  circleCanvas.width = r * 2;
  circleCanvas.height = r * 2;

  const gradient = ctx.createRadialGradient(r, r, 0, r, r, r);
  gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.beginPath();
  ctx.arc(r, r, r, 0, 2 * Math.PI);
  ctx.fillStyle = gradient;
  ctx.fill();

  return circleCanvas;
}

export default getCircleImg;
