import "./TextField.css";

const TextField = (props) => {
  const modifyPlacehoder = `${props.placehoder}...`;
  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input type="text" placeholder={modifyPlacehoder} />
    </div>
  );
};

export default TextField;
