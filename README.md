# Mevo Front End Engineer Exercise

## Part 1a: Vehicles on maps

Build a static website (no backend) using React JS that queries the Mevo APIs (specifically the public endpoints ) and displays the position of Mevo vehicles on a map. 

## Part 1b: Improving the map

Extend your map from just displaying the Mevo vehicle pins. Feel free to get as creative as you like in the pursuit of making your website more useful or exciting.

## Part 2: Working as a Software Engineer
In a few paragraphs (or by another method of your choice), tell us about each of the following:
* What has been your favourite place to work so far? What was it about working there that made it
your favourite?
* What’s something that you wish you could have as a part of your job?
* Reading the [introduction to Mevo](https://developer.mevo.co.nz/) on our developer site, what makes you the most excited about
the potential of working as a Software Engineer here?

## MVP user stories
As a user I want to:
- [x] see where the Mevo vehicles are located in Wellington on a map when the page loads.
- [x] see the Mevo Home Zones marked on the same map when the page loads so I can see where I can leave a Mevo vehicle at the end of my trip.
- [x] be able to zoom in and out of the map using the navigation controls as well as by clicking/focusing on the map.
- [x] be able to move around the map.
- [x] find out more information about Mevo (including home zones) through navigation links.
- [ ] be able to read answers to Part 2 of the exercise through the 'Questions' navigation links.

## Stretch user stories - to be worked on in future
As a user I want to:
- [ ] be able to find the closest available Mevo to my current location.
- [ ] be able to get navigation directions to the closest Mevo.
- [ ] see the buildings on the map in 3D and in street view.

## Tech stack
* [Create React App](https://github.com/facebook/create-react-app)
* [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/)
* [Mevo Public API](https://developer.mevo.co.nz/docs/public/introduction)
* Testing: Jest & React Testing Library
* Deployment: GitHub pages/Heroku - TBD

## File structure
* `public` - source index.html and CSS files.
* `src` - root JS files.
* `src\assets` - images and icons.
* `src\components` - JSX components and tests.
* `src\utils` - utility functions and tests.

## Limitations
* Currently a partially responsive web app.
* Cross browser functionality not guaranteed.

## Challenges and reflections
* Getting the app up and running took me a while as I hadn't started a project from scratch in a long time. After several tries with `create-react-app` I and customising the boilerplate I finally got it working.
* Learning to use Mapbox GLJS with React was a curve and I was mainly referring to the documentation and examples provided to help guide me. I found out too late that there's a `react-mapbox-gl` package so decided to stick with what I had already started. I can see how it's neater and more efficient so I'll use it for my next map project.
* Spent some time trying to get component test for Map up and running but failed. On Google search it looks like it's a known issue to get Mapbox rendering in tests. If I still can't get tests running by end of Sunday I'll write down the test cases instead.

- - - -

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)