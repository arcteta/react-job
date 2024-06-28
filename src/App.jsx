import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./components/NotFound";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<MainLayout/>} >

    <Route index element = {<HomePage/>} />
    <Route path="/jobs" element = {<JobsPage/>} errorElement = {<NotFound/>} />
    <Route path="*" element ={<NotFound/>} />
    </Route>  
  ))


function App() {
  return <RouterProvider router={router}/>
}

export default App;
