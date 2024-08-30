import "./style.scss";

export const Container = ({ children, className, type }) => {
  if (type === "center") {
    return (
      <div className={`container ${className && className}`}>{children}</div>
    );
  }

  if (type === "fluid") {
    return (
      <div className={`container-fluid ${className && className}`}>
        {children}
      </div>
    );
  }

  return <div className={className && className}>{children}</div>;
};
