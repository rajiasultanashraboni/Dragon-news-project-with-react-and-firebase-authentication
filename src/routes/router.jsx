import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import MainContent from "../Components/MainContent";
import CategoriesNews from "../Components/CategoriesNews";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
        {
            path:'/',
            element:<Navigate to={"/category/2"}></Navigate>
          },
      {
        path: 'category/:id',
        element: <CategoriesNews></CategoriesNews>,
        loader:async({params})=>{
            const res= await fetch('/news.json');
            const data = await res.json()
            const categoryId = parseInt(params.id);
            const filtered = data.filter(news => parseInt(news.category_id, 10) === categoryId);            
            return filtered

        }
      },
      
    ]
  },
  {
    path: '/news',
    element: <h2>This is news layout</h2>
  },
  {
    path: '/about',
    element: <h2>This is about layout</h2>
  }
]);

export default router;
