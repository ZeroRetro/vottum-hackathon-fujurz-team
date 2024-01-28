const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');


const API_KEY = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYlhxNkxmbjl1WUxKQk9YcWd1NGpUUlZPT08iLCJ0eXBlIjoiZXJwIiwiaWQiOiIiLCJ1c2VybmFtZSI6Im9zY2FyYW5zb3RlZ3VpQGdtYWlsLmNvbSIsImNpZCI6ImY0ODE2YjBkLTg0NjEtNDQ1MS04ZTA0LWFlODU3NjZmN2EwNiIsInNrdSI6W3siciI6MTEsInMiOjgwMDIsImUiOjB9LHsiciI6MTEsInMiOjgwMTAsImUiOjB9LHsiciI6MTEsInMiOjgsImUiOjB9XSwicHVjIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIn0.Tjh8DP3OonPibxCnruHkRfojFs6Kbpyyhq_IJx80vvYokLQ3_GBPylcRnr40gW1CO7mQx-AgmwZFqYHpr2HQKGKIcNlUIlmL3jAM6pVUOEZVoOPQqob_yTGj16MDGSTaNA9-dAe1qIsYdXYW2RfujumjiuQoDABI6RcCmI2v5Hz9WUsfGjx4nVEdF8C2uC4Nns1P6-aMydPbYM4il0JxXkREseGsDrcwTlsMDyafEShdtAkfG6ERI3ifZMXrq3qcSD3kz598k39-81nRivPTzNRQCveN14Q-umFlkcJ2WbF77AkhkOqsajk9JTQEL3JATbxH2S4zqRK-aStiAvLfM6_4R0DY0_VLebgVa7eOjQS4SOVMqzaGCcXsg8oG87NbnnFgV0IYlNkJLboCLqunZrlZJDFSNNEpVAjpefjJ0M5NGEgXeYVI7L6PYeeNSH6H5OXJWkW1AiuUS2f4IQvLtgYUmKPAdqswa9QozIzll7idVlIop8kWrZk1cgUQBF3sEPVHnjYBiT6vydRp_UHfYgrxxWSVnXHOr0qSX8gN8UH4T7EGVlkg2E0by_wrxaDeeJBxY0MR03dUwUV_jophVBlbJwAFlAqCjD4u3WLJpdTkdMX_9WTVUg6iDMkn4NpGJNNYOse1xCaCyVs6UMOxT5ddFjDSNmWetPHotnFbi_w';
const APPLICATION_ID = 'lVgAtK4hy_bzsvJ3Kn1NBRz2YSMkrkSq9kgUVYvZt5rNrknNHeVVv6FVBb5AbwiH';

const headers = {
    'Authorization': `Bearer ${API_KEY}`,
    'x-application-vkn': APPLICATION_ID
};

exports.upload = async (req, res) => {

    const apiUrl = 'https://ipfsapi-v2.vottun.tech/ipfs/v2/file/upload';

    // multer agrega el archivo subido a req.file y los campos de texto a req.body
    const { filename } = req.body; // El nombre del archivo que proporcionas en el formulario
    const file = req.file; // El archivo subido

    // Verifica que se proporcionen los datos necesarios
    if (!filename || !file) {
        return res.status(400).json({ error: 'Falta el nombre del archivo o el archivo' });
    }

    const requestData = new FormData();
    requestData.append('filename', filename);
    requestData.append('file', fs.createReadStream(file.path)); // file.path contiene la ruta del archivo subido

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: requestData,
            headers: headers
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
            headers: headers
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
