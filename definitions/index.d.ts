import { Config, Data } from './interface';
export declare class Heatmap {
    config: Config;
    ctx: CanvasRenderingContext2D;
    data: Data[];
    gradientColorScale: (number: any) => string;
    constructor(config: Config);
    setData(data: Data[]): void;
    render(): void;
    colorize(): void;
}
//# sourceMappingURL=index.d.ts.map