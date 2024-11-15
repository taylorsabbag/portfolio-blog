import ExperienceItem from "./ExperienceItem";

const EXPERIENCE_LIST = [
    {
        company: "Evexia",
        title: "Lead Software Engineer",
        startDate: "2024-09-01",
        endDate: "present",
        location: "Hybrid (Toronto, Ontario, Canada)",
        description: "As the lead software engineer, I architect and build the app and website using TypeScript, React, React Native, Firebase, and other web/mobile-native solutions."
    },
    {
        company: "PlayToday",
        title: "Backend Engineer",
        startDate: "2024-06-01",
        endDate: "2024-09-01",
        location: "Remote",
        description: "As the solo back-end developer, I engineered a robust Express.js-based REST API including JWT-based authentication, CRUD operations with Azure database integration via MongoDB and Mongoose, and public API key generation and usage."
    },
    {
        company: "Vox Media",
        title: "Junior Software Engineer",
        startDate: "2024-04-01",
        endDate: "2024-06-01",
        location: "Remote",
        description: "I collaborated with designers and a project manager to develop a comprehensive member management tool/dashboard, using React and Firebase, to streamline community operations for organizations and their community managers."
    },
]

export default function ExperienceList() {
	return (
		<section className="experience-list">
			{EXPERIENCE_LIST.map((experience) => (
				<ExperienceItem key={experience.company} {...experience} />
			))}
		</section>
	);
}
