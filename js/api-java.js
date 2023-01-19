$(function() {

    const RICKANDMORTY = "https://rickandmortyapi.com/api/character/";

    $(".btn").on("click", testingApi);

    function testingApi() {
        let id = Math.floor(Math.random() * 826);
        
        fetch(RICKANDMORTY + id)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            $(".circle-image").addClass('show-circle');
            $(".character-name").text(data.name);
            $(".image").attr("src", data.image);

            $(".location").text(data.location.name);
            $(".gender").text(data.gender);
            $(".status").text(data.status);

    })
  }

})