# Mevo Front End Engineer Exercise

This repo is an exercise for the front end engineer role at [Mevo](https://mevo.co.nz/).

Click [here](https://aisyah-t.github.io/mevo-frontend-exercise/) to check out the deployed version of my app.

To run the app locally, in your terminal:
1) `git clone https://github.com/aisyah-t/mevo-frontend-exercise.git`
2) `cd` to the cloned repo.
3) Run `npm install`.
4) Once complete run `npm start`.
5) If this doesn't automatically load your browser navigate to [http://localhost:3000](http://localhost:3000) in your browser.

The tasks for the exercise as well as my planning and reflections are outlined below.

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
- [x] find out more information about Mevo (including home zones) through navigation links.
- [x] be able to read answers to Part 2 of the exercise through the 'Questions' navigation links.

## Stretch user stories - to be worked on in future
As a user I want to:
- [ ] be able to find the closest available Mevo to my current location.
- [ ] be able to get navigation directions to the closest Mevo.
- [ ] see the buildings on the map in 3D.

## Tech stack
* [Create React App](https://github.com/facebook/create-react-app)
* [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/)
* [Mevo Public API](https://developer.mevo.co.nz/docs/public/introduction)
* Testing: Jest & React Testing Library
* Deployment: GitHub pages

## File structure
* `public` - source index.html and CSS files.
* `src` - root JS files.
* `src\assets` - images and icons.
* `src\components` - JSX components and tests.
* `src\utils` - utility functions and tests.

## Limitations
* Cross browsers and devices functionality not guaranteed.
* Test coverage is limited due to time constraints. I've included to do the test cases in the test files.

## Challenges and reflections
* Getting the app up and running took me a while as I hadn't started a project from scratch in a long time. After several tries with `create-react-app` I and customising the boilerplate I finally got it working.
* Learning to use Mapbox GLJS with React was a curve and I was mainly referring to the documentation and examples provided to help guide me. I found out too late that there's a `react-mapbox-gl` package so decided to stick with what I had already started. I can see how it's neater and more efficient so I'll use it for my next map project.
* Spent some time trying to get component test for Map up and running and failed. On Google search it looks like it's a known issue to get Mapbox rendering in component tests. I'll refer to [this](https://github.com/mapbox/mapbox-gl-js-mock/issues/27) in future.
