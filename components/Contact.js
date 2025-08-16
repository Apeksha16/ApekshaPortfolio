import data from '@/data/data.json'
import SectionHeader from './UI/SectionHeader'
import Image from 'next/image'

const Contact = () => {

    const { email, socialLinks } = data.data;

    return (
        <section id="contact" className="bg-black text-white py-8 min-h-[420px]">
            <div className="mx-auto px-6 md:px-8 lg:px-16">
                <SectionHeader title={'contact'} description={''} linkText={''} link={''} />

                <div className='mt-4 mb-6 w-full text-lg md:text-xl font-mono'>
                    <p className='mb-8'>
                       I’m currently open to exciting opportunities and collaborations. If you’re looking to hire a dedicated Front-End Developer and Software Developer or partner on a project, let’s connect!

                    </p>
                    <p>
                        Email me at <a href={'mailto:'+email} className='text-[var(--accent)] no-underline hover:underline decoration-inherit'>{email}</a> and let's connect!
                    </p>
                </div>
                <div className='mt-8'>
                    <div className="flex items-center justify-left space-x-10">
                        <a href={socialLinks.github} target='_blank'>
                            <Image
                                src='/icons/github-dark.svg'
                                alt="Github Icon with Apeksha Verma's Github Link"
                                height={37}
                                width={37}
                                className="object-contain"
                            />
                        </a>
                        <a href={socialLinks.linkedin} target='_blank'>
                            <Image
                                src='/icons/linkedin-dark.svg'
                                alt="Linkedin Icon with Apeksha Verma's Linkedin Link"
                                height={40}
                                width={40}
                                className="object-contain"
                            />
                        </a>
                        <a href={socialLinks.medium} target='_blank' >
                            <Image
                                src='/icons/medium-dark.svg'
                                alt="Medium Icon with Apeksha Verma's Medium Link"
                                height={40}
                                width={40}
                                className="object-contain"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
