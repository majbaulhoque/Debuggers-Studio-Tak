import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import { useEffect, useState } from "react";

const MainLayout = () => {
    const [cartCount, setCartCount] = useState(0);
    const [refresh, setRefresh] = useState(false)

    useEffect(() =>{
        setCartCount(JSON.parse(localStorage.getItem('addCart'))?.length || 0)
    },[refresh])
    console.log(refresh)
    return (
        <div>
            <div>
                <Navbar cartCount={cartCount}></Navbar>
            </div>
            <Outlet context={[refresh, setRefresh]}></Outlet>
        </div>
    );
};

export default MainLayout;