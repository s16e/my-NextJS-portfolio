import ProjectCard from './project-card';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Smart Building & Flat Maintenance Portal',
      description:
        'A web platform to log, manage, and resolve flat maintenance issues with features like complaint tracking, admin dashboard, and payment logs.',
      techStack: 'HTML, CSS, JavaScript, Spring Boot, MySQL',
      role: 'Full Stack Developer',
      githubUrl: 'https://github.com/yourusername/maintenance-portal',
      demoUrl: 'https://live-demo-link.com',
    },
    {
      title: 'Interview Preparation Tracker',
      description:
        'A productivity tool to track coding goals, DSA progress, and motivational reminders built as part of React learning.',
      techStack: 'React, Next.js, Tailwind CSS, Firebase',
      role: 'Frontend Developer (Learning Project)',
      githubUrl: 'https://github.com/yourusername/maintenance-portal', // Consider updating this link if it's incorrect
      demoUrl: 'https://live-demo-link.com',
    },
    {
      title: 'AI Career Path Recommender',
      description:
        'Recommends personalized career paths using ML models based on user preferences like interests and skill level.',
      techStack: 'Python, Flask, Scikit-learn',
      role: 'ML Developer & Backend',
      githubUrl: 'https://github.com/yourusername/maintenance-portal', // Consider updating this link if it's incorrect
      demoUrl: 'https://live-demo-link.com',
    },
  ];

  return (
    <section>
      <div className="text-center">
        <h1 className="text-3xl">Projects</h1>
        <p className="text-sm text-gray-600">
          A few projects I've worked on, combining development, design, and
          real-world problem solving.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </section>
  );
}
