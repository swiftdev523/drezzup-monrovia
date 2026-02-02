const Card = ({ children, className = "", hover = true }) => (
  <div
    className={`bg-white rounded-2xl shadow-md ${hover ? "hover:shadow-2xl transition-shadow duration-300" : ""} ${className}`}>
    {children}
  </div>
);

export default Card;
