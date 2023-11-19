import Order from "./Order";
import ordersController from "../../controllers/ordersController";
import { useNavigate } from "react-router-dom";


export default function Cart() {
    const controller = ordersController();
    const navigate= useNavigate();

    const handleDelete= async (e) => {
        e.preventDefault();
        try
        {

            controller.deleteOrders();
            navigate ("/order");
        }
        catch(e){
            console.log(e)
        }
    }
    const handlePurchase= async (e) => {
        e.preventDefault();
        try
        {

            controller.purchaseOrders();
            navigate ("/");
        }
        catch(e){
            console.log(e)
        }
    }

    return (
    <div >
        
        <h2>Orders:</h2>
        {controller.orders &&
        controller.orders.map((order) => {
            return <Order order={order} key={order._id} />;
        })}
        <button className="btn btn-primary mb-2" onClick={handleDelete} >Start Over</button>
        <button className="btn btn-primary mb-2" onClick={handlePurchase} >Purchase</button>
    </div>
    );
}