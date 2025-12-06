# 🪙 Coin Siren

A modern, responsive web application built with React Router that provides a beautiful and intuitive interface for cryptocurrency information.

## ✨ Features

- 🚀 **Modern Stack** - Built with React Router 7 and latest React 19
- 📱 **Fully Responsive** - Perfect experience on desktop, tablet, and mobile devices
- 🎨 **Beautiful UI** - Clean and modern interface with smooth animations using Framer Motion
- ⚡ **Fast Performance** - Optimized with server-side rendering and hot module replacement
- 🎯 **Type-Safe** - Full TypeScript support for better development experience
- 💅 **Styled with Tailwind** - Modern utility-first CSS framework
- 🐳 **Docker Ready** - Easy deployment with Docker containerization

## 📸 Screenshots

<img width="1470" height="657" alt="image" src="https://github.com/user-attachments/assets/b781aae4-f23b-47a1-bff7-6cc9caa163f1" />


## 🛠️ Tech Stack

- **Framework:** [React Router 7](https://reactrouter.com/) - Modern full-stack React framework
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **UI Library:** [React 19](https://react.dev/) - Latest React version
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations:** [Framer Motion](https://www.framer.com/motion/) - Production-ready animations
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Linting:** [ESLint](https://eslint.org/) - Code quality and consistency
- **Formatting:** [Prettier](https://prettier.io/) - Code formatting
- **Package Manager:** [pnpm](https://pnpm.io/) - Fast, disk space efficient
- **Build Tool:** [Vite](https://vite.dev/) - Next generation frontend tooling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/leonaldopasaribu/coin-siren.git
   cd coin-siren
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (if needed)
   
   Create a `.env` file in the root directory:
   ```env
   # Add your environment variables here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:5173](http://localhost:5173) to see the application.

## 📝 Development

### Available Scripts

- `pnpm dev` - Start development server with HMR
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm lint` - Check code with ESLint
- `pnpm lint:fix` - Fix ESLint errors automatically
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

### Project Structure

The application uses:
- **React Router App Directory** - Modern file-based routing
- **TypeScript** - Full type safety across the codebase
- **Server-Side Rendering** - Better SEO and performance
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting

## 🌐 Deployment

### Deploy with Docker

Build and run using Docker:

```bash
# Build the Docker image
docker build -t coin-siren .

# Run the container
docker run -p 3000:3000 coin-siren
```

The containerized application can be deployed to any platform that supports Docker, including:
- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

For traditional Node.js deployment:

1. Build the application:
   ```bash
   pnpm build
   ```

2. Deploy the following files:
   ```
   ├── package.json
   ├── pnpm-lock.yaml
   └── build/
       ├── client/    # Static assets
       └── server/    # Server-side code
   ```

3. Start the production server:
   ```bash
   pnpm start
   ```

## 📚 Learn More

To learn more about the technologies used in this project:

- [React Router Documentation](https://reactrouter.com/) - Learn about React Router features and API
- [React Documentation](https://react.dev/) - Learn React
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript documentation
- [Framer Motion](https://www.framer.com/motion/) - Animation library documentation

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Leonaldo Pasaribu**

- GitHub: [@leonaldopasaribu](https://github.com/leonaldopasaribu)
- LinkedIn: [Leonaldo Pasaribu](https://linkedin.com/in/leonaldo-pasaribu)

---

<div align="center">
  Made with ❤️ using React Router
</div>
