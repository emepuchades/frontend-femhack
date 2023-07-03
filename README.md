 <h1>
 Frontend FemHack Challenge
</h1>
<h1 align="center">
   <img src="https://github.com/emepuchades/frontend-femhack/assets/100128850/f36f1a20-5a0c-4956-87b2-16e15a8f1013" width="120px" alt=" Web Evolution">
   <p align="center">Project: Web Evolution</p>

  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"  alt="react" /></a>
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" width="120px"  alt="built-with-love" /></a>
</h1>

## Introduction
<p>"Web Evolution" was born from a proposal for a femhack hackathon.</p>
<p>A landing page where you will be able to see various graphs about the evolution of the internet and the number of users who have been part of this event.</p>

##  Installation guide
This ReactJS application was created using  [Vite](https://vitejs.dev/), a fast development environment for JavaScript web applications.

### Prerequisites

Make sure you have the Node installed on your machine:
- Node.js: [Download and install Node.js](https://nodejs.org)
- Backend: [Download and install](https://github.com/nuwe-reports/femhack-II-frontend-challenge) .In this case, I used Docker. You need to have Docker running in order to make requests to localhost:8080

### Installation steps

1. Clone this repository to your local machine
```bash
git clone https://github.com/emepuchades/frontend-femhack
 ```

2. Navigate to the project directory.
```bash
cd frontend-femhack
```
3. Install the project dependencie
```bash
npm install
```

### Run the application

```bash
npm run dev
```
You will be able to access your application at http://localhost:5173

## Technology stack:
<b> Main framework used: </b>  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"  alt="react" /></a>

## Libraries used

Here are some of the libraries that were used in this project:

- [Axios](https://axios-http.com/): A library for making HTTP requests from the client.
- [Nivo](https://nivo.rocks/): A data visualization library that provides reusable graphical components.

## Achievements
1. I created the 4 graphs that were requested
2. I have made an animation for a graph
3. I have managed to format the data to be able to send it to the graph
4. I have managed to work with a graphics library that I had barely programmed before.
5. I have created a good design for a landing page

## Objective analysis of the results obtained
The results obtained have been satisfactory. I have managed to display the requested data, create graphs, and some animations without using frameworks. Although the landing page could still be improved, I believe that with the time I had, I have done a good job.

## Future steps.
- Refactoring the services file, I have all the functions that make server requests in a single file, and the functions could also be refactored.
- Make the website responsive.
- Fix some bugs in the graphs.
- Optimize data loading.


## Explanation of each decision made in each task:
I have used HTML, CSS, and ReactJS. I have opted for React because I have been working with this programming language for a while and I feel very comfortable with it.
Libraries used:
- [Axios](https://axios-http.com/): I chose it because it is a very useful library, and when it comes to making requests, it is one of the best.
- [Nivo](https://nivo.rocks/): I chose Nivo because it has a wide collection of charts, which allows me to use various types of charts without adding any additional libraries.

### Task 1, 2, 3

1. First, I spent some time reviewing the tasks that needed to be done and based on that, I added tasks to the Trello board. Once the tasks were organized, before starting the programming, I searched for information on how to create the charts since there are many libraries available.
2. After choosing the libraries, I set up the Axios configuration to fetch data from the server.
3. For the first chart, I started by choosing the chart type, in this case, a bar chart, as I needed to add animation, and I believe it is easier to accomplish with this type of chart. Knowing the data I needed to pass to the Nivo's BarChart component, I started fetching the data from the server and mapped it to the correct format. Regarding the animation, I used the "animate" component, which allowed me to animate the chart, and with the help of a useEffect and a setTimeout, I made each year appear every second.
4. For the second chart, I chose the heatmap. I worked on the function to retrieve data from the backend. I realized that there were many countries and a lot of data. I needed to filter it, but in the end, I decided to select a few countries and their corresponding user data for each year.
5. The third chart was a pie chart. Having learned from the previous chart, I found it easier to apply filters to this one. So, I created the function to fetch the data from the server and filtered it based on years. When displaying it, I added a select input where you can choose the year, and the top countries displayed in the pie chart change accordingly.
6. For the fourth chart, I chose a map chart available in the Nivo library. This one was relatively easy to implement but a bit tedious, as there was limited information available. I managed to obtain a required file (world_countries) to implement the map. Then, I had to create a JSON file with country abbreviations. Additionally, I created a new function to fetch the data. For this particular chart, since it was open-ended, I represented user data for each country in the year 2020.

### Associated tasks:

1. Leave the styling for the end. I started working on it and opted for a simple yet appealing style for the users, including a couple of text animations.
2. Implement a loading feature. Since the graphs take a few seconds to load, I decided to create a loading indicator.
3. Number formatting. I created a function to abbreviate large numbers as sometimes they didn't fit well within the charts.
4. Create a small navbar and a footer.
5. Add an icon for the website.

## Results:
<p>First chart </p>

![principal1_AdobeExpress](https://github.com/emepuchades/frontend-femhack/assets/100128850/ebc4288b-e926-489d-871a-7d91a752cfac)

<p>Second chart</p>

![segunda_AdobeExpress](https://github.com/emepuchades/frontend-femhack/assets/100128850/37818914-982c-4421-a274-2dfeee612433)

<p>Fourth chart</p>

![mapa](https://github.com/emepuchades/frontend-femhack/assets/100128850/bc8ce8f9-b76b-40a5-8818-f8ae3d04d58a)
