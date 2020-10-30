<template>
  <div id="welcome">
    <br>
    <br>
    <h1>Welcome !!!</h1> 
    <input type="file" @change="selectFile">
    <button @click="sendImage">Send Image</button>
    <img v-if="refresh" id="test" src="http://localhost:8000/storage/hi.png" alt="" height="400" width="400">
    <button @click="recognize">extract</button>
  </div>
</template>

<script>
import axios from 'axios'
import image from "./assets/testocr.png"
import { createWorker, PSM, OEM } from 'tesseract.js';
const worker = createWorker({
  logger: m => console.log(m),
});

export default {
   data(){
     return {
       refresh : true,
       photo: null,
       textextract : ''
     }  
   },
   methods : {
     recognize: async () => {
      const img = document.getElementById('test');
      img.crossOrigin='anonymous';
      console.log(img);
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng', OEM.LSTM_ONLY);
      await worker.setParameters({
        tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
      });
      const { data: { text } } = await worker.recognize(img);
      
      console.log(text);
      
    },

    selectFile(event) {
            // `files` is always an array because the file input may be in multiple mode
            this.photo = event.target.files[0];
        },

        sendImage(){
          const data = new FormData();
          data.append('image', this.photo);
          data.append('name','hi');
          axios.post("/api/file-upload", data).then((res)=>{
            this.$forceUpdate();
            
          });
        }
}
}
</script>

<style scoped>
  #welcome {
    width: 80%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }

  .cta a {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #521751;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: #521751;
  }

  .cta a:hover,
  .cta a:active {
    background-color: #521751;
    color: white;
  }
</style>