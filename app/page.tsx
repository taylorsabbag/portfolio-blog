import { CustomMDX } from "./components/mdx";

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				Things About Me (Taylor Sabbag)
			</h1>
			<article className="prose">
				<CustomMDX
					source={`Hey there! I'm a software engineer who can't help but get excited about solving puzzles through code. From crafting mobile experiences with React Native to building backend systems with Express.js, I'm driven by the thrill of creating technology that actually makes a difference in people's lives.

My engineering journey started with a simple curiosity that turned into a full-blown passion. I believe that the best software isn't just about clean code or fancy features – it's about understanding real problems and building solutions that click with the people using them.

You can check out my experiments and coding adventures (including some questionably necessary isEven methods) on [GitHub](https://github.com/taylorsabbag). I'm also working on sharing my journey and thoughts at [taylorsabbag.dev](https://taylorsabbag.dev).

As a full-stack developer, I love diving into both sides of the tech world – from making things look and feel great on the front end to ensuring everything runs smoothly behind the scenes. The JavaScript/TypeScript ecosystem is my playground, but I'm always eager to explore new technologies that could help build better solutions.

I get a kick out of tackling tricky problems and learning new things along the way. Whether it's optimizing a sluggish API or debugging a mysterious React component, I'm up for the challenge. I'm looking to connect with others who share this enthusiasm for using technology to build stuff that matters.`}
				/>
			</article>
		</section>
	);
}
