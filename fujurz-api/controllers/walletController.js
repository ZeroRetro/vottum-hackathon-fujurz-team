const fetch = require('node-fetch');

//const { getApiKey, getAppId } = require('../apiKeys');
const API_KEY = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYlhxNkxmbjl1WUxKQk9YcWd1NGpUUlZPT08iLCJ0eXBlIjoiZXJwIiwiaWQiOiIiLCJ1c2VybmFtZSI6Im9zY2FyYW5zb3RlZ3VpQGdtYWlsLmNvbSIsImNpZCI6ImY0ODE2YjBkLTg0NjEtNDQ1MS04ZTA0LWFlODU3NjZmN2EwNiIsInNrdSI6W3siciI6MTEsInMiOjgwMDIsImUiOjB9LHsiciI6MTEsInMiOjgwMTAsImUiOjB9LHsiciI6MTEsInMiOjgsImUiOjB9XSwicHVjIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIn0.Tjh8DP3OonPibxCnruHkRfojFs6Kbpyyhq_IJx80vvYokLQ3_GBPylcRnr40gW1CO7mQx-AgmwZFqYHpr2HQKGKIcNlUIlmL3jAM6pVUOEZVoOPQqob_yTGj16MDGSTaNA9-dAe1qIsYdXYW2RfujumjiuQoDABI6RcCmI2v5Hz9WUsfGjx4nVEdF8C2uC4Nns1P6-aMydPbYM4il0JxXkREseGsDrcwTlsMDyafEShdtAkfG6ERI3ifZMXrq3qcSD3kz598k39-81nRivPTzNRQCveN14Q-umFlkcJ2WbF77AkhkOqsajk9JTQEL3JATbxH2S4zqRK-aStiAvLfM6_4R0DY0_VLebgVa7eOjQS4SOVMqzaGCcXsg8oG87NbnnFgV0IYlNkJLboCLqunZrlZJDFSNNEpVAjpefjJ0M5NGEgXeYVI7L6PYeeNSH6H5OXJWkW1AiuUS2f4IQvLtgYUmKPAdqswa9QozIzll7idVlIop8kWrZk1cgUQBF3sEPVHnjYBiT6vydRp_UHfYgrxxWSVnXHOr0qSX8gN8UH4T7EGVlkg2E0by_wrxaDeeJBxY0MR03dUwUV_jophVBlbJwAFlAqCjD4u3WLJpdTkdMX_9WTVUg6iDMkn4NpGJNNYOse1xCaCyVs6UMOxT5ddFjDSNmWetPHotnFbi_w';
const APPLICATION_ID = 'lVgAtK4hy_bzsvJ3Kn1NBRz2YSMkrkSq9kgUVYvZt5rNrknNHeVVv6FVBb5AbwiH';

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

    console.log(req.body);
    try {
        const { userEmail } = req.body;
        const response = await fetch(`https://api.vottun.tech/cwll/v1/evm/wallet/custodied/address`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ userEmail: userEmail }) 
        });
        
        if (!response.ok) {
            //console.log(response)
            throw new Error('Error al obtener la dirección de la wallet');
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.log('error', error)
        res.status(503).send(error.message);
    }
};
