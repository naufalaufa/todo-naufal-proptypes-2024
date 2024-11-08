import PropTypes from "prop-types";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <div>
      {todos.map((item) => {
        const { isCompleted, date } = item;
        return (
          <div className="grid-table-container" key={item.id}>
            {isCompleted ? (
              <>
                <input
                  style={{ padding: "7px", borderRadius: "12px" }}
                  defaultValue={item.name}
                />
              </>
            ) : (
              <>
                <p
                  key={item.id}
                  style={{
                    backgroundColor: "white",
                    padding: "4px",
                    borderRadius: "10px",
                  }}
                >
                  {item.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    color: "white",
                  }}
                >
                  <p>{date.time}</p>
                  <p>{date.years}</p>
                </div>
              </>
            )}
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                textAlign: "center",
                placeContent: "space-between",
                margin: "auto",
                gap: "10px",
              }}
            >
              <button onClick={() => editTodo(item.id)}>
                {item.isCompleted ? "Clear edit" : "edit"}
              </button>
              <button onClick={() => deleteTodo(item.id)}>delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
};

export default TodoList;
