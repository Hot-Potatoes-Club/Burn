/*************************************
 * 
 *     Verify HPC Card Ownership
 * 
 * ***********************************
 * 
 * 1: sign wallet
 * 2: verify cards ownership
 * 3: if ownership, show cards
 * 4: select cards to burn
 * 5: input ethereum address
 * 6: use contract to burn cards & input address with redeemable cards
 * 
 *************************************/

// Polygon Contracts
const NFTNYCABI = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"manager0","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint32","name":"batch","type":"uint32"}],"name":"allowManaged","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"batch","type":"uint32"}],"name":"allowMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"annotations","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"batchId","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"batchLimit","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint32","name":"batch","type":"uint32"}],"name":"batchLimitFromId","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"batchOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_batchId","type":"uint32"}],"name":"batchOwnerFromId","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_batchId","type":"uint32"}],"name":"batchTokenFromId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"batchTokenOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint32","name":"","type":"uint32"}],"name":"batches","outputs":[{"internalType":"uint32","name":"batch","type":"uint32"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"created","type":"string"},{"internalType":"uint64","name":"time","type":"uint64"},{"internalType":"uint32","name":"limit","type":"uint32"},{"internalType":"uint32","name":"minted","type":"uint32"},{"internalType":"address","name":"controller","type":"address"},{"internalType":"bool","name":"manageable","type":"bool"},{"internalType":"bool","name":"mintable","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"canMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"contents","outputs":[{"internalType":"uint32","name":"batch","type":"uint32"},{"internalType":"uint32","name":"sequence","type":"uint32"},{"internalType":"uint32","name":"limit","type":"uint32"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"page","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"link","type":"string"},{"internalType":"string","name":"content","type":"string"},{"internalType":"string","name":"created","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"batch","type":"uint32"}],"name":"denyManaged","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"batch","type":"uint32"}],"name":"denyMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_batchId","type":"uint32"},{"internalType":"uint32","name":"_batchLimit","type":"uint32"},{"internalType":"uint32","name":"_sequence","type":"uint32"}],"name":"generateId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"batch","type":"uint32"}],"name":"getController","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getSequence","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getTokenController","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"isRedeemed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint32","name":"batch","type":"uint32"},{"internalType":"uint32","name":"sequence","type":"uint32"},{"internalType":"uint32","name":"limit","type":"uint32"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"page","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"link","type":"string"},{"internalType":"string","name":"content","type":"string"},{"internalType":"string","name":"created","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint32","name":"batch","type":"uint32"},{"internalType":"uint32","name":"limit","type":"uint32"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"created","type":"string"},{"internalType":"uint64","name":"time","type":"uint64"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"parseId","outputs":[{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"redeemed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"batch","type":"uint32"},{"internalType":"address","name":"controller","type":"address"}],"name":"setController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_id","type":"uint8"},{"internalType":"address","name":"_address","type":"address"}],"name":"setManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const NFTNYCContractAddress = "0xB41660b91C8EBC19fFe345726764D4469a4Ab9F8";
//const userAddress = "0x0864b0ad90599a3BB7d797F2bfccB5c1D53fF01B";
const burnContractABI = [ { "inputs": [ { "internalType": "address", "name": "tokenHolder", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "addHPCClaimCardsToAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "tokenHolder", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "addSwagBoxCardsToAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "mintAddress", "type": "address" }, { "internalType": "uint256[]", "name": "NFTNYCCards", "type": "uint256[]" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "status", "type": "bool" } ], "name": "changeBurnStatus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "string", "name": "message", "type": "string" } ], "name": "Log", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256[]", "name": "message", "type": "uint256[]" } ], "name": "LogArray", "type": "event" }, { "inputs": [], "name": "getAllowedAddresses", "outputs": [ { "internalType": "address[]", "name": "", "type": "address[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "tokenHolder", "type": "address" } ], "name": "getMintableBy", "outputs": [ { "internalType": "uint256", "name": "hpcAllowed", "type": "uint256" }, { "internalType": "uint256", "name": "swagboxAllowed", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ];
const burnContractAddress = "0x4861564e8C04f6e3774266159180D0493633B747";

// User Information
let userAccount = "";
let userCards = {'hpc_cards':[], 'swagbox_cards':[]};
let currentAccount;
let selectedCards = [];

// Check Metamask
if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
} else {
  console.log('metamask not running');
}

// Connect to Polygon/Matic & NFT NYC contract

const web3 = new Web3(window.ethereum)
const NFTNYCContract = new web3.eth.Contract(NFTNYCABI, NFTNYCContractAddress);
const BurnContract = new web3.eth.Contract(burnContractABI, burnContractAddress);

// CHECK NETWORK!

////// Account changed !!
// window.ethereum.on('accountsChanged', function (accounts){
//   selectedAccount = accounts[0];
//   console.log(`Selected account changed to ${selectedAccount}`);
// });

$( ".check-cards" ).click(function() {
  if (typeof window.ethereum !== 'undefined') {
    getAccount();
  } else {
    alert('Please install MetaMask');
  }
});

$( ".connect-account" ).click(function() {
  connectToAccount();
});

$( ".burn-cards" ).click(function() {
  burn();
});

$( ".allow-burning").click(function() {
  allowBurn();
});

$( ".network-indicator").click(function() {
  changeNetwork();
});


function toggleSelection(element) {
  if ($(element).hasClass("selected")) {
    selectedCards = removeFromArray($(element).data("tokenid"), selectedCards)
    console.log(selectedCards);
    $(element).removeClass("selected");
    $(element).find(".burn-it").hide();
    $('.card-selected').html(selectedCards.length);
    if (selectedCards.length == 0) {$('.burn-cards').attr('disabled', 'disabled');;}
  } else {
    if (selectedCards.length == 0) {$('.burn-cards').removeAttr("disabled");}
    selectedCards.push($(element).data("tokenid"));
    console.log(selectedCards);
    $(element).addClass("selected");
    $(element).find(".burn-it").show();
    $('.card-selected').html(selectedCards.length);
  }
}

async function connectToAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  currentAccount = accounts[0];
  if (window.ethereum.networkVersion != '137') {
    displayWrongNetwork();
  } else {
    displayAccount();
  }
}

async function displayWrongNetwork() {
  $(".connect-account").hide();
  $(".connected-account .address").html(currentAccount);
  $(".connected-account").show();
  $(".off-indicator").show();
  $(".on-indicator").hide();
  $(".network.polygon").hide();
  if (window.ethereum.networkVersion == '1') {
    $(".network.eth").show();
  }
}

async function changeNetwork() {
  console.log("test");
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x89' }],
    });
    displayAccount();
  } catch(error){
    console.log("CAN'T CHANGE NETWORK");
    console.log(error.response);
  }
}

