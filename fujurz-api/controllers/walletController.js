const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY; // Reemplazar con el nombre de tu variable de entorno para el API Key
const APPLICATION_ID = process.env.APPLICATION_ID; // Reemplazar con el nombre de tu variable de entorno para el Application ID

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
    'x-application-vkn': APPLICATION_ID
};

exports.createNewHash = async (req, res) => {
    
    // El frontend debe enviar en el cuerpo de la petición:
    // username (string): Email del usuario
    // strategies (array de números): Lista de estrategias para la wallet (ej: [2, 3])
    // callbackUrl (string): URL para el callback tras la creación exitosa del hash
    // fallbackUrl (string): URL a la que redirigir en caso de error
    // cancelUrl (string): URL a la que redirigir si el usuario cancela la operación


    try {
        const response = await fetch('https://api.vottun.tech/cwll/v1/hash/new', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            throw new Error('Error al crear el hash');
        }

        const data = await response.json();
        res.status(201).json(data);
    } catch (error) {
        res.status(503).send(error.message);
    }
};

exports.getCustodiedWalletAddress = async (req, res) => {

    // El frontend debe enviar en los parámetros de la consulta (query):
    // userEmail (string): Email del usuario para obtener la dirección de su wallet


    try {
        const { userEmail } = req.query;
        const response = await fetch(`https://api.vottun.tech/cwll/v1/evm/wallet/custodied/address?userEmail=${encodeURIComponent(userEmail)}`, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            throw new Error('Error al obtener la dirección de la wallet');
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(503).send(error.message);
    }
};
