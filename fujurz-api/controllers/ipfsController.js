const API_KEY = process.env.API_KEY; // Reemplazar con el nombre de tu variable de entorno para el API Key
const APPLICATION_ID = process.env.APPLICATION_ID; // Reemplazar con el nombre de tu variable de entorno para el Application ID

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
    'x-application-vkn': APPLICATION_ID
};

exports.upload = async (req, res) => {
    // Lógica para subir un archivo a IPFS




};

exports.uploadMetadata = async (req, res) => {
    // Lógica para subir metadata a IPFS





};
