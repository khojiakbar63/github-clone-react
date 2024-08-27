import "./style.scss";

export const Input = ({ placeholder, className, onChange, value, type }) => {
  return (
    <input
      type={type ? type : "text"}
      value={value ? value : ""}
      placeholder={placeholder && placeholder}
      className={className ? className : null}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
};