async function displayAccount() {
  checkActiveSlots();
  $(".connect-account").hide();
  $(".connected-account .address").html(currentAccount);
  $(".connected-account").show();
  $(".on-indicator").show();
  $(".off-indicator").hide();
  $(".network.eth").hide();
  $(".network.polygon").show();
  $('.check-cards').removeAttr("disabled");
  $('.section-content.not-connected').hide();
  $('.section-content.connected').show();
}

async function checkActiveSlots() {
  let activeSlots = await getActiveSlots();

  if (activeSlots.hpcAllowed > 0 || activeSlots.swagboxAllowed > 0) {
    $(".no-mints").hide();
    $(".allowed-mints").show();

    if (activeSlots.hpcAllowed > 0 ) {
      $(".hpcboxes .no-mint").removeClass("no-mint");
      $(".hpcboxes .amount").html("x"+activeSlots.hpcAllowed);
    }

    if (activeSlots.swagboxAllowed > 0 ) {
      $(".swagnyc .no-mint").removeClass("no-mint");
      $(".swagnyc .amount").html("x"+activeSlots.swagboxAllowed);
    }
  }
  console.log(activeSlots);
}

async function getAccount() {
  const showAccount = document.querySelector('.showAccount');
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  console.log(account);
  if (account) {
    getCardsFromAddress(account);
  }
}

async function getCardsFromAddress(address) {
  document.querySelector('.check-cards').style.display = "none";
  document.querySelector('.checking-cards').style.display = "block";
  // 1- Get Cards Number
  let cardsNb = await getNumberOfTokensFromAddress(address);

  // 2 - Get the Cards
  userCards = {'hpc_cards':[], 'swagbox_cards':[]};
  let cardsBatchId = [];

  if (cardsNb > 0) {
    
    for(let i = 0; i < cardsNb; i++){
      let tokenId = await getTokenOfOwnerByIndex(address, i);
      let batchId = await getBatchId(tokenId);
      cardsBatchId.push(batchId);
      if (batchId === "204384") {
        userCards.hpc_cards.push(tokenId);
      } else if (batchId === "5201699") {
        userCards.swagbox_cards.push(tokenId);
      }
    }
    console.log(userCards);
    displayCards(userCards);
  }
}

async function displayCards(userCards) {

  if (userCards.hpc_cards.length > 0){
    let hpccards = document.querySelector('.hpccards-list');
    hpccards.style.display = "block";
    hpccards.querySelector('.number').innerHTML = userCards.hpc_cards.length;
    let hpclist = hpccards.querySelector('.list');
    hpclist.innerHTML ="";
    for (let i = 0; i < userCards.hpc_cards.length; i++) {
      let currentCard = userCards.hpc_cards[i];
      hpclist.innerHTML += '<div class="card cardid-'+currentCard+'" data-tokenid="'+currentCard+'"><img src="img/hpcclaim.png"><div class="burn-it">🔥</div><div class="token-id"><span class="badge bg-secondary">ID</span> '+currentCard+'</div></div>';
    }
  }
  
  if (userCards.swagbox_cards.length > 0){
    let swagboxcards = document.querySelector('.swagbox-list');
    swagboxcards.style.display = "block";
    swagboxcards.querySelector('.number').innerHTML = userCards.swagbox_cards.length;
    let swagboxlist = swagboxcards.querySelector('.list');
    swagboxlist.innerHTML ="";
    for (let i = 0; i < userCards.swagbox_cards.length; i++) {
      let currentCard = userCards.swagbox_cards[i];
      swagboxlist.innerHTML += '<div class="card cardid-'+currentCard+'" data-tokenid="'+currentCard+'"><img src="img/swagbox.png"><div class="burn-it">🔥</div><div class="token-id"><span class="badge bg-secondary">ID</span> '+currentCard+'</div></div>';
    }
  }

  // 
  $('.check-cards').show();
  $('.checking-cards').hide();
  $('.burn-box').show();

  selectedCards = [];
  $('.card-selected').html(selectedCards.length);

  // Check Approval
  let approvalStatus = await checkApprovalStatus();
  if (approvalStatus) {
    $(".allow-burning").hide();
  }

  $('.eth-address').attr('placeholder',currentAccount);

  $( ".card" ).click(function() {
    toggleSelection(this);
  });
}

async function checkApprovalStatus() {
  try {
    let isApproved = await NFTNYCContract.methods.isApprovedForAll(currentAccount, burnContractAddress).call();
    return isApproved;
  }
  catch(error){
    console.log("CAN'T CHECK APPROVAL");
    console.log(error.response);
  }
}

async function getActiveSlots() {
  try {
    let activeSlots = await BurnContract.methods.getMintableBy(currentAccount).call();
    return activeSlots;
  }
  catch(error){
    console.log("CAN'T GET ACTIVE SLOTS OF USER");
    console.log(error.response);
  }
}

async function getBatchId(tokenId) {
  try {
    let batchId = await NFTNYCContract.methods.batchId(tokenId).call();
    return batchId;
  }
  catch(error){
    console.log("CAN'T GET ID OF USER CARD AT INDEX");
    console.log(error.response);
  }
}

async function getTokenOfOwnerByIndex(address, index) {
  try {
    let tokenId = await NFTNYCContract.methods.tokenOfOwnerByIndex(address, index).call();
    return tokenId;
  }
  catch(error){
    console.log("CAN'T GET ID OF USER CARD AT INDEX");
    console.log(error.response);
  }
}

async function getNumberOfTokensFromAddress(address) {
  try {
    let cardsNb = await NFTNYCContract.methods.balanceOf(address).call();
    return cardsNb;
  }
  catch(error){
    console.log("CAN'T GET TOKENS OF ADDRESS");
    console.log(error.response);
  }
}

function removeFromArray(element, array) {    
  for( var i = 0; i < array.length; i++){ 
      if ( array[i] === element) { 
        array.splice(i, 1); 
      }
  }
  return array;
}