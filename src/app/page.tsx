import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/utils/firebaseService';
import { Project } from '@/types/project';

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <main>
      <Hero />
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Proyectos destacados</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
