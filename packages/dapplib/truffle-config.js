require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note pave pyramid gesture slight force gesture'; 
let testAccounts = [
"0xb8ee4ecb0cb7e132cf5f5e5111573b866caf4578d3fce99a7fee5e22920072ef",
"0x87ead7c1cbf6fdc9ff28de8c7cbcb0d9b25e0bc43ca0469833ac7556a25a295f",
"0xbbf02d661a4fb8526939aa9051aa7efaf56bb4c854f0b76c8161c05c6c26f661",
"0x2670f0af472f76b02117b883eb76dd7062a8aa123a4d80ffa0e92c68bd667bad",
"0xd588977c3e9aa63615b24ed241f6350ce175253b3052512aee32011ecd129fa6",
"0x939be952b784a331eb1798322c0a1ab625a99493172be807713f06e4e0a746dc",
"0xe1bac59c188aa98a9fe1f4f07be450bd83d97b2af360f2f80c53d6feaf7977de",
"0x90f1cba1b2c6738833cda2bbda20ac51d381975226e75e2bd46c1ecaf60ef745",
"0x7a54c585a419cf01543746dd06658dcecaf35735af2860ea253b2b74a19b854e",
"0xf905df4a6eebd0acb0d12fc79dd9668ec7d364488a08bc167da9045acfc838b7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

