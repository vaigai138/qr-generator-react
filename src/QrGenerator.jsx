import { useState } from "react"

export const Qrcode = () => {
  const [img,setImg]=useState("");
  const [loading , setLoading]=useState(false);
  const [qrData, setQrdata]=useState("")
  const [qrSize,setQrsize]=useState("")
  async function generate(){
    setLoading(true);
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    }catch (error){
      console.error("Error generating QR",error);
    }finally{
      setLoading(false);
    }

  }
  function download(){
    fetch(img).then((Response) => Response.blob()).then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "qr-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error)=>{
      console.error("Error in Downloading",error);
    });
  }

  return (
    <div className="app-container">

      <h1>QR CODE GENERATOR</h1>
      {img && <img src={img} alt="" className="qr-image" width="200px"/>}
      {loading && <p>Please wait...</p>}
      <div>
        <label htmlFor="dataInput" className="input-label">Enter the url:</label>
        <input type="text" id="dataInput" placeholder="Ex:https://google.com" onChange={(e)=>setQrdata(e.target.value)}/>

        <label htmlFor="sizeInput" className="input-label">Image size (e.g.,150):</label>
        <input type="text" id="sizeInput" placeholder="Enter Image size" onChange={(e)=>setQrsize(e.target.value)}/>

        <button className="generate-button" onClick={generate} disabled={loading}>Generate Qr Code</button>
        <button className="download-button" onClick={download}>Download Qr Code</button>
        
      </div>
      <p className="footer">Designed by <a href="https://github.com/vaigai138">Vaigai</a></p>
    </div>
  )
}
