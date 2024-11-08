import PropTypes from "prop-types";

const FormTodo = ({ text, setText, handleSubmit }) => {
  return (
    <form
      style={{
        display: "flex",
        gap: "2px",
        alignItems: "center",
        justifyContent: "center",
      }}
      onSubmit={handleSubmit}
    >
      <input
        style={{ padding: "10px", borderRadius: "10px" }}
        required
        value={text}
        type="text"
        placeholder="your name"
        onChange={(e) => setText(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

FormTodo.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default FormTodo;
