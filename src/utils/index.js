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

export const researchVideoDisplay = (firstArray, secondArray) => {
  if (firstArray.length > 0) {
    return firstArray;
  } if (secondArray.length > 0) {
    return secondArray;
  }
  return [];
};

export const getVideoBySlug = (videos, slug) => {
  videos.find((video) => video.slug === slug);
};

export const convertHTML = (htmlString) => {
  const string = htmlString.replace('<p>', '').replace('</p>', '').replace(/&rsquo;/g, "'");
  return string;
};

export const compareUserArray = (users, token) => {
  users.forEach((user) => {
    const filterData = user.find(token);
    console.log(filterData);
    return filterData;
  });
};
