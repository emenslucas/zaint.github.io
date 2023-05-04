async function mostrarEstadisticasDeYoutube() {
  try {
    const apiKey = "AIzaSyAYzB2t_8K2LODUsjA1WzFwZR6Dof3ljfw";

    await gapi.client.init({ apiKey });

    const { statistics } = (await gapi.client.request({
      path: `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCdhff2HU2dpXhkCiWfCR_wA`,
    })).result.items[0];

    const { subscriberCount, viewCount } = statistics;

    const seguidoresElement = document.querySelector("#youtube-seguidores");
    seguidoresElement.textContent = subscriberCount;

    const vistasTotalesElement = document.querySelector("#youtube-vistas-totales");
    vistasTotalesElement.textContent = viewCount;
  } catch (error) {
    console.error(`Error: ${error.result?.error?.message ?? 'No se pudo obtener la información'}`);
  }
}

gapi.load("client", mostrarEstadisticasDeYoutube);
