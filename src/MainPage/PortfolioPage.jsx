import { useGetAllProjectsQuery, useAddNewProjectMutation, useDeleteProjectMutation, useEditProjectMutation } from '../services/projectApi';
import { useState } from 'react';

function PortfolioPage() {
  const { data, refetch } = useGetAllProjectsQuery();
  const [addNewProject] = useAddNewProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();
  const [editProject] = useEditProjectMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [project, setProject] = useState({ 
    name: '', 
    description: '', 
    image: '', 
    link: '' 
  });
  const [currentProjectId, setCurrentProjectId] = useState(null);

  // Sort projects to show newest first (by ID or createdAt if available)
  const sortedProjects = data 
    ? [...data].sort((a, b) => {
        // If you have createdAt timestamps, use this:
        // return new Date(b.createdAt) - new Date(a.createdAt);
        
        // Otherwise sort by ID (assuming higher IDs are newer)
        return b.id - a.id;
      })
    : [];

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
    setProject(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await editProject({ id: currentProjectId, updates: project }).unwrap();
        alert('Project updated successfully!');
      } else {
        await addNewProject(project).unwrap();
        alert('Project added successfully!');
      }
      
      // Reset form and state
      setProject({ name: '', description: '', image: '', link: '' });
      setIsEditing(false);
      setCurrentProjectId(null);
      refetch();
    } catch (error) {
      alert(isEditing ? 'Failed to update project' : 'Failed to add project');
      console.error('Error:', error);
    }
  };

  const startEditing = (project) => {
    setIsEditing(true);
    setCurrentProjectId(project.id);
    setProject({
      name: project.name,
      description: project.description,
      image: project.image,
      link: project.link
    });
  };

  return (
    <section className="portfolio-container">
      <h1 className="project-heading">Projects</h1>
      
      {/* Project Form */}
      <form onSubmit={handleSubmit} className="project-form">
        <input
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
          placeholder="Project Name"
          required
        />
        <input
          type="text"
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="url"
          name="image"
          value={project.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input
          type="url"
          name="link"
          value={project.link}
          onChange={handleChange}
          placeholder="Project Link"
          required
        />
        <div className="form-actions">
          <button className="btn btn-primary" type="submit">
            {isEditing ? 'Update Project' : 'Add Project'}
          </button>
          {isEditing && (
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => {
                setIsEditing(false);
                setProject({ name: '', description: '', image: '', link: '' });
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        {sortedProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <img 
              src={project.image} 
              className="project-image" 
              alt={project.name} 
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x200?text=Project+Image';
              }}
            />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              
              <div className="project-actions">
                <a 
                  href={project.link} 
                  className="btn btn-primary"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
                
                {/* Uncomment these if you want edit/delete functionality */}
                {/* <button 
                  className="btn btn-warning"
                  onClick={() => startEditing(project)}
                >
                  Edit
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this project?')) {
                      handleDelete(project.id);
                    }
                  }}
                >
                  Delete
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;
