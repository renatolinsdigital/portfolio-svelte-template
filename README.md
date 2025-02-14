# Portfolio Website Template made with Vite

This template should help get you started building your own professional portfolio. You can check the project running [here - link]

[PRINT - TBD]

## Technologies

Language: Typescript
Front-end Framework: Svelte
Bundler: Vite
Styling: Sass

## Instructions for using this template

It is advisable to have this skills

- [HTML + CSS]
- [Javascript]
- [Sass]
- [Typescript]
- [Svelte]

### Running the project

npm install, npm run dev

### Updating appearence

[TBD] create your own theme and css variables (font, color) icons

### Updating data

[TBD] create many page data by hand (including referencing images, by hand)

### Tips on Expanding This Project

- **Component Organization**: Maintain a clear distinction between domain-specific and shared components. Shared components should be independent of any domain logic and reusable across different projects. In contrast, domain components can focus on functionality tailored to this project without the need for reusability considerations.

- **Utilizing BoxContainer**: When placing small elements (such as text or buttons) without a parent component, consider wrapping them in the `<BoxContainer>` component. This approach allows for better management of their positioning and appearance through various properties related to alignment, layout, and background color.

- **Design System**: This project is designed to integrate with a design system. If you have a theme and reusable design definitions (such as colors, typography, and iconography), you can replace these definitions with your own.

- **Testing**: Implement tests for your components to ensure they function as expected, especially for domain components that are closely tied to your business. Shared components generally require less attention in testing, as they are potential candidates to be managed externally.

- **Accessibility**: Pay attention to accessibility standards. Use semantic HTML and ARIA attributes where necessary to make your application usable for all users.

- **Performance Optimization**: Regularly review your components for performance. Use Svelte's reactive features efficiently and avoid unnecessary re-renders to keep your application fast.

- **Documentation**: Keep your code well-documented. Use comments and README files to explain the purpose of your project, making it easier for others (or yourself in the future) to understand what is going on.

- **Version Control**: Use version control systems like Git to track changes in your project. This practice helps in managing updates and collaborating with others effectively.

### Building and Hosting

To build the project, you can run npm run build. To host the project you can use services like netlify. These services can host private projects that are in your github account, which is a fast and easy way to put your project online.

### How you can improve this project

you can create pages in wordpress and consume them via projects such as this one. So you can add calls to headless CMS APIS so you can manage website data more efficiently
Create yourself a backend that provide dynamic data to this website
Add a state management solutions such as redux or mobx
Add login so you can manage project via the /admin route for example
