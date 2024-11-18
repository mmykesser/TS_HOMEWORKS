import { OrderStatus, PaymentType } from './enums';

interface Order {
  id: string;
  amount: number;
  status: OrderStatus;
  payment: PaymentType;
}

function updateOrderStatus(order: Order, status: OrderStatus) {
  order.status = status;

  console.log(` Order: ${order.id} \n Status Updated: ${OrderStatus[status]}`);
}

const testOrder: Order = {
  id: 'Phone',
  amount: 3,
  status: OrderStatus.Shipped,
  payment: PaymentType.PayPal,
};

updateOrderStatus(testOrder, OrderStatus.Delivered);

const orders: Order[] = [
  {
    id: 'TV',
    amount: 8,
    status: OrderStatus.Delivered,
    payment: PaymentType.CreditCard,
  },
  {
    id: 'TV',
    amount: 4,
    status: OrderStatus.Processing,
    payment: PaymentType.PayPal,
  },
  {
    id: 'Laptop',
    amount: 15,
    status: OrderStatus.Pending,
    payment: PaymentType.CashOnDelivery,
  },
  {
    id: 'Watch',
    amount: 30,
    status: OrderStatus.Delivered,
    payment: PaymentType.BankTransfer,
  },
];

function getOrdersByStatus(orders: Order[], status: OrderStatus) {
  return orders.filter((order) => order.status === status);
}

const statusOrder = getOrdersByStatus(orders, OrderStatus.Delivered);
console.log(statusOrder);
