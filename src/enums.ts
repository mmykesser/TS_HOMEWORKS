enum OrderStatus {
  Pending = 'Pending',
  Processing = 'Processing',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  Canceled = 'Canceled',
}

enum PaymentType {
  CreditCard,
  PayPal,
  BankTransfer,
  CashOnDelivery,
}

export { OrderStatus, PaymentType };
