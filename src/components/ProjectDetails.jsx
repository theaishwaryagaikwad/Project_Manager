import { useRef } from "react";

const ProjectDetails = ({ project, onDeleteProject, onAddTask, onDeleteTask }) => {
  const newTaskInput = useRef();

  return (
    <div className="p-5 m-5 w-50">
      <div className="d-flex justify-content-between">
        <h1>{project.title}</h1>
        <button
          onClick={() => onDeleteProject(project.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
      <p>{project.description}</p>
      <p>{project.due_date}</p>

      <div className="mt-5">
        <h2>Tasks</h2>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a task"
            ref={newTaskInput}
          />
          <button
            onClick={() => {
              onAddTask(newTaskInput.current.value);
              newTaskInput.current.value = "";
            }}
            className="btn btn-primary ms-3"
          >
            Add
          </button>
        </div>

        <ol className="mt-3">
          {project.tasks.length == 0 ? (
            <h3>Add a task</h3>
          ) : (
            project.tasks.map((task) => {
              return (
                <div key={task.id} className="d-flex justify-content-between p-3 border border-dark">
                  <li>{task.title}</li>
                  <button onClick={()=>onDeleteTask(task.id)} className="btn btn-danger btn-sm ms-5">Delete</button>
                </div>
              );
            })
          )}
        </ol>
      </div>
    </div>
  );
};

export default ProjectDetails;
