namespace Aufgabe8 {
    interface Vektor {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event:Event): void {
        let canvas: HTMLCanvasElement null = document.querySelector("canvas");
        if (!canvas)
        return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2D");

        
    }
}