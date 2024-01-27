# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: https://github.com/Jake-Oz/rest-countries
- Live Site URL: https://rest-countries-one-rho.vercel.app/

## My process

### Built with

- Flexbox
- CSS Grid
- [Next.js](https://nextjs.org/) - React framework
- Tailwind CSS - for styles
- MUI Core Material UI (https://mui.com/material-ui/api/skeleton/) - for Skeleton components
- Vercel and GitHub - for configuration management and deployment

### What I learned

This was a good project for learning about server and client components using Next JS. I tried to minimise the use of client components where possible.

Also, this is the first time I have used Skeletons for the loading placeholder and used the MUI Core Skeleton API which was very quick and simple. The Skeleton Code is shown below:

```tsx
import { Skeleton } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <div className="px-4 mobile:px-24 pt-10 mobile:pt-20 dark:bg-veryDarkBlue_DarkModeBG h-full">
      <Skeleton variant="rectangular" width={150} height={48} />
      <div className="grid grid-cols-1 mobile:grid-cols-2 mt-20">
        <div className="col-span-1 flex flex-col justify-center items-start">
          <Skeleton variant="rectangular" width={600} height={400} />
        </div>
        <div className="col-span-1 flex flex-col justify-center items-start px-4 mobile:px-16">
          <Skeleton variant="text" sx={{ fontSize: "3rem" }} width={300} />
          <div className="flex flex-col mobile:flex-row justify-between items-baseline gap-4 w-full ">
            <div className="">
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
            </div>
            <div className="">
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
            </div>
          </div>
          <div className="mt-10 mobile:mt-16 text-lg font-semibold flex flex-col mobile:flex-row justify-start items-center gap-4 dark:text-white_DarkModeText_LightModeElements">
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={200} />
            <Skeleton variant="rectangular" width={36} height={12} />
            <Skeleton variant="rectangular" width={36} height={12} />
            <Skeleton variant="rectangular" width={36} height={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
```

## Author

- Frontend Mentor - [@Jake-Oz]https://www.frontendmentor.io/profile/Jake-Oz
