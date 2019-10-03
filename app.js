let input = 3;

function getDogImages() {
  input = document.getElementById("numOfDogs").value;
  fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson))
    .catch(error => alert(`something went wrong`));
}

function displayImages(responseJson) {
  input = document.getElementById("numOfDogs").value;
  console.log(responseJson);
  for (let i = 0; i < input && i < 50; i++) {
    $("#photos").append(`<img src="${responseJson.message[i]}">`);
  }
}

function watchForm() {
  $(".button").click(function() {
    getDogImages();
  });
}

$(function() {
  watchForm();
});
