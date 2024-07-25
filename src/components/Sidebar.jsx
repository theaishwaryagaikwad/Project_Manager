import classes from "../assets/css/sidebar.module.css";

const Sidebar = ({ showNewProject, projects, setProject, setSelectedProject }) => {
  const handleShowNewProject = () => {
    showNewProject(true);
    setSelectedProject(null);
  };

  return (
    <div className={`p-3 w-25 ${classes.sidebar}`}>
      <h4 className="text-center">Sidebar</h4>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-primary" onClick={handleShowNewProject}>
          Add Project
        </button>
      </div>

      <menu>
        {projects.map((project) => {
          return (
            <button
              onClick={() => setProject(project.id)}
              className="btn btn-info mt-3 ms-5 w-50"
              key={project.id}
            >
              {project.title}
            </button>
          );
        })}
      </menu>
    </div>
  );
};

export default Sidebar;
