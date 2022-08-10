// Burn Js

async function allowBurn() {
  try {
    $(".allow-burning").hide();
    $(".allowing-burning").show();
    let result = await NFTNYCContract.methods.setApprovalForAll(burnContractAddress, true).send({from: currentAccount});
    console.log(result);
    $(".allowing-burning").hide();
    $('.burn-cards').removeAttr("disabled");
    burnIsAllowed = true;
  }
  catch(error){
    console.log("CAN'T ALLOW");
    console.log(error);
  }
}

async function burn() {
  try {
    let mintAddress = currentAccount;
    if ($(".eth-address").val() !== ''){
      mintAddress = $(".eth-address").val();
    }
    $(".burn-cards").hide();
    $(".burning-cards").show();
    console.log(mintAddress);
    let result = await BurnContract.methods.burn(mintAddress, selectedCards).send({from: currentAccount});
    console.log(result);
    $(".burn-cards").show();
    $(".burning-cards").hide();

    if (result.status) {
      console.log("burning ok");

      hideSelectedCard();
      $(".alert.burn-ok").show();
      setTimeout(function () {
        $(".alert.burn-ok").hide();
      }, 3000);
    } else {
      console.log("burn error");

      $(".alert.burn-ko").show();
      setTimeout(function () {
        $(".alert.burn-ko").hide();
      }, 3000);
    }

    if (mintAddress == currentAccount) {
      updateMintPasses();
      burnModal.show();
    } else {
      // show Modal;
    }
  }
  catch(error){
    console.log("CAN'T BURN TOKEN");
    console.log(error);
  }
}

function hideSelectedCard() {
  $(".card.selected").hide();

  for(let i = 0; i < selectedCards.length; i++){
    userCards.hpc_cards = removeFromArray(selectedCards[i], userCards.hpc_cards);
    userCards.swagbox_cards = removeFromArray(selectedCards[i], userCards.swagbox_cards);
  }
  $('.hpccards-list .number').html(userCards.hpc_cards.length);
  $('.swagbox-list .number').html(userCards.swagbox_cards.length);
  
  $(".card.selected").hide();

  if (userCards.swagbox_cards.length == 0) {
    $(".swagbox-list").hide();
  }

  selectedCards = [];
  $('.card-selected').html(selectedCards.length);
}

async function updateMintPasses() {
  checkActiveSlots();
}