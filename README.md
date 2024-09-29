# React Router Patterns

#### Note: Using v6 instead of v5 for this project
I decided that I am going to be completing this assignment using v6 instead of v5. I don't feel that it's smart to be learning outdated libraries that are being phased out, which is why I am using v6 react router and will be studying that on my own. I will make sure to complete all the tasks that are assigned to me, just not in v5 fashion for this unit.

Thank you.

### Part 1: React Router Dog Finder

- [x] Build an app that routes to different dogs and displays information on that dog when you're at that route.

The routes should look like this:

- [x] */dogs* is the homepage and shows all three dogs
- [x] clicking on a dog from the homepage takes you to that dog's route. For example, clicking onWhiskey will take you to */dogs/whiskey*.
- [x] Every other endpoint not listed should redirect you to */dogs*.

#### Recommended Structure

```js
export default {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}
```
The `<App />` should render:

- [x] a `<Nav />` component with the dogs names passed as props

- [x] a `<Switch>` with your `<Route/>` declarations

### Part 2: React Router Color Factory

The goal of this exercise will be to use React Router to build an app that lets you view colors and add new colors.

#### User Stories

- [x] 1. As a user, I can go to */colors* to see a list of all available colors.

- [x] 2. As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color in all its glory.
    - [x] Note: The route here should be */colors/:color*

- [x] 3. As a user, I can click on a button to show a form that will let me add a new color.
    - [x] Note: that you can give an *input* a type of *color* if you're trying to select a color
    - [x] Note: the route here should be */colors/new*

- [x] 4. As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.

- [x] 5. As a user, if I try to navigate to a color page that doesn't exist (ie. */colors/nope*), I am redirected to the colors index page.

- [x] 6. As a user, if I try to navigate to an invalid url (ie. */not-valid*), I am redirected to the colors index page.
