# Code Cracker 🥠

Code Cracker is an interactive learning platform designed to teach JavaScript algorithms and programming concepts through practical, hands-on examples. Users can explore predefined examples, edit code, and see the output directly in their browser.

## Features

- **Interactive Code Editor**: Powered by [Sandpack](https://sandpack.codesandbox.io/), allowing users to write, edit, and run JavaScript code in a sandboxed environment.
- **Dynamic Examples**: Explore various algorithms and programming concepts with predefined examples.
- **Custom Console**: View output directly in the embedded console.
- **Customizable Exercises**: Add or modify exercises with ease.

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Markdown Support**: [Nextra 4](https://nextra.site/) for documentation and content management
- **Code Execution**: [Sandpack React](https://sandpack.codesandbox.io/) for interactive coding environments
- **Styling**: Tailwind CSS for utility-first CSS styling
- **Search**: Pagefind for fast, client-side search

## Usage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/code-cracker.git
   cd code-cracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Building for Production

Build the application:

```bash
npm run build
```

### Post-Build Search Indexing

Generate the search index:

```bash
npm run postbuild
```

### Example Usage

To add a new exercise:

1. Create a new function in `src/sandpack-files/exampleFunctions.js`:

   ```javascript
   export const newExample = `
   function newFeature() {
     console.log('This is a new example!');
   }
   newFeature();
   `;
   ```

2. Use it in a Sandpack component:

   ```jsx
   import { newExample } from '../sandpack-files/exampleFunctions';

   <SandpackWrapper code={newExample} />;
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- [Nextra](https://nextra.site/) for the powerful documentation framework
- [Sandpack](https://sandpack.codesandbox.io/) for the interactive coding environment
- [Pagefind](https://pagefind.app/) for fast search functionality
