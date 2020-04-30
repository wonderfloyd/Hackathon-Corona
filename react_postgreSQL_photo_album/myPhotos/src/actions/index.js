import axios from 'axios';

export const setUser = (id) => {
    return {
        type: 'auth',
        payload: id
    }
};

export const fetchImageList = (id) => {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/imagelist/${id}`);
        dispatch({
            type: 'fetchImageList',
            payload: res.data
        });
    };
};


export const selectClassification = (classification) => {
    return {
        type: 'selectClassification',
        payload: classification
    };
};