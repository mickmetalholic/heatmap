import { IData } from './interface';

function getCircleImg(ctx: CanvasRenderingContext2D, data: IData[]) {
  const circleTpl: HTMLCanvasElement = drawCircle(20);
  data.forEach((datum: IData) => {
    ctx.drawImage(circleTpl, datum.x, datum.y);
  });
}

function drawCircle(r: number) {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
  canvas.width = 2 * r;
  canvas.height = 2 * r;

  const gradient: CanvasGradient = ctx.createRadialGradient(r, r, 0, r, r, r);
  gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.beginPath();
  ctx.arc(r, r, r, 0, 2 * Math.PI);
  ctx.fillStyle = gradient;
  ctx.fill();

  return canvas;
}

export default getCircleImg;
