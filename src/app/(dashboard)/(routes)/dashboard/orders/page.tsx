import { getOrders } from "@/actions/orders/get-orders";
import { OrdersClient } from "./components/client";

const OrdersPage = async () => {
  const orders = await getOrders();

  return (
    <div className="container h-full px-5">
      <OrdersClient data={orders} />
    </div>
  );
};

export default OrdersPage;
