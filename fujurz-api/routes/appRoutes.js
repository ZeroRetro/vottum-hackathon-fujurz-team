const express = require('express');
const router = express.Router();
const nftController = require('../controllers/nftController');
const ipfsController = require('../controllers/ipfsController');
const walletController = require('../controllers/walletController');

// Rutas para NFT
router.post('/nft/deploy', nftController.deployContract);
router.post('/nft/mint', nftController.mintNFT);
router.post('/nft/transfer', nftController.transferNFT);

// Rutas para IPFS
router.post('/ipfs/upload', ipfsController.upload);
router.post('/ipfs/metadata', ipfsController.uploadMetadata);

// Rutas para Wallet
router.post('/wallet/new', walletController.createNewHash);
router.get('/wallet/address', walletController.getCustodiedWalletAddress);

module.exports = router;
