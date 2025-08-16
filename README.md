# Apeksha Verma’s Portfolio Website

![Portfolio Preview](https://apekshaverma.com/images/og-image.png)

A modern, single-page portfolio website built with **Next.js** and **Tailwind CSS**, showcasing my skills, projects, and journey as a passionate front-end and software developer. This project is designed for easy customization via a data.json file, allowing anyone to adapt it by simply updating their own data.

---

## 🚀 Features

- **Single-Page Design**: A sleek, scrollable layout with sections for Home, Skills, Projects, About Me, and Contact.
- **Dedicated Projects Page**: A `/projects` route to display all projects, categorized by tech stack (e.g., React, HTML/CSS) with filtering.
- **Modern Tech Theme**: Clean, developer-friendly aesthetic with dark mode and accent colors.
- **SEO Optimized**: With meta tags, schema markup, and sitemap tailored for "Apeksha Verma".
- **Responsive Design**: Fully responsive across devices using Tailwind CSS.
- **Interactive Elements**:
  - Navbar with active link highlighting.
  - Category filtering on Projects page with fade-in animations.
  - Video background in hero section with image fallback.
- **Customizable Data**: All content abstracted into a `data.json` file for easy updating.
- **Performance Optimized**:
  - Server-side rendering for fast load.
  - Next.js Image component for optimized images.
  - Compressed video and images.
- **Accessibility**: ARIA attributes and semantic HTML for screen reader support.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Google Fonts (Geist Mono)
- **Assets**: Video background, project images, tech stack icons
- **Deployment**: Deployable on [Vercel](https://vercel.com/) or any Node.js host
- **Other Tools**:
  - FFmpeg for video compression
  - IntersectionObserver API for active link highlighting
  - JSON for data abstraction

---

## ⚙️ Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  
- [FFmpeg](https://ffmpeg.org/) (optional, for video compression)

### Installation

1. **Clone the repository:**

    `git clone https://github.com/Apeksha16/portfolio-v2.git cd portfolio`

2.  **Install Dependencies**:

    `npm install # or yarn install`

3.  **Customize data.json**:
    -   Open data/data.json and update the fields with your information:

    `
    { "data": { "navtext": "Your Name", "email": "your.email@example.com", "projects": [ { "projectType": "Project Type", "title": "Project Title", "description": "Project description.", "techStack": ["tech1", "tech2"], "image": "/images/project-image.png", "liveLink": "https://project-live-link.com", "githubLink": "https://github.com/your-username/project", "category": "Category (e.g., Full Stack, React)" } ] } }
    `
    -   Add your projects, skills, and other details as needed.
4.  **Add Assets**:
    -   Place your profile picture, project images, and tech stack icons in the public/images/ and public/icons/ directories.
    -   Replace public/background/bgvideo.mp4 with your hero section video (or keep the existing one).
    -   Compress the video using FFmpeg for better performance:

        `ffmpeg -i your-video.mp4 -c:v libx264 -preset veryslow -crf 18 -vf scale=1280:720 -an -pix_fmt yuv420p public/background/bgvideo.mp4`

    -   Add a fallback image (public/poster-bgvideo3.jpg) for the video.
5.  **Run the Development Server**:

    `npm run dev # or yarn dev`

    Open <http://localhost:3000> to view the site.
6.  **Build and Deploy**:
    -   Build the project:

        `npm run build # or yarn build`

    -   Deploy to Vercel or your preferred hosting platform:

        `vercel deploy`

🎨 Customization
----------------

-   **Data Customization**:
    -   Edit data/data.json to update your name, email, projects, and other content.
    -   Add more projects by following the existing structure in the projects array.
-   **Styling**:
    -   Modify app/globals.css to adjust colors, fonts, or animations.
    -   Update Tailwind CSS classes in components to change the layout or design.
-   **Video Background**:
    -   Replace public/bgvideo.mp4 with your own video.
    -   Ensure the video is compressed and has a fallback image for unsupported devices.
-   **SEO**:
    -   Update the metadata object in app/layout.js with your site's title, description, and Open Graph images.
    -   Customize the public/sitemap.xml and public/robots.txt for your domain.

🌟 Key Features in Action
-------------------------

-   **Navbar**: Highlights the active section as you scroll (e.g., #projects turns white when viewing the Projects section).
-   **Hero Section**: Features a video background with a fallback image, a typewriter effect for titles, and SEO-optimized <h1> placement.
-   **Projects Page**: Displays all projects at /projects, with category filtering (e.g., Full Stack, React) and a fade-in animation for project cards.
-   **SEO Optimization**: Includes meta tags, schema markup, and a sitemap to rank for your name (e.g., "Apeksha Verma").
-   **Performance**: Uses server-side rendering for most components, with client-side interactivity isolated to specific features (e.g., filtering, scroll effects).

📸 Screenshots
--------------

### Homepage

![Homepage Screenshot](https://i.ibb.co/0RThbyLD/screencapture-localhost-3000-2025-04-05-15-44-32.png)


🤝 Contributing
---------------

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (git checkout -b feature/your-feature).
3.  Make your changes and commit (git commit -m "Add your feature").
4.  Push to your branch (git push origin feature/your-feature).
5.  Open a Pull Request.


📬 Contact
----------

-   **Name**: Apeksha Verma
-   **Email**: <av.apekshaverma@gmail.com>
-   **GitHub**: [github.com/Apeksha16](https://github.com/Apeksha16)
-   **Portfolio**: [apeksha-verma.me](https://apekshaverma.com)