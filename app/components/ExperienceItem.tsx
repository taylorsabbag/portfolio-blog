type ExperienceItemProps = {
	company: string;
	title: string;
	startDate: string;
	endDate: string;
	location?: string;
	description?: string;
};

export default function ExperienceItem({ company, title, startDate, endDate, location, description }: ExperienceItemProps) {
    return (
		<article className="experience-list-item">
			<h3 className="font-semibold">
				{company} | {title}
			</h3>
			<small className="text-sm text-primary/80">
				{new Date(startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })} - {endDate === "present" ? "Present" : new Date(endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })} | {location}
			</small>
			<p className="mt-2 text-gray-900">{description}</p>
		</article>
	);
}