const express = require('express');
const router = express.Router();
const multer = require('multer');

const nftController = require('../controllers/nftController');
const ipfsController = require('../controllers/ipfsController');
const walletController = require('../controllers/walletController');

const upload = multer({ dest: 'uploads/' }); // Esto guardará los archivos en la carpeta 'uploads'

// Rutas para NFT
router.post('/nft/deploy', nftController.deployContract);
router.post('/nft/mint', nftController.mintNFT);
router.post('/nft/transfer', nftController.transferNFT);

// Rutas para IPFS
//router.post('/ipfs/upload', ipfsController.upload);
router.post('/ipfs/upload', upload.single('file'), ipfsController.upload); // 'file' es el nombre del campo en el formulario
router.post('/ipfs/metadata', ipfsController.uploadMetadata);

// Rutas para Wallet
router.post('/wallet/new', walletController.createNewHash);
router.post('/wallet/address', walletController.getCustodiedWalletAddress);

module.exports = router;
