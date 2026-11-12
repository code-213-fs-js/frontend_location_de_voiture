const labels = {
  pending: "En attente",
  confirmed: "Confirmée",
  rejected: "Refusée",
  cancelled: "Annulée",
};

export default function StatusBadge({ status }) {
  let className = "status";
  if (status === "confirmed") className += " status-green";
  if (status === "rejected" || status === "cancelled") className += " status-red";
  return <span className={className}>{labels[status]}</span>;
}
