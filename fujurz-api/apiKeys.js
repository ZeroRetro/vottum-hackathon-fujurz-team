const fs = require('fs');
const file_path_aux = '../apikeys.txt';

let API_KEY = '';
let APPLICATION_ID = '';

try {
    const data = fs.readFileSync(file_path_aux, 'utf8');
    const lines = data.split('\n');
    API_KEY = lines[0].trim();
    APPLICATION_ID = lines[1].trim();
} catch (err) {
    console.error('Error al leer el archivo:', err);
}

module.exports = { getApiKey: () => API_KEY, getAppId: () => APPLICATION_ID };
