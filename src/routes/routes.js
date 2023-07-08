import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home/Home/Home";
import ToolkitCounter from "../components/pages/ToolkitCounter/ToolkitCounter";
import Products from "../components/pages/Products/Products";
import MainLayOut from "../components/MainLayOut/MainLayOut";
import ProductDetails from "../redux/containers/ProductDetails";
import Contact from "../components/pages/Contact/Contact";
import AddedProductDetails from "../components/pages/ProductDetails/ProductDetails";
import About from "../components/pages/About/About";
import PageNotFound from "../components/pages/PageNotFound/PageNotFound";
import Services from "../components/pages/Services/Services";
import Portfolio from "../components/pages/Portfolio/Portfolio";
import Blog from "../components/pages/Blog/Blog";
import Pricing from "../components/pages/Pricing/Pricing";
import Team from "../components/pages/Team/Team";
import TestiMonal from "../components/pages/TestiMonal/TestiMonal";
import AddProduct from "../components/pages/AddProduct/AddProduct";
import AddedProducts from "../components/pages/AddedProducts/AddedProducts";

export const routers = createBrowserRouter([
    {
        path: "/", element: <MainLayOut></MainLayOut>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/counter", element: <ToolkitCounter></ToolkitCounter>
            },
            {
                path: "/products", element: <Products></Products>
            },
            {
                path: "/product/:productId", element: <ProductDetails></ProductDetails>
            },
            {
                path: "/contact", element: <Contact></Contact>
            },
            {
                path: "/about", element: <About></About>
            },
            {
                path: "/services", element: <Services></Services>
            },
            {
                path: "/portfolio", element: <Portfolio></Portfolio>
            },
            {
                path: "/blog", element: <Blog></Blog>
            },
            {
                path: "/pricing", element: <Pricing></Pricing>
            },
            {
                path: "/team", element: <Team></Team>
            },
            {
                path: "/testimonal", element: <TestiMonal></TestiMonal>
            },
            {
                path: "/add-product", element: <AddProduct></AddProduct>
            },
            {
                path: "/added-product", element: <AddedProducts></AddedProducts>
            },
            {
                path: "/product-details/:id", element: <AddedProductDetails></AddedProductDetails>
            },
            
            {
                path: "*", element: <PageNotFound></PageNotFound>
            }

        ]

    }
])