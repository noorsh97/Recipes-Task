# Recipes

## Introduction
An application that allows users to view recipes and add them to their own personal cookbook.


This project built using React, Bundled with Vite and Tested with Cypress.
. Follow the instructions below to set up and run application.


## Client Setup
1. Install the required dependencies:
    ```bash
    $ npm install
    ```

2. Run the development server:
    ```bash
    $ npm run dev
    ```
   This will start the client development server and open the application in your default web browser.
   this should be working on `localhost:3000` 

## Accessing the Application
Once client are running, you can access the application by opening your web browser and navigating to the specified URLs.

- Client URL: [http://localhost:3000]

## Live Example
You can view live example of this application by clicking the link below:
[here](https://taskrecipes.web.app/)


## Testing
Tests are built using cypress

To start the test type the following in your terminal 
```sh 
npx cypress open
```

## File structure
```
└── 📁src
    └── App.tsx
    └── 📁asstes
        └── 📁FoodTypes
            └── appetizer.png
            └── beverage.png
            └── bread.png
            └── breakfast.png
            └── dessert.png
            └── drink.png
            └── fingerfood.png
            └── maincourse.png
            └── marinade.png
            └── salad.png
            └── sauce.png
            └── sidedish.png
            └── snack.png
            └── soup.png
        └── index.ts
        └── loader.svg
        └── 📁Logo
            └── light.png
        └── placeholder.png
    └── 📁components
        └── index.ts
        └── 📁singleSelect
            └── index.tsx
        └── 📁textInput
            └── index.tsx
    └── 📁constants
        └── colors.ts
        └── data.ts
        └── env.ts
        └── index.ts
    └── 📁hooks
        └── index.ts
        └── useAxios.ts
        └── useScrollPosition.ts
    └── index.css
    └── 📁layouts
        └── index.ts
        └── Layout.tsx
    └── main.tsx
    └── 📁pages
        └── 📁home
            └── 📁Card
                └── index.tsx
                └── indexCard.cy.tsx
            └── 📁FilterHeader
                └── FoodTypeButton.tsx
                └── index.tsx
                └── OptionSelector.tsx
                └── SearchBar.tsx
            └── index.tsx
        └── index.ts
        └── 📁recipe
            └── index.tsx
    └── 📁routes
        └── index.tsx
    └── 📁types
        └── index.ts
        └── recipe.ts
        └── recipes.ts
    └── vite-env.d.ts
```