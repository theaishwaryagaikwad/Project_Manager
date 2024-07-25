import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import WelcomeScreen from "./components/WelcomeScreen";
import NewProjectForm from "./components/NewProjectForm";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
console.log(projects);
// console.log(selectedProject);

  const handleAddNewProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Date.now(),
      tasks: []
    };
    setProjects((prevProjects) => {
      return [...prevProjects, newProject];
    });
    setShowNewProjectForm(false);
  };

  const handleSetProject = (id) => {
    setSelectedProject(projects.find((project) => project.id === id));
  };

  const handleDeleteProject = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.title !== projectId)
    );
    setSelectedProject(null);
  };

  
  const handleAddNewTask = (taskTitle) => {
    const newTask = {
      title: taskTitle,
      id: Date.now()
    }

    setProjects((prevProjects)=>{
      return prevProjects.map((project)=>{
        if(project.id === selectedProject.id){
          project.tasks = project.tasks.concat(newTask)
        }
        return project
      })
    })
  }

  const handleDeleteTask = (taskId) =>{
    setProjects((prevProjects)=>{
      return prevProjects.map((project)=>{
        if(project.id === selectedProject.id){
          project.tasks = project.tasks.filter((task)=>task.id !== taskId)
        }
        return project
      })
    })
  }

  let screen;
  if (selectedProject) {
    screen = (
      <ProjectDetails
        project={selectedProject}
        onDeleteProject={handleDeleteProject}
        onAddTask={handleAddNewTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  } else if (showNewProjectForm) {
    screen = (
      <NewProjectForm
        addNewProject={handleAddNewProject}
        showNewProject={setShowNewProjectForm}
      />
    );
  } else {
    screen = <WelcomeScreen showNewProject={setShowNewProjectForm} />;
  }

  return (
    <div className="d-flex gap-5">
      <Sidebar
        setProject={handleSetProject}
        showNewProject={setShowNewProjectForm}
        setSelectedProject={setSelectedProject}
        projects={projects}
      />
      {screen}
    </div>
  );
}

export default App;
