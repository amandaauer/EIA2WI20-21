namespace Skipiste {
    interface Vektor {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event:Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2D");

        drawBackground();
        drawSun({x: 100, y: 75});
        drawCloud({x: 500, y: 125},{x: 250, y: 75});

    }

    function drawBackground(): void {
        console.log("Background");
    
        let gradient: CanvasGradient = crc2.createLinearGradient (0,0,0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
    

        crc2.fillStyle = gradient;
        crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position: Vektor): void {
        console.log("Sun", _position);
    }
    function drawCloud(_positon: Vektor, _size: Vektor): void {
        console.log("Cloud", _positon, _size);
    }
}