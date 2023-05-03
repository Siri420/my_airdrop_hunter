import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "2369EK9D4M8hFlrgfk0hPfCoRfji8i3C",
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);