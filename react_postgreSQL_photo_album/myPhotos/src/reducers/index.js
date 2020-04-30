import { combineReducers } from 'redux';

const authReducer = (state=null, action) => {
    console.log(action)
    switch (action.type) {
        case 'auth':
            return action.payload;

        default:
            return state;
    }
};

const imageListReducer = (state=[], action) => {
    console.log(action)
    switch (action.type) {
        case 'fetchImageList':
            return action.payload;

        default:
            return state;
    }
};

const imageClassReducer = (state=[], action) => {
    switch (action.type) {
        case 'fetchImageList':
            let temp = action.payload.map(image => image.classification)
            let classificationList = [ ...new Set(temp) ]
            return classificationList || []

        default:
            return state;
    }
};

const selectClassificationReducer = (state=null, action) => {
    switch (action.type) {
        case 'selectClassification':
            return action.payload || null
        default:
            return state;
    }
};


export default combineReducers({
    User: authReducer,
    imageList: imageListReducer,
    imageClass: imageClassReducer,
    selected: selectClassificationReducer
});