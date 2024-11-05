const PROJECTS = [
    {
        title: 'LinguaFrankly',
        description: 'A language learning app that uses AI to help you learn languages.',
        image: '/images/linguafrankly.webp',
        tags: ['Svelte', 'SvelteKit', 'Tailwind CSS', 'TypeScript', 'AI', 'Supabase', 'Vercel', 'PostgreSQL'],
        github: 'https://github.com/taylorsabbag/lingua-frankly',
        live: 'https://linguafrankly.taylorsabbag.dev',
    },
    // Add more projects here
    {
        title: 'My Portfolio',
        description: 'The website you are on right now!',
        image: '/images/personalwebsite.webp',
        tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
        github: 'https://github.com/taylorsabbag/portfolio-blog',
        live: 'https://taylorsabbag.dev',
    }
]

export function PortfolioProjects() {
    return (
        <div>
            {PROJECTS.map((project) => (
                <Card key={project.title} className="flex flex-col">
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
    )