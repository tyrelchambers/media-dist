export const H1 = ({ children, className, ...props }) => (
  <h1
    className={`text-primary-black font-bold text-3xl ${className ?? ""}`}
    {...props}
  >
    {children}
  </h1>
);
