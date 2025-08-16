import ProjectsWithFilter from '@/components/UI/ProjectsWithFilter';
import SectionHeader from '@/components/UI/SectionHeader';
import data from '@/data/data.json';

export const metadata = {
    title: 'Projects | Apeksha Verma - Front End Developer',
    description:
        'Explore all projects by Apeksha Verma, a Front End developer. Categories include Full Stack, React, Next.js, Front End, and more.',
    openGraph: {
        title: 'Projects | Apeksha Verma - Front End Developer',
        description:
            'Explore all projects by Apeksha Verma, a Front End developer. Categories include Full Stack, React, Next.js, Front End, and more.',
        url: 'https://apekshaverma.com/projects',
        images: [
            {
                url: 'https://apekshaverma.com/images/og-image-projects.png',
                width: 1200,
                height: 630,
                alt: 'Apeksha Verma Projects Preview',
            },
        ],
    },
    alternates: {
        canonical: 'https://apekshaverma.com/projects',
    },
};

export default function ProjectsPage() {
    const { projects } = data.data;

    const categories = ['All', ...new Set(projects.map((project) => project.category))];

    return (
        <section className="bg-black text-white py-6 mt-22">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            projects.map((project) => ({
                                '@context': 'https://schema.org',
                                '@type': 'ImageObject',
                                url: `https://apekshaverma.com${project.image}`,
                                name: `${project.title} Project Image`,
                                caption: `${project.title} by Apeksha Verma - ${project.category} Project`,
                                associatedMedia: {
                                    '@type': 'WebPage',
                                    url: 'https://apekshaverma.com/projects',
                                },
                            }))
                        ),
                    }}
                />
            </head>
            <main className="mx-auto px-6 md:px-8 lg:px-16">

                <SectionHeader title={'projects'} description={'View all my latest projects here'} linkText={'back to home'} link={'/'} />

                {/* Projects Section with Categories */}
                <div className="mt-16">
                    <ProjectsWithFilter projects={projects} categories={categories} />
                </div>

            </main>
        </section>
    );
}