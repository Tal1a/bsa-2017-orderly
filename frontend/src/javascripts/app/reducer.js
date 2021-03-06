import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import signUp from '../components/auth/signUp/signUpReducer';
import login from '../components/auth/login/loginReducer';
import dashboardReducer from '../components/dashboard/dashboardReducer';
import userProfile from '../components/userProfile/userProfileReducer';
import baseStore from '../components/homePage/homePageReducer';
import view from '../components/view/viewReducer';
import grid from '../components/view/grid/gridReducer';

export default combineReducers({
    routing,
    signUp,
    login,
    dashboardReducer,
    userProfile,
    view,
    baseStore,
    grid
});