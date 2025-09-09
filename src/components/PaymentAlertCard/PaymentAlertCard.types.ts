export type PaymentAlertCardProps = {
  name: string;
  alertType: string; // e.g. "Due today", "Overdue"
  alertColor?: string; // text color for alert type
  alertBg?: string; // background for alert type
  amount: string | number;
  phone: string;
};
