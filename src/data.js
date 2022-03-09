// projects
import project1 from './assets/countries-app.png'
import project2 from './assets/jobs-app.png'
import project3 from './assets/Comments-app.png'
import project4 from './assets/space-tourism.png'
import project5 from './assets/r-p-s.png'

// skills
import htmlLogo from './assets/icons8-html-5 (1).svg'
import cssLogo from './assets/icons8-css3.svg'
import jsLogo from './assets/icons8-javascript.svg'
import reactLogo from './assets/icons8-react.svg'
import sassLogo from './assets/icons8-sass-48.png'
import vsCodeLogo from './assets/icons8-visual-studio-code-2019.svg'
import gitHubLogo from './assets/icons8-github.svg'
import tailWindLogo from './assets/tailwindcss-icon.svg'

export const projects = [project1, project2, project3, project4, project5]
export const projectDetails = [
  {
    name: 'Countries App',
    description:
      'This is an app that displays information about all countries in the world. You can search for a specific country or filter countries by region.',
    image: project1,
    link: 'https://rest-countries-paienobe.netlify.app/',
    code: 'https://github.com/Paienobe/REST-Countries-API-with-color-theme-switcher',
  },
  {
    name: 'Jobs Filter App',
    description:
      'This is an app that displays a certain amount of jobs. The jobs can be filtered by passing in some requirements.',
    image: project2,
    link: 'https://static-job-listings-app.netlify.app/',
    code: 'https://github.com/Paienobe/Static-Job-Listings-App',
  },
  {
    name: 'Comments App',
    description:
      'This is an interactive comments section app. Users can add comments, delete comments, reply to comments, edit comments and replies. I also made use of local storage to preserve the comments.',
    image: project3,
    link: 'https://interactive-comments-app.netlify.app/',
    code: 'https://github.com/Paienobe/Interactive-Comments-App',
  },
  {
    name: 'Space Tourism Site',
    description:
      'This is a multi-page website built with React. It displays information about destinations for a space misssion. I also shows info about the crew and technologies used for the mission.',
    image: project4,
    link: 'https://space-tourism-website-paienobe.netlify.app/',
    code: 'https://github.com/Paienobe/Space-Tourism-Website',
  },
  {
    name: 'Rock, Paper, Scissors',
    description:
      'This is a simple rock, paper, scissors game. Users select an action and the computer picks another to decide a winner',
    image: project5,
    link: 'https://rock-paper-scissors-app-paienobe.netlify.app/',
    code: 'https://github.com/Paienobe/Space-Tourism-Website',
  },
]

export const skills = [
  { name: 'html', image: htmlLogo },
  { name: 'css', image: cssLogo },
  { name: 'javascript', image: jsLogo },
  { name: 'react', image: reactLogo },
  { name: 'sass', image: sassLogo },
  { name: 'vscode', image: vsCodeLogo },
  { name: 'github', image: gitHubLogo },
  { name: 'tailwind', image: tailWindLogo },
]
