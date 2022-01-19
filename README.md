# React-Native Gallery

## Description

<p>The app was made in React-Native. </p>
<p>The gallery is loaded from unsplash.API, with the ability to open images with a higher extension.</p>

<p>The application was tested and developed exclusively on <b>Android</b>.</p>

<p>The application was initialized through <b>React Native CLI</b>.</p>

## Applied Technologies

<p>

- <b>@reduxjs/toolkit</b> - used for business logic inside the project.
- <b>axios</b>
- <b>react-native-fast-image</b> - this solved a lot of problems I had, such as:

  - Long loading and high data consumption via query
  - Ability to display gif-image for loader

- <b>react-native-pager-view</b> - has been added to further develop image flipping in open full extension

- <b>@react-navigation</b> - to navigate between two pages and be able to open the image in full size.
</p>


## Project Structure

<p>The entire implementation of the application is located in the folder <b>Bin</b>.</p>

```
bin
 ┣ asset    ### Fixed assets and сomponents that are often used in the site;
 ┃ ┣ common
 ┃ ┃ ┗ Loader.tsx
 ┃ ┗ Rolling.gif
 ┣ components 
 ┃ ┣ FullPhoto.tsx
 ┃ ┣ Header.tsx
 ┃ ┣ MainPage.tsx
 ┃ ┣ ScrollViewPhoto.tsx
 ┃ ┗ SinglePhotoBlock.tsx
 ┣ hooks    ### Custom hooks
 ┃ ┗ redux-use.ts
 ┣ models 
 ┃ ┣ IPhotoData.ts
 ┃ ┗ IRouteData.ts
 ┣ router
 ┃ ┗ Navigation.tsx
 ┣ service      ### Axios API
 ┃ ┗ API.ts
 ┣ store
 ┃ ┣ selectors
 ┃ ┃ ┗ main-selector.ts
 ┃ ┣ slicers
 ┃ ┃ ┗ mainSlice.ts
 ┃ ┣ thunks
 ┃ ┃ ┗ main-thunks.ts
 ┃ ┗ store.ts
 ┗ styleColor.ts    ### All permanent colors used in the project
```
