gapi.load("client", () => {
  gapi.client
    .init({
      apiKey: "AIzaSyAYzB2t_8K2LODUsjA1WzFwZR6Dof3ljfw",
      discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest",
      ],
    })
    .then(
      () => {
        const videoIds = [
          "njuAEJkIkfU",
          "GbBd6NiToVo",
          "jzY0TO2b1Ug",
          "hw0XgEW2TcU",
          "GrkYFzS3_2s",
        ];
        videoIds.forEach((videoId, index) => {
          gapi.client.youtube.videos.list({ part: "player", id: videoId }).then(
            (response) => {
              const video = response.result.items[0];
              const videoElement = document.createElement("div");
              videoElement.innerHTML = `<iframe loading="lazy" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
              document
                .getElementById(`video${index + 1}`)
                .appendChild(videoElement);
            },
            (error) => {
              console.error("Error al cargar los datos del video", error);
            }
          );
        });
      },
      (error) => {
        console.error("Error al cargar la API de YouTube", error);
      }
    );
});
