  var $promptButton = $('#promptButton');

  function promptMe() {
    prompt1 = prompt("Let's have a number!")
    switch(prompt1) {
      case null:
      return;
    };
    switch(isNaN(parseInt(prompt1))) {
      case true:
      promptMe();
      break;
      default:
      document.getElementById("promptOutput").innerHTML = prompt1;
      break;
    };
  }

  $promptButton.on('click', promptMe);


