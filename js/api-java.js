$(function() {

    const RICKANDMORTY = "https://rickandmortyapi.com/api/character/";

    $(".btn").on("click", rickAndMortyApi);

    function rickAndMortyApi() {
        let id = Math.floor(Math.random() * 826);
        
        fetch(RICKANDMORTY + id)
        .then((Response) => {
          if (!Response.ok) {
            throw new Error(Response.status)
          } else {
            return Response.json()
          }
        })
        
        .then((data) => {
            console.log(data);

            $(".circle-image").addClass('show-circle');
            $(".character-name").text(data.name);
            $(".image").attr("src", data.image);

            $(".location").text(data.location.name);
            $(".gender").text(data.gender);
            $(".status").text(data.status);

    })

    .catch(error => {
      $("main").append($("<div class='error'>").text("something went wrnong : " + error));
     })
     
  }
})