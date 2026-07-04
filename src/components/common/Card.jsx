function Card({ children, className = "" }) {
  return (
    <div className={`dashboard-card p-4 h-100 ${className}`}>{children}</div>
  );
}

export default Card;
