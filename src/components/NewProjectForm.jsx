import { useState } from "react";
import Input from "./Input";

const NewProjectForm = ({ addNewProject, showNewProject }) => {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    due_date: "",
  });
  // console.log(newProject);

  const handleNewProjectInputs = (event, identifier) => {
    setNewProject((prevState) => {
      return { ...prevState, [identifier]: event.target.value };
    });
  };

  const handleAddNewProject = () => {
    addNewProject(newProject);
  };

  return (
    <div className="p-5 m-5">
      <h1 className="text-center">Add details for new project</h1>
      <Input
        label="Title"
        placeholder="Enter a Title"
        type="text"
        onChange={(event) => handleNewProjectInputs(event, "title")}
      />
      <Input
        label="Description"
        textarea
        placeholder="Enter a Description"
        onChange={(event) => handleNewProjectInputs(event, "description")}
      />
      <Input
        label="Due Date"
        type="date"
        onChange={(event) => handleNewProjectInputs(event, "due_date")}
      />

      <div className="d-flex justify-content-end mt-5 gap-4">
        <button className="btn btn-danger" onClick={()=>showNewProject(false)}>Cancel</button>
        <button className="btn btn-success" onClick={handleAddNewProject}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewProjectForm;
