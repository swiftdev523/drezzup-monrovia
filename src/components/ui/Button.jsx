const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-900 shadow-md hover:shadow-xl",
    outline:
      "border-2 border-black text-black hover:bg-black hover:text-white shadow-sm hover:shadow-lg",
    white: "bg-white text-black hover:bg-gray-100 shadow-md hover:shadow-lg",
    secondary:
      "bg-gray-100 text-black hover:bg-gray-200 shadow-sm hover:shadow-md",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
};

export default Button;
