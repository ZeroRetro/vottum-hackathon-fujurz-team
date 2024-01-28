const fetch = require('node-fetch');

// const { getApiKey, getAppId } = require('../apiKeys');

// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${getApiKey()}`,
//     'x-application-vkn': getAppId()
// };


const API_KEY = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYlhxNkxmbjl1WUxKQk9YcWd1NGpUUlZPT08iLCJ0eXBlIjoiZXJwIiwiaWQiOiIiLCJ1c2VybmFtZSI6Im9zY2FyYW5zb3RlZ3VpQGdtYWlsLmNvbSIsImNpZCI6ImY0ODE2YjBkLTg0NjEtNDQ1MS04ZTA0LWFlODU3NjZmN2EwNiIsInNrdSI6W3siciI6MTEsInMiOjgwMDIsImUiOjB9LHsiciI6MTEsInMiOjgwMTAsImUiOjB9LHsiciI6MTEsInMiOjgsImUiOjB9XSwicHVjIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIn0.Tjh8DP3OonPibxCnruHkRfojFs6Kbpyyhq_IJx80vvYokLQ3_GBPylcRnr40gW1CO7mQx-AgmwZFqYHpr2HQKGKIcNlUIlmL3jAM6pVUOEZVoOPQqob_yTGj16MDGSTaNA9-dAe1qIsYdXYW2RfujumjiuQoDABI6RcCmI2v5Hz9WUsfGjx4nVEdF8C2uC4Nns1P6-aMydPbYM4il0JxXkREseGsDrcwTlsMDyafEShdtAkfG6ERI3ifZMXrq3qcSD3kz598k39-81nRivPTzNRQCveN14Q-umFlkcJ2WbF77AkhkOqsajk9JTQEL3JATbxH2S4zqRK-aStiAvLfM6_4R0DY0_VLebgVa7eOjQS4SOVMqzaGCcXsg8oG87NbnnFgV0IYlNkJLboCLqunZrlZJDFSNNEpVAjpefjJ0M5NGEgXeYVI7L6PYeeNSH6H5OXJWkW1AiuUS2f4IQvLtgYUmKPAdqswa9QozIzll7idVlIop8kWrZk1cgUQBF3sEPVHnjYBiT6vydRp_UHfYgrxxWSVnXHOr0qSX8gN8UH4T7EGVlkg2E0by_wrxaDeeJBxY0MR03dUwUV_jophVBlbJwAFlAqCjD4u3WLJpdTkdMX_9WTVUg6iDMkn4NpGJNNYOse1xCaCyVs6UMOxT5ddFjDSNmWetPHotnFbi_w';
const APPLICATION_ID = 'lVgAtK4hy_bzsvJ3Kn1NBRz2YSMkrkSq9kgUVYvZt5rNrknNHeVVv6FVBb5AbwiH';

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
