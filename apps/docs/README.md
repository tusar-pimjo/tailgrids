# TailGrids Documentation

This is the official documentation for TailGrids, a library of UI components for Tailwind CSS.

## Overview

This is a [Next.js](https://nextjs.org/) application built with [Fumadocs](https://fumadocs.dev/) to create a powerful and searchable documentation site for TailGrids. The documentation is written in MDX and is located in the `content` directory.

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for building production-ready applications.
- [Fumadocs](https://fumadocs.dev/) - A framework for building documentation sites with Next.js.
- [React](https://react.dev/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [MDX](https://mdxjs.com/) - A format that allows you to write JSX in your Markdown documents.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.

## Getting Started

To get started with the documentation site locally, follow these steps:

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

3.  **Open your browser:**

    Open [http://localhost:3000](http://localhost:3000) to see the result.

## Content Management

The documentation content is located in the `content` directory. The content is written in MDX, which allows you to use React components within your Markdown files.

The `content` directory is organized into the following sections:

- `components`: Contains the documentation for each TailGrids component.
- `get-started`: Contains the "Get Started" guides, such as installation and usage instructions.

To add a new documentation page, simply create a new `.mdx` file in the appropriate directory. The file will be automatically picked up by the Fumadocs content pipeline.
