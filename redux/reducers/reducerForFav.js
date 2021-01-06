const defaultState = {
    favList: []
};

export const reducerForFav = (state = defaultState, action) => {
    switch(action.type) {
        // case 'CLEAN_FAVOURITE':
        //     return{
                
        //         favList: []
        //     }
        case 'ADD_FAVOURITE': 
            // if(!state.favList.includes(action.payload))
            //     {
                    return{ ...state, favList: [...state.favList, action.payload] }
                // }
        

    }
    return state
}