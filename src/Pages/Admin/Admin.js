import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CRUDProduct from "./CRUDProduct/CRUDProduct";
import OrderList from "./OrderList/OrderList";
import Dashboard from "./Dashboard/Dashboard";

const Admin = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar */}
                <div className="w-1/6 bg-black text-white p-4 flex align-middle justify-center ">
                    <div >
                        <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
                        <ul className="list-none">

                            <li
                                className={`mb-2 py-2 px-4 rounded-md ${selectedMenuItem === "dashboard"
                                    ? "bg-gray-700 text-white"
                                    : "hover:bg-gray-700 hover:text-white"
                                    } transition-colors ease-in-out duration-150 cursor-pointer`}
                                onClick={() => {
                                    handleMenuItemClick("dashboard");
                                }}
                            >
                                Dashboard
                            </li>
                            <li
                                className={`mb-2 py-2 px-4 rounded-md ${selectedMenuItem === "food"
                                        ? "bg-gray-700 text-white"
                                        : "hover:bg-gray-700 hover:text-white"
                                    } transition-colors ease-in-out duration-150 cursor-pointer`}
                                onClick={() => {
                                    handleMenuItemClick("food");
                                }}
                            >
                                Products
                            </li>
                            
                            <li
                                className={`mb-2 py-2 px-4 rounded-md ${selectedMenuItem === "order"
                                        ? "bg-gray-700 text-white"
                                        : "hover:bg-gray-700 hover:text-white"
                                    } transition-colors ease-in-out duration-150 cursor-pointer`}
                                onClick={() => handleMenuItemClick("order")}
                            >
                                Order
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-3/4 p-8 max-h-[calc(100vh-HEADER_HEIGHT-FOOTER_HEIGHT)] overflow-y-auto">
                    {selectedMenuItem === "dashboard" ? <Dashboard> </Dashboard> : null}
                    {selectedMenuItem === "food" ? <CRUDProduct></CRUDProduct> : null}
                    {selectedMenuItem === "order" ? <OrderList></OrderList> : null}
                </div>
            </div>
        </div>
    );
};

export default Admin;
