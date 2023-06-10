
export const getGifs = async (category) => {

  const apiKeyGiphy = 'api_key=b6c6TdbWJc2cPSgfVl6G42Rx0gwOk0zT';
  const urlSearchApiGiphy = `https://api.giphy.com/v1/stickers/search?${apiKeyGiphy}&limit=10&q=${encodeURI(category)}`;

  const resp = await fetch(urlSearchApiGiphy);
  const { data } = await resp.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  });

  return gifs;
  
}