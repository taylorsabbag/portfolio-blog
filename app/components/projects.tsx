import Image from "next/image";

import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
					className="bg-cover bg-center min-h-[500px] flex flex-col justify-between hover:scale-102 transition-all duration-300"
					style={{ backgroundImage: `url(${project.image.src})` }}
				>
					<CardHeader className="backdrop-blur bg-white/50 rounded-t-lg">
						<CardDescription>{project.description}</CardDescription>
						<CardTitle>{project.title}</CardTitle>
					</CardHeader>
					<CardContent>
					</CardContent>
					<CardFooter className="flex justify-end backdrop-blur bg-white/50 rounded-b-lg py-6">
						<Button>View Project</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
