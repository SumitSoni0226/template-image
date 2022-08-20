import './components.css';
// import image from "../001.jpg"
import { useRef, useEffect, useState } from 'react'

function Question({ id, data }) {
    console.log(id);
    // const [canvas, setCanvas] = useState(null);
    const shouldLoad = useRef(true);
    const canvasRef = useRef();

    // useEffect(() => {
    //     if (shouldLoad.current === true) {
    //         shouldLoad.current = false;
    //         console.log("use effect 2")
    //         storingCanvas(document.getElementById(id), id);
    //     }
    // }, [])

    useEffect(() => {
        // creatingContext(document.getElementById(id), id);
        if (shouldLoad.current === true && canvasRef.current) {
            shouldLoad.current = false;
            creatingContext(canvasRef.current, id);
        }
    }, [canvasRef.current])


    function creatingContext(canvas, id) {
        console.log(`Creating context for ID: ${id}`)
        const ctx = canvas.getContext('2d')
        // var image = document.getElementById("scream");
        // console.log(image)
        // ctx.drawImage(image, 0, 0, 500, 500);
        var imageObj = new Image();

        imageObj.onload = function () {
            ctx.drawImage(this, 0, 0, 500, 500);
            ctx.font = "50px Roboto";
            ctx.fillStyle = "white";
            ctx.fillText(data, 10, 50);
        }
        imageObj.src = "./001.jpg"
        console.log(imageObj)
        // ctx.font = "50px Roboto";
        // ctx.fillStyle = "white";
        // ctx.fillText(id, 10, 50);
        console.log(ctx)
    }

    // {"id":1, "data": "hello world"}
    function downloadFile(id) {
        console.log(`Downloading Question: ${id}`)
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = canvasRef.current.toDataURL("image/jpeg");
        // console.log(a)
        a.download = `canvas-image${id}.jpeg`;
        a.click();
        document.body.removeChild(a);
    }

    // function storingCanvas(canvas, id) {
    //     console.log(`Storing Canvas in useState for ID: ${id}`)
    //     console.log(canvas)
    //     setCanvas(canvas);
    // }
    return (
        <div className="Question">
            {/* <img id="scream" width="500" height="500"
                src={image} alt="The Scream" style={{ display: "block" }} /> */}
            <p>Canvas:</p>
            {/* <canvas id={id} ref={canvasRef} width="500" height="500">
            </canvas> */}
            <canvas id={id} ref={canvasRef} width="500" height="500">
            </canvas>
            <br></br>
            <button id='downloadbtn' onClick={() => { downloadFile(id) }}>Download</button>
        </div>
    );
}

export default Question;

