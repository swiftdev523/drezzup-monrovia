const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-black/90 backdrop-blur-md text-white hover:bg-black shadow-lg hover:shadow-2xl border border-white/10",
    outline:
      "border-2 border-black/80 text-black hover:bg-black hover:text-white shadow-sm hover:shadow-lg backdrop-blur-sm",
    white:
      "bg-white/90 backdrop-blur-md text-black hover:bg-white shadow-lg hover:shadow-xl border border-white/60",
    secondary:
      "bg-gray-100/80 backdrop-blur-sm text-black hover:bg-gray-200 shadow-sm hover:shadow-md border border-gray-200/50",
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
