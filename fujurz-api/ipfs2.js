app.post('/upload-metadata', async (req, res) => {
    // Obtenemos los parámetros de la solicitud
    const apiKey = req.body.api_key;
    const appId = req.body.app_id;
    const name = req.body.name;
    const image = req.body.image; // Esto debería ser el hash obtenido de la carga de archivos
    const description = req.body.description;
    const edition = req.body.edition;
    const attributes = req.body.attributes;
    const data = req.body.data;

    // URL de la API para cargar metadatos JSON
    const apiUrl = 'https://ipfsapi-v2.vottun.tech/ipfs/v2/file/metadata';
  
    // Creamos un objeto que contiene los metadatos a cargar
    const metadata = {
      name,
      image,
      description,
      edition,
      attributes,
      data,
    };
  
    try {
      // Realizamos la solicitud POST utilizando node-fetch
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(metadata),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`, 
        },
      });
  
      // Verificamos si la respuesta fue correcta
      if (!response.ok) {
        throw new Error(`Error de la API: ${response.status} - ${response.statusText}`);
      }
  
      // Convertimos la respuesta a formato JSON
      const responseData = await response.json();
      res.json(responseData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  