import React, { useEffect, useState } from "react";
import { deleteSVG } from "../../../SharedComponent/SVGicons/delete";
import { update } from "../../../SharedComponent/SVGicons/update";
import { toast } from "react-toastify";



const OrderList = () => {
    const [orderArr, setOrderArr] = useState([{
        id: 0,
        customerName: "X",
        productName: "Abcd",
        price: 1200,
        location: "X",
        status: 0,
        quantity: 2

    },
    {
        id: 1,
        customerName: "Y",
        productName: "Abcd",
        price: 1100,
        location: "Y",
        status: 0,
        quantity: 2

    },
    {
        id: 2,
        customerName: "Z",
        productName: "Abcd",
        price: 1300,
        location: "Z",
        status: 0,
        quantity: 2

    },
    {
        id: 3,
        customerName: "A",
        productName: "Abcd",
        price: 1500,
        location: "A",
        status: 0,
        quantity: 2

    },
    {
        id: 4,
        customerName: "B",
        productName: "Abcd",
        price: 1200,
        location: "B",
        status: 0,
        quantity: 2

    }])
    const [change, setChange] = useState(false);

    useEffect(()=>{
        localStorage.setItem("orders", JSON.stringify(orderArr));
    }, [])
    

    useEffect(() => {
        setOrderArr(JSON.parse(localStorage.getItem("orders")));
    }, [change]);


    console.log(orderArr)
    const handleApprove = (id) => {
            orderArr?.map((p, i) => {
                if (p.id === id) {

                    console.log("matched", p.customerName)
                    orderArr[i] =  {...p, status: 1}
                }
            });
        localStorage.setItem("orders", JSON.stringify(orderArr));
            setChange(!change);
            toast.success("Order Approved");
        
    };

    const handleDelete = (id) =>{
        let result = window.confirm("Are you sure want to delete?");
        if (result) {
            orderArr?.map((p, i) => {
                if (p.id === id) {
                    orderArr?.splice(i, 1);
                }
            });
            localStorage.setItem("orders", JSON.stringify(orderArr));
            setChange(!change);
            toast.error("Order deleted");
        }
    }
    return (
        <div>
    
            <div className="overflow-x-auto">
                <table className="table w-4/5 mx-auto">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>

                            <th>Order item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Approve</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderArr?.map((d, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>
                                        {d?.customerName}
                                    </td>
                                    <td>{d?.productName}</td>
                                    <td>{d?.quantity}</td>
                                    <td>{d?.price}</td>

                                    <td>
                                        <button
                                        disabled={d?.status === 1 && true }
                                            className={d?.status ===1 ? "btn single-card-button me-6 bg-gray-500" : "addToCartButtonDecrease"}
                                            onClick={() => {
                                                handleApprove(d?.id)
                                                
                                            }}
                                        >
                                            {d.status ===1  ? "Approved" : update}
                                        </button>
                                    </td>
                                    <td>
                                        {" "}
                                        <button
                                            className="addToCartButtonIncrease"
                                            onClick={() => {
                                                handleDelete(d?.id)
                                            }}
                                        >
                                            {deleteSVG}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <hr></hr>
            </div>
        </div>
    );
};

export default OrderList;
