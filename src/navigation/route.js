import { StackNavigator } from "react-navigation"
import SplashScreen from "../splashScreen";
import MainPage from "../mainPage";
import UserForm from "../userServiceForm";





const Route = StackNavigator({

    splashScreenRoute: {
        screen: SplashScreen,
    },
    MainPageRoute: {
        screen: MainPage,
    },

    UserFormRoute: {
        screen: UserForm
    }





})


export default Route