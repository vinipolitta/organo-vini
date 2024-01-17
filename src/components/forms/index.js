import "./Forms.css";
import TextField from "./../Text-field/index";
const Forms = () => {
  return (
    <section className="formulary">
      <form>
        <h2>Fill in the data to create the employee card.</h2>
        <TextField label="Name" placehoder="insert your name" />
        <TextField label="Office" placehoder="insert your office" />
        <TextField label="Image" placehoder="insert address your image" />
      </form>
    </section>
  );
};

export default Forms;
