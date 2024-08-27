import '@walletconnect/react-native-compat';
import { createWeb3Modal, defaultConfig, Web3Modal } from '@web3modal/ethers-react-native';

// Get projectId from https://cloud.walletconnect.com
const projectId = 'YOUR_PROJECT_ID'; // Replace with your actual project ID

// Create metadata config
const metadata = {
  name: 'AppKit RN',
  description: 'AppKit RN Example',
  url: 'https://walletconnect.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
  },
};

const config = defaultConfig({ metadata });

// Define your chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com',
};

const polygon = {
  chainId: 137,
  name: 'Polygon',
  currency: 'MATIC',
  explorerUrl: 'https://polygonscan.com',
  rpcUrl: 'https://polygon-rpc.com',
};

const chains = [mainnet, polygon];

// Create modal
createWeb3Modal({
  projectId,
  chains,
  config,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export { Web3Modal };
