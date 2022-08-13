# App domains

'CommitApp' - is the folder for 'commits' domain of the app. Here should be routes for separate pages such as: '/commits', '/commits/:commitSha'. 
It's assumed another domains of the app should be added later. For example, on same level as 'commits' folder, 'pull-requests' folder could be added with the same separate routes: '/pulls', '/pulls/:pullId'

# Structure

lib - folder for reusable components
lib/atoms - the smallest components, could be used as a bricks for bigger one. Atoms should not import any other component.
lib/molecules - could use composition of Atoms to render data
lib/organisms - could use composition of Molecules to render data. Could represents parts of pages.

{app_domain}/organisms - organisms from 'lib/organisms' with specific settings for certain domain of the app. For example: 'commits/organisms'.

# Browser Storage

As a storage for saving token SessionStorage is used. 

# App Storage

Storing data:
- github access token
- repository credentials
- commits from repository

React Context API is used to store data inside the app.
Due to small amount of data and no need to share data between components - Context is better for current purposes rather then any state management package. 
- No need to add additional dependency.
- Still possible to handle data inside the app using providers and consumers.
- Separate providers can be added to different app domains.

# Styling

For creating markup TailWindCss was chosen due to fast and easiest way to create suitable markup

# Tests

During the implementation a few tests were added.
For testing were used "@testing-library/react" package.

# Storybook

Also part of the components listed in the Storybook as an example how they could be rendered under different conditions.
