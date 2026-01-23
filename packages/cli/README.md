# Tailgrids CLI

The Tailgrids CLI is a command-line tool that helps you manage Tailgrids components in your React projects.

## Commands

### `init`

The `init` command initializes Tailgrids in your project. It creates a `tailwind.config.js` file with the Tailgrids preset and adds the necessary dependencies to your `package.json`.

#### Usage

To initialize Tailgrids in your project, run the following command in your project's root directory:

```bash
npx @tailgrids/cli init
```

### `add`

The `add` command adds Tailgrids components to your project. It copies the component files to your project's `components/tailgrids` directory and adds the required dependencies.

#### Usage

To add one or more components to your project, run the `add` command followed by the component IDs. You can find the component IDs in the [Tailgrids documentation](https://tailgrids.com/docs).

```bash
npx @tailgrids/cli add <component-id-1> <component-id-2> ...
```

For example, to add the `button` and `dialog` components, run the following command:

```bash
npx tailgrids add button dialog
```

This will create the following files in your project:

```
components/
└── tailgrids/
    ├── button.tsx
    └── dialog.tsx
```

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
