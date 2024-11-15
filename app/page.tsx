import { CustomMDX } from "./components/mdx";
import ExperienceList from "./components/ExperienceList";

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				Things About Me (Taylor Sabbag)
			</h1>
			<article className="prose mb-8">
				<CustomMDX
					source={`I'm currently the full-stack lead software engineer at Evexia Inc. building a real revolution in mental health.

I code mostly for the web using technologies like JavaScript, TypeScript, Python, React, React Native, HTML, CSS, Node, Express.js, Next.js, Svelte, SvelteKit, SQL, PostgresSQL, and MySQL. Yeah, that's a lot, but such is the web these days. However, I love going deep particularly on understanding the eccentricities and capabilities of JavaScript and the web APIs. I use Git and GitHub to manage my software versioning.

I currently live in Hamilton, Ontario, Canada (near Toronto if you're from outside Canada), but I'm open to opportunities around the world!`}
				/>
			</article>
			<h2 className="mb-8 text-2xl font-semibold tracking-tighter">
				Places I've Worked
			</h2>
			<ExperienceList />
		</section>
	);
}
