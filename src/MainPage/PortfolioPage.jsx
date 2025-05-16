import { useGetAllProjectsQuery, useAddNewProjectMutation, useDeleteProjectMutation, useEditProjectMutation } from '../services/projectApi';
import { useState } from 'react';

function PortfolioPage() {
  const { data, refetch } = useGetAllProjectsQuery();
  const [addNewProject] = useAddNewProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();
  const [editProject] = useEditProjectMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [project, setProject] = useState({ name: '', description: '', image: '', link: '' });
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const handleDelete = async (id) => {
    try {
      await deleteProject(id).unwrap();
      alert("Project deleted successfully");
      refetch();
    } catch (error) {
      alert("Failed to delete project");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await editProject({ id: currentProjectId, project }).unwrap();
        alert('Project updated successfully!');
        setIsEditing(false);
        setCurrentProjectId(null);
      } else {
        await addNewProject(project).unwrap();
        alert('Project added successfully!');
      }
      setProject({ name: '', description: '', image: '', link: '' });
      refetch();
    } catch (error) {
      alert(isEditing ? 'Failed to update project' : 'Failed to add project');
    }
  };

  const startEditing = (project) => {
    setIsEditing(true);
    setCurrentProjectId(project.id);
    setProject({ name: project.name, description: project.description, image: project.image, link: project.link });
  };

  return (
    <>
      <section className="portfolio-container">
        <h1 className="project-heading">Projects</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={project.name} onChange={handleChange} placeholder="Project Name" />
          <input type="text" name="description" value={project.description} onChange={handleChange} placeholder="Description" />
          <input type="text" name="image" value={project.image} onChange={handleChange} placeholder="Image URL" />
          <input type="text" name="link" value={project.link} onChange={handleChange} placeholder="Project Link" />
          <button className="btn btn-primary" type="submit">{isEditing ? 'Update Project' : 'Add Project'}</button>
        </form>

        <div className="portfolio-page">
          {data?.map((project) => (
            <div className="card" style={{ width: '18rem' }} key={project.id}>
              <img src={project.image} className="card-img-top" alt={project.image} />
              <div className="card-body">
                <h5 className="card-title"> {project.name} </h5>
                <p className="card-text"> {project.description} </p>

<div className='portfolio-button'>
                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit Website</a>

       {   /*   <button className="btn btn-warning" onClick={() => startEditing(project)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(project.id)}>Delete</button>
          */ }
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PortfolioPage;
