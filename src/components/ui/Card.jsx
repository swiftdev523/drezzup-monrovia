const Card = ({ children, className = "", hover = true, ...props }) => (
  <div
    className={`bg-white rounded-2xl shadow-md ${hover ? "hover:shadow-2xl transition-shadow duration-300" : ""} ${className}`}
    {...props}>
    {children}
  </div>
);

export default Card;
