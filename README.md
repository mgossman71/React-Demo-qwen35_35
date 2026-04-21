# MJG Firearms - FFL Transfer Services

A professional React website for MJG Firearms, providing Federal Firearms License (FFL) transfer services.

## Features

- ✅ Modern React 18 with Vite
- ✅ Tailwind CSS for styling
- ✅ Fully responsive design
- ✅ Professional FFL-compliant design
- ✅ Docker support with Nginx
- ✅ Multi-page application:
  - Home page with hero and features
  - Services page (FFL transfers, online purchases, trust transfers, curio/relic)
  - How It Works page (6-step process)
  - Eligibility Requirements page
  - Contact page with form

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS
- **Docker** - Containerized deployment
- **Nginx** - Production web server

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/mgossman71/React-Demo-qwen35_35.git
cd React-Demo-qwen35_35
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173)

### Production Build with Docker

1. Build and run with Docker Compose:
```bash
docker compose up --build
```

2. Access the site at [http://localhost:8080](http://localhost:8080)

3. Stop the containers:
```bash
docker compose down
```

### Production Build Without Docker

1. Build for production:
```bash
npm run build
```

2. The optimized build will be in the `dist/` directory

3. Deploy the `dist/` folder to any static hosting or serve with Nginx

## Docker Deployment

The app includes a production-ready Docker setup:

- **Multi-stage build** - Optimized for production
- **Nginx** - Serving static files with gzip compression
- **Security headers** - X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- **SPA routing** - Proper handling of client-side routes
- **Caching** - Optimized static asset caching

### Custom Port

To use a different port, modify `docker-compose.yml`:
```yaml
ports:
  - "YOUR_PORT:80"
```

## Site Content

### Phone Number
**(612) 508-6258**

### Business Information
- **Name**: MJG Firearms
- **Location**: Andover, MN 55304
- **Hours**: Mon-Fri 9AM-6PM, Sat 10AM-4PM

### Services Offered
1. Private Party Transfers - $75
2. Online Purchase Transfers - $75
3. Trust & Estate Transfers - $125
4. Curio & Relic Transfers - $95

## File Structure

```
mjg-firearms/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Eligibility.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── site.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── package.json
├── vite.config.js
└── README.md
```

## Customization

To update site content, edit `src/data/site.js`. This file contains all the text and configuration for the website, making it easy to update:

- Business name and tagline
- Contact information
- Services and pricing
- Process steps
- Eligibility requirements
- Navigation links

## License

Private repository owned by MJG Firearms.

## Support

For questions or support, contact:
- **Phone**: (612) 508-6258
- **Email**: info@mjgfirearms.com
