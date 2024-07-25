const WelcomeScreen = ({ showNewProject }) => {

  const handleShowNewProject = () => {
    showNewProject(true)
  }

  return (
    <div className="p-5 m-5">
      <h1 className="text-center">Welcome to Project Manager</h1>
      <h2 className="text-center">Add a project</h2>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-primary" onClick={handleShowNewProject}>Add Project</button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
