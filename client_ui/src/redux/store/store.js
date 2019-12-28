import { createStore } from 'redux';
import commonReducer from '../reducers/commonReducer';

const configureStore = () => {
    return (createStore(commonReducer))
}

export default configureStore;