export default function ProjectCard({ project }: any) {
  return (
    <div className="space-y-2 border p-4 shadow-xl">
      <h2 className="text-lg text-blue-500">{project.title}</h2>
      <p>{project.description}</p>
      <p>
        🔧<strong> Tech Stack:</strong> {project.techStack}
      </p>
      <p>🎯 Role: {project.role}</p>
      <div className="space-x-4 text-blue-900">
        <a
          href="https://github.com/yourusername/maintenance-portal"
          target="_blank"
          className="underline"
        >
          GitHub
        </a>
        <a
          href="https://live-demo-link.com"
          target="_blank"
          className="underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
