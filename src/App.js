import './App.css';
import { Container, Grid, Image, Item, Button } from "semantic-ui-react";
import { useState } from "react";
import imageCompression from "browser-image-compression";
import TextField from '@material-ui/core/TextField';
import Header from "./Header"
import upload from './upload.png';
import download from './download.png';
import Footer from './footer';

function App() {
  const [origImage, setOrigImage] = useState("");
  const [origImageFile, setorigImageFile] = useState("");
  const [compressImage, setcompressImage] = useState("");
  const [filename, setfilename] = useState("");
  const [value, setValue] = useState(20/1024);


  const handle = (e) => {
    const imagefile = e.target.files[0];
    setOrigImage(imagefile);
    setorigImageFile(URL.createObjectURL(imagefile));
    setfilename(imagefile.name);
  };

  const handleCompressImage = (e) => {
    e.preventDefault();

    const options = {
      maxSizeMB: value,
      maxWidthOrHeight: 500,
      useWebWorker: true,
    };
    let output;
    imageCompression(origImage, options).then((x) => {
      output = x;
      const downloadLink = URL.createObjectURL(output);
      setcompressImage(downloadLink);
    })
  }
  function valueChanged(evt) {
    const kbSize = evt.target.value / 1024;
    setValue(kbSize);
  }

  return (
    <div className='App'>
      <div id='Desktop' className="Desktop">
        <Header />
        <Container className="maincon" >
          <Grid stackable columns={1}>
            <h3>{""}</h3>
            <Grid.Row centered>
              <div style={{ display: "flex", marginTop: '1.5%' }}><TextField defaultValue="20" id="outlined-basic" onChange={valueChanged} type='number' size="small" label="Compression Size in KB" variant="outlined" /></div>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={6}>
                <Item  >
                  <h3 className="head-title">Original Image</h3>
                  <Container className="imagecontainer"  >
                    {origImageFile ? (
                      <Image src={origImageFile} alt='upload image' />
                    ) : (
                      <Image src={upload} alt='upload image' />
                    )}
                  </Container>
                  {origImageFile && <div class="text">{filename}</div>}
                  <div className="compress">
                    <label class="custom-file-upload " >
                      Custom Upload
                      <input onChange={(e) => handle(e)}
                        type="file" accept="image/*"
                      />
                    </label>
                  </div>
                </Item>
              </Grid.Column>
              <Grid.Column className="compress" width={4}>
                <div style={{height:"80px",width:"auto"}}></div>
                <h2></h2>
                {origImageFile && <Button style={{background:"#1F76F9"}} primary onClick={(e) => handleCompressImage(e)} > Compress Image </Button>}
                
              </Grid.Column>
              <Grid.Column width={6}>
                <Item><h3 className="head-title">Compressed Image</h3>
                  <Container className="imagecontainer" >
                    {compressImage ? (
                      <Image src={compressImage} alt='download image' />
                    ) : (
                      <Image src={download} alt='download image' />
                    )}
                  </Container>
                  {compressImage && <div class="text">{filename}</div>}
                  <div className="compress">
                    {compressImage &&
                      <a className='custom-file-upload' style={{ color: 'white' }} href={compressImage} download={filename} >
                        Download Image
                      </a>
                    }
                  </div>
                </Item>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
      <div style={{height:"80px",width:"auto"}} ></div>
      <div >
        <h2 className="highlight" >How to compress images?</h2>
        <ul className="rules">
        <li>Click Upload button and select the file to be compressed.<span style={{fontStyle:"italic",color:"#1F76F9"}} >(JPG, JPEG, PNG, GIF, WEBP)</span></li>
        <li>Enter the size to be compressed in Kb in the input box. By default the value is 20Kb.</li>
        <li>Once the required size is entered click Compress button.</li>
        <li>The compressed image is shown in the compressed image container. Click the download button below to download it.</li>
        <li style={{fontStyle:"italic",color:"#1F76F9"}} >We won't store any images that you upload/compress in our website</li>
        </ul>
      </div>
    
      {/* <div class="ui leaderboard test ad" data-text="Leaderboard" style={{align:'center'}}></div> */}
      <Footer />
    </div>
  );
}
export default App;
