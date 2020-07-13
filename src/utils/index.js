/* eslint-disable import/prefer-default-export */
export const setSearch = (searchValue, data) => {
  const inputValue = searchValue.toLowerCase();

  const filterData = data.filter(item => item.title.rendered.toLowerCase().includes(inputValue));
  return filterData;
};

export const returnResults = (value) => {
  const resultsLength = value.length;

  if (resultsLength === 0) {
    return '0';
  }

  return resultsLength;
};

/* Fonction qui compare l'id de la catégorie avec celui de l'id de video.video_categorie
*/
export const idCompare = (value, comparedArray) => {
  const comparedValue = comparedArray.video_categorie;
  if (comparedValue === value) {
    return comparedArray;
  }
};

export const getVideoBySlug = (videos, slug) => {
  videos.find((video) => video.slug === slug);
};
