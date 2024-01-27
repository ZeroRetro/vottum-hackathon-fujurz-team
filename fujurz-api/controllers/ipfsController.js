const API_KEY = process.env.API_KEY; // Reemplazar con el nombre de tu variable de entorno para el API Key
const APPLICATION_ID = process.env.APPLICATION_ID; // Reemplazar con el nombre de tu variable de entorno para el Application ID

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
    'x-application-vkn': APPLICATION_ID
};

exports.upload = async (req, res) => {
    const { filename, filePath } = req.body;
    const apiUrl = 'https://ipfsapi-v2.vottun.tech/ipfs/v2/file/upload';

    const requestData = new FormData();
    requestData.append('filename', filename);
    requestData.append('file', fs.createReadStream(filePath));

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: requestData,
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'x-application-vkn': APPLICATION_ID
            },
        });

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
};

exports.uploadMetadata = async (req, res) => {
    // Obtenemos los parámetros de la solicitud
    const { name, image, description, edition, attributes, data } = req.body;
    
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
                'Authorization': `Bearer ${API_KEY}`,
                'x-application-vkn': APPLICATION_ID
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
};
