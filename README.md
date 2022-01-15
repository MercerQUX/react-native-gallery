# React-Native Gallery

## Description

<p>The application was developed as a test for <b>QuliSoft Development Company</b>.
Gallery loaded from unsplash.API, with the ability to open images in a higher extension.</p>

<p>The application was tested and developed exclusively on android.</p>

<p>The application was initialized through <b>React Native CLI</b>.</p>

## Applied Technologies

<p>

- <b>@reduxjs/toolkit</b> - the task was to use redux, but I chose RTK for cleaner and more convenient code, and support in the future.
- <b>axios</b>
- <b>react-native-fast-image</b> - this solved a lot of problems I had, such as:

  - Long loading and high data consumption via query
  - Ability to display gif-image for loader

- <b>react-native-pager-view</b> - has been added to further develop image flipping in open full extension

- <b>@react-navigation</b> - to navigate between two pages and be able to open the image in full size.
</p>

## Technologies Not Used

<p>

- <b>ref</b> - weren't used unless needed, and it's also not recommended by the React community.

- <b>HOC</b> - I gave preference to hooks, as the dependencies in the project allowed them to be used more efficiently, and also on this basis, RTK was used instead of Redux.

</p>

## Development Time

<p>

- Checked through Postman requests to Unsplash.API (about 30 minutes)
- Adjusted the working environment, which caused the most difficulties and errors (about 6 hours)
- Creating BLL via Redux ToolKit and axios API (about 1 hour)
- Before that, I had never even tried React-Native development, and building the app took time.
Creating components (about 3 hours)
- Navigation setup. It also caused problems in dependencies, and took time to study the documentation and implementation in the project (about 3 hours).
- Some intermediate details and styling (about 2 hours)

</p>

## Project Structure
