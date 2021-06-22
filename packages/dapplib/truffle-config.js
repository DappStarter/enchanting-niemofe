require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss hover enroll forget ten'; 
let testAccounts = [
"0x90bd986d3e4383b8d180124ae7e89356d90e375fc43d11b50e151bd360480c9f",
"0x8ba6cbb80a87cce14a09023bb11c130467c5c359780629b74a1ad43571d34065",
"0xb5c45cd5273eefe694464223ee63d97c00dc726beb12e3b09277db440f368119",
"0x72f79e5790fa2303f309ce6d41b0b819b78cedd703fe23a8765048da1ea98850",
"0x0b106cb69aca797968ee5e16b10a119615c61ec6466ac65288dfd4585a3ca12f",
"0x1252343203c433a5a2d58c3cbd159679096394f06a62f79656f1a1291171a1b9",
"0x3626201db21edbe03bdec1584391cec079982b91b2058d0292f668ea32259adb",
"0xcae42e2b1d24ecbb607e6bae023dec051c9f9a3366aa841795193bc55c222668",
"0x0f5d3a7ec07e985b1e28ceb01d6aa302dfbf05de8652a766649f94b7bb6237af",
"0xadb1b8a03552ed03eb5a228edbd270e6dfded10a88cfa365090287d7968c523f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

