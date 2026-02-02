const Card = ({ children, className = "", hover = true }) => (
  <div
    className={`bg-white rounded-lg shadow-md ${hover ? "hover:shadow-xl transition-shadow" : ""} ${className}`}>
    {children}
  </div>
);

export default Card;
