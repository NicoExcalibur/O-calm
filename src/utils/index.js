/* eslint-disable import/prefer-default-export */
export const setSearch = (searchValue, value) => {
  if (value.includes(searchValue)) {
    return value;
  }
  // if (searchValue.trim().length > 0) {
  //   filteredVideos = videos.filter((video) => {
  //     const loweredSearch = searchValue.toLowerCase();
  //     const loweredVideo = video.title.rendered.toLowerCase();
  //     return loweredVideo.includes(loweredSearch);
  //   });
  // }
  /*
    searchValue -> ce qu'on a dans le bousin
    let filteredVideos = videosList;
    if(searchValue.trim().length > 0) {
      filteredVideos = videosList.filter((video) => {
        const loweredSearch = searchValue.toLowerCase();
        const loweredVideo = video.title.toLowerCase();
        return loweredVideo.includes(loweredSearch);
    });
  }
  return filteredVideos;
}
    TRIM DES FAMILLES
    comparer la searchValue avec les résultats de l'api et en retirer les résultats correspondant
    Il faut penser à renvoyer le user sur la page "PARCOURIR" avec ses résultats dès qu'il clique sur la
    loupe ou ENTREE
  */
};
