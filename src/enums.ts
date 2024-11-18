enum OrderStatus {
  Pending,
  Processing,
  Shipped,
  Delivered,
  Canceled,
}

enum PaymentType {
  CreditCard,
  PayPal,
  BankTransfer,
  CashOnDelivery,
}

export { OrderStatus, PaymentType };
