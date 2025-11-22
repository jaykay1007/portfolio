# Jayakkumar K - Portfolio Website

A modern, animated portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases my 5+ years of experience as a React & Next.js developer with expertise in AI-SDK integrations.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Stunning Animations**: Smooth animations powered by Framer Motion
- **Mobile-First Design**: Fully responsive across all devices
- **Dark/Light Mode**: Theme switching with next-themes
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **SEO Friendly**: Meta tags and structured data for better search visibility
- **Interactive UI**: Engaging user experience with hover effects and transitions
- **Accessible**: WCAG compliant with proper ARIA labels

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Next Themes
- **Type Animation**: React Type Animation

## 📦 Installation

1. **Clone the repository**:
```bash
cd c:/Users/Admin/Documents/Projects/portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx           # Main landing page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── navbar.tsx         # Navigation component
│   │   ├── theme-provider.tsx # Theme context provider
│   │   └── sections/
│   │       ├── hero.tsx       # Hero section with typing animation
│   │       ├── skills.tsx     # Skills showcase with progress bars
│   │       ├── experience.tsx # Timeline of work experience
│   │       ├── projects.tsx   # Project cards with metrics
│   │       └── contact.tsx    # Contact form and information
│   └── lib/
│       ├── data.ts            # Portfolio data and content
│       └── utils.ts           # Utility functions
├── public/
│   └── resume.pdf             # Resume file (add your PDF here)
├── package.json               # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.js            # Next.js configuration
└── README.md                 # Project documentation
```

## 🎨 Key Sections

### Hero Section
- Dynamic typing animation showcasing different roles
- Gradient text effects and animated background
- Social media links and CTAs
- Mobile-optimized layout

### Skills Section
- Categorized skills (Frontend, State Management, AI Integration)
- Animated progress bars showing proficiency levels
- Years of experience for each skill
- Additional skills displayed as tags

### Experience Section
- Interactive timeline with alternating layout
- Company details and duration
- Key achievements with metrics
- Technology tags for each role
- Awards and certifications

### Projects Section
- Grid layout with hover effects
- Key metrics displayed prominently
- Modal view for detailed project information
- Technology stack visualization
- Links to live demos and source code

### Contact Section
- Professional contact form
- Direct contact information
- Social media links
- Call-to-action for resume download

## 📱 Responsive Design

- **Mobile**: Single column layout with touch-friendly interactions
- **Tablet**: Optimized two-column grid where appropriate
- **Desktop**: Full multi-column layout with hover effects

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with one click

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify

## 📝 Customization

### Update Personal Information
Edit `src/lib/data.ts` to update:
- Personal details
- Skills and experience
- Projects and achievements
- Contact information

### Modify Theme
Edit `src/app/globals.css` to customize:
- Color scheme
- Typography
- Spacing
- Animations

### Add Resume
Place your PDF resume in the `public` folder as `resume.pdf`

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📈 Performance

- Lighthouse Score: 95+ (Performance)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Cumulative Layout Shift: < 0.1

## 🤝 Contact

**Jayakkumar K**
- Email: jaykay.reactdev@gmail.com
- Phone: +91 9629070412
- LinkedIn: [linkedin.com/in/jayakkumar-k-545997127](https://linkedin.com/in/jayakkumar-k-545997127)
- Location: Erode, Tamil Nadu, India

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Jayakkumar K
