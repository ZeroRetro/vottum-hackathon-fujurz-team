const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000; 

app.use(express.json());

app.post('/llamar-script', async (req, res) => {
  const apiKey = req.body.api_key;
  const appId = req.body.app_id;
  const filename = req.body.filename;
  const filePath = req.body.path;

  const apiUrl = 'https://api.vottun.com/ipfs/upload';

  app.post('/upload-file', async (req, res) => {
    // Obtenemos los parámetros de la solicitud
    const apiKey = req.body.api_key;
    const appId = req.body.app_id;
    const filename = req.body.filename;
    const filePath = req.body.path;
  
    // URL de la API para cargar archivos
    const apiUrl = 'https://ipfsapi-v2.vottun.tech/ipfs/v2/file/upload';
  
    // Creamos un objeto FormData para enviar datos de formulario
    const requestData = new FormData();
    requestData.append('filename', filename);
    requestData.append('file', fs.createReadStream(filePath));
  
    try {
      // Realizamos la solicitud POST utilizando node-fetch
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: requestData,
        headers: {
          'Authorization': `Bearer ${apiKey}`, 
        },
      });
  
      // Verificamos si la respuesta fue correcta
      if (!response.ok) {
        throw new Error(`Error de la API: ${response.status} - ${response.statusText}`);
      }

      // Convertimos la respuesta a formato JSON
      const responseData = await response.json();
      const fileHash = responseData.hash;
  
      // Ahora usamos fileHash para cargar metadatos
      res.json({ fileHash });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
})
