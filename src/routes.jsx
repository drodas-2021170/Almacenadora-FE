import { LoginPage } from "./pages/Login/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { WelcomePage } from "./pages/WelcomePage";

export const routes = [
    {path:'/', element:<WelcomePage/>},
    {path:'/register', element:<RegisterPage/>},
    {path:'/login', element:<LoginPage/>},
    {path:'*', element:<NotFoundPage/>}
]