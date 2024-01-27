const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY; // Reemplazar con el nombre de tu variable de entorno para el API Key
const APPLICATION_ID = process.env.APPLICATION_ID; // Reemplazar con el nombre de tu variable de entorno para el Application ID

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
    'x-application-vkn': APPLICATION_ID
};

exports.deployContract = async (req, res) => {
    // Desde el frontend se debe enviar en el cuerpo de la petición:
    // name (string): Nombre del contrato inteligente.
    // symbol (string): Símbolo del contrato inteligente.
    // network (int): ID de la cadena de la red donde se desplegará el contrato.
    // gasLimit (int, opcional): Máximo de gas que se puede consumir al desplegar.
    // alias (string, opcional): Nombre asignado a este contrato en la plataforma Vottun.
    try {
        const response = await fetch('https://api.vottun.tech/erc/v1/erc721/deploy', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            throw new Error('Error al desplegar el contrato');
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(503).send(error.message);
    }
};

exports.mintNFT = async (req, res) => {
    // Datos requeridos desde el frontend:
    // recipientAddress (string): Dirección que recibirá los royalties de ventas del NFT.
    // tokenId (int): ID del NFT que será acuñado.
    // ipfsUri (string): URI que apunta a los metadatos del NFT en formato JSON.
    // ipfsHash (string): Hash IPFS de los metadatos del NFT.
    // network (int): ID de la cadena de la red donde reside el contrato.
    // contractAddress (string): Dirección del contrato inteligente.
    // royaltyPercentage (int, opcional): Porcentaje de royalties por cada venta.
    // gas (int, opcional): Cantidad de gas para la transacción.
    try {
        const response = await fetch('https://api.vottun.tech/erc/v1/erc721/mint', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            throw new Error('Error al acuñar NFT');
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(503).send(error.message);
    }
};

exports.transferNFT = async (req, res) => {
    // Datos requeridos desde el frontend:
    // contractAddress (string): Dirección del contrato inteligente.
    // network (int): ID de la cadena de la red donde reside el contrato.
    // id (int): ID del NFT que será transferido.
    // from (string): Dirección que originalmente posee los NFTs.
    // to (string): Dirección a la que se transferirá el NFT.
    try {
        const response = await fetch('https://api.vottun.tech/erc/v1/erc721/transfer', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            throw new Error('Error al transferir NFT');
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(503).send(error.message);
    }
};
