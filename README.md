This is a [Next.js](https://nextjs.org/) animation boilerplate using [GSAP](https://gsap.com/) and [Lenis](https://lenis.darkroom.engineering/).

This boilerplate comes equipped with a set of utilities and configurations to jump-start your Next.js project with animations:

- [GSAP](https://gsap.com/): For creating high-performance animations.
- [Lenis](https://lenis.darkroom.engineering/): For smooth scrolling experiences.
- [TailwindCSS](https://tailwindcss.com/): For utility-first styling.
- [Zustand](https://github.com/pmndrs/zustand): For simple, yet powerful state management.

### Utility functions included are:

- `timeAgo(timestamp, timeOnly)`: Calculates how long ago a date was from the current time.
- `capitalize(string)`: Capitalizes the first letter of a string.
- `cn(...classes)`: Combines class names and merges Tailwind CSS classes conditionally.
- `truncate(string, length)`: Truncates a string to a specified length and appends an ellipsis.
- `preloadImages(selector)`: Preloads images specified by the CSS selector to improve page loading time.

Example usages of these utilities can be found in the documentation section of each utility function within the codebase.

## Getting Started

To get started with this Next.js animation boilerplate, follow these steps to set up the project on your local machine.

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/madflows/nextjs-animation-boilerplate.git
```

2. Install the dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

### Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. You should see the boilerplate homepage with a title and a description.
3. You can customize the title and description by editing the `pages/index.js` file.
4. You can also add more pages to the `pages` directory and navigate to them using the URL bar.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
