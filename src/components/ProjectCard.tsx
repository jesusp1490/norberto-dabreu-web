interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
  }
  
  export default function ProjectCard({ project }: { project: Project }) {
    return (
      <div className="border rounded-lg shadow-md p-4">
        {project.imageUrl && (
          <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded" />
        )}
        <h3 className="text-xl font-bold mt-2">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    );
  }
  