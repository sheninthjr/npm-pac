# Forms

A simple and customizable form component for React that reduces stress and handles email, username, and password input fields, as well as the onSubmit event.

### Installation

To install Forms, run the following command in your terminal:

```bash
npm install @sheninthjr/form
```

or

```bash
yarn add @sheninthjr/form
```

### Usage

To use Forms in your project, import the component and use it in your JSX code like this:

```jsx
import { Forms } from "@sheninthjr/form";

const onSubmit = (values) => {
  console.log(values);
};

const App = () => {
  return (
    <Forms
      onSubmit={onSubmit}
      username="username"
      password="password"
      email="email@example.com"
    />
  );
};
```

### Props

Forms supports the following props:

`onSubmit`: A function that is called when the form is submitted. It receives an object containing the values of the email, username, and password fields.
`username`: The initial value of the username field.
`password`: The initial value of the password field.
`email`: The initial value of the email field.

### Customization

Forms is built using the [Radix UI library](https://www.radix-ui.com/), which provides a wide range of customizable and accessible UI components. To customize Forms, you can override the default styles of the Radix UI components used in the Forms component.

For example, to change the background color of the form, you can use the className prop to apply a custom CSS class:

```jsx
import { Forms } from "@sheninthjr/form";

const onSubmit = (values) => {
  console.log(values);
};

const App = () => {
  return (
    <Forms
      onSubmit={onSubmit}
      username="username"
      password="password"
      email="email@example.com"
      className="bg-gray-200"
    />
  );
};
```

### Contributing

Contributions to Forms are welcome! To contribute, please follow these steps:

Fork this repository.
Create a new branch for your changes.
Make your changes and commit them to your branch.
Push your changes to your forked repository.
Open a pull request against the main branch of this repository.

### License

Forms is open-source software licensed under the MIT License.

I hope this helps! Let me know if you have any further questions.
