import Link from "next/link";

import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import linguafrankly from "@/assets/images/linguafrankly.webp";
import personalwebsite from "@/assets/images/personalwebsite.webp";

const PROJECTS = [
	{
		title: "LinguaFrankly",
		description: "AI + Short Stories = Language Acquisition",
		image: linguafrankly,
		tags: [
			"Svelte",
			"SvelteKit",
			"Tailwind CSS",
			"TypeScript",
			"AI",
			"Supabase",
			"Vercel",
			"PostgreSQL",
		],
		github: "https://github.com/taylorsabbag/lingua-frankly",
		live: "https://linguafrankly.taylorsabbag.dev",
	},
	// Add more projects here
	{
		title: "My Portfolio",
		description: "The website you are on right now!",
		image: personalwebsite,
		tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
		github: "https://github.com/taylorsabbag/portfolio-blog",
		live: "https://taylorsabbag.dev",
	},
];

export function PortfolioProjects() {
	return (
		<div className="flex flex-col gap-4">
			{PROJECTS.map((project) => (
				<Card
					key={project.title}
					className="group bg-cover bg-center min-h-[500px] flex flex-col justify-between hover:scale-102 transition-all duration-300"
					style={{ backgroundImage: `url(${project.image.src})` }}
				>
					<CardHeader className="border-b border-foreground/50 backdrop-blur bg-white/50 rounded-t-lg">
						<CardDescription>{project.description}</CardDescription>
						<CardTitle>{project.title}</CardTitle>
					</CardHeader>
					<CardContent className="backdrop-blur bg-white/50 flex-1 group-hover:backdrop-blur-[0] group-hover:bg-transparent transition-all duration-300" />
					<CardFooter className="border-t border-foreground/50 flex align-start justify-between backdrop-blur bg-white/50 rounded-b-lg py-6">
						<div className="flex flex-wrap gap-2 px-4">
							{project.tags.map((tag) => (
								<Badge
									key={tag}
									className=""
								>
									{tag}
								</Badge>
							))}
						</div>
						<Button className="self-end" asChild>
							<Link href={project.live}>View Project</Link>
						</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
