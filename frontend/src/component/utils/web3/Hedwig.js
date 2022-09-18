const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider("<Provider_URL>");      
const signer = ethers.Wallet.fromMnemonic("<Mnemonic_Phrase>").connect(provider);
const address = "0x6f29019fa0319e71e6152E4AA409e26bdcfFfD61";
const startSessionabi = [
  "function startSession(address to) returns (uint256 id)"
];

export const  startSession = async()=> {
	const contract = new ethers.Contract(address, startSessionabi, signer);
	const tx = await contract.functions.startSession(null);

	const receipt = await tx.wait();
	console.log("receipt", receipt);
}

const sessionsabi = [
    "function sessions(uint256) view returns (uint256 G, address from, address to, uint256 key1, uint256 key2)"
  ];
  

    export const  sessions = async()=> {
      const contract = new ethers.Contract(address, sessionsabi, signer);
      const result = await contract.functions.sessions(null);
  
      console.log("result", result);
  }

  const sessionIDabi = [
    "function sessionID() view returns (uint256 _value)"
  ];
  

    export const  sessionID = async()=> {
      const contract = new ethers.Contract(address, sessionIDabi, signer);
      const result = await contract.functions.sessionID();
  
      console.log("result", result);
  }

  
  const initiateConnectionabi = [
    "function initiateConnection(uint256 _sessionID, uint256 key)"
  ];
  

    export const  initiateConnection = async()=> {
      const contract = new ethers.Contract(address, initiateConnectionabi, signer);
      const tx = await contract.functions.initiateConnection(null,null);
  
      const receipt = await tx.wait();
      console.log("receipt", receipt);
  }

  const getSessionsabi = [
   
    "function getSessions() view returns (uint256[] _sessions)"
  ];
  

    export const  getSessions = async()=> {
      const contract = new ethers.Contract(address, getSessionsabi, signer);
      const result = await contract.functions.getSessions();
  
      console.log("result", result);
  }

  const getKeyabi = [
    "function getKey(uint256 _sessionID, uint256 seed) view returns (uint256 key)"
  ];

    export const  getKey = async()=> {
      const contract = new ethers.Contract(address, getKeyabi, signer);
      const result = await contract.functions.getKey(null,null);
  
      console.log("result", result);
  }

  const connectabi = [
    "function connect(uint256 _sessionID, uint256 seed) view returns (uint256 key)"
  ];
  

    export const  connect = async()=> {
      const contract = new ethers.Contract(address, connectabi, signer);
      const result = await contract.functions.connect(null,null);
  
      console.log("result", result);
  }

  const addressToSessionIDsabi = [
    "function addressToSessionIDs(address, uint256) view returns (uint256)"
  ];
  

  export const  addressToSessionIDs = async()=> {
    const contract = new ethers.Contract(address, addressToSessionIDsabi, signer);
    const result = await contract.functions.addressToSessionIDs(null,null);

    console.log("result", result);
}
