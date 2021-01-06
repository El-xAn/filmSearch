export const filmSearch = (filmData) => (
    {
        type: "SEARCH",
        payload: {
            data: filmData
        }
    }
)

export const addFavourite = (movies) => 
(

  {
      type: "ADD_FAVOURITE",
      payload: movies
      
  }
)

export const cleanFavourite = () => (
  {
      type: "CLEAN_FAVOURITE",
      payload: []
      
  }
)

// export const removeFavourite = (movies) => (
//   {
//       type: "ADD_FAVOURITE",
//       payload: {
//           favList: movies
//       }
//   }
// )
   
export const mainScreen = (dispatch, text) =>{
  return async () => {
    try {
      const url = 'http://api.tvmaze.com/search/shows?q=';
      console.log(url+text)
      const response = await fetch(url +text);
      const data = await response.json();
      dispatch(filmSearch(data));
    } catch (e) {
      console.log("Wrong url!");
    }
  } 
}