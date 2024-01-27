const express = require('express');
const router = express.Router();
const nftController = require('../controllers/nftController');
const ipfsController = require('../controllers/ipfsController');
const walletController = require('../controllers/walletController');

// Rutas para NFT
router.post('/nft/deploy', nftController.deploy);
router.post('/nft/mint', nftController.mint);
router.post('/nft/transfer', nftController.transfer);

// Rutas para IPFS
router.post('/ipfs/upload', ipfsController.upload);
router.post('/ipfs/metadata', ipfsController.uploadMetadata);

// Rutas para Wallet
router.post('/wallet/new', walletController.createWallet);
router.get('/wallet/address', walletController.getWalletAddress);

module.exports = router;
