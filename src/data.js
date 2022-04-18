// projects
import project1 from './assets/cryptostatz.png'
import project2 from './assets/countries-app.png'
import project3 from './assets/jobs-app.png'
import project4 from './assets/Comments-app.png'
import project5 from './assets/space-tourism.png'
import project6 from './assets/ewa.png'

// skills
import htmlLogo from './assets/icons8-html-5 (1).svg'
import cssLogo from './assets/icons8-css3.svg'
import jsLogo from './assets/icons8-javascript.svg'
import reactLogo from './assets/icons8-react.svg'
import sassLogo from './assets/icons8-sass-48.png'
import vsCodeLogo from './assets/icons8-visual-studio-code-2019.svg'
import gitHubLogo from './assets/icons8-github.svg'
import tailWindLogo from './assets/tailwindcss-icon.svg'

export const projects = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
]
export const projectDetails = [
  {
    name: 'CryptoStats',
    description:
      'This is an app for getting the current price of cryptocurrencies and the entire crypto market. Users can search for crypto currencies and view charted data of these currencies.',
    image: project1,
    link: 'https://cryptostatz.netlify.app/',
    code: 'https://github.com/Paienobe/CryptoStats',
  },
  {
    name: 'Countries App',
    description:
      'This is an app that displays information about all countries in the world. You can search for a specific country or filter countries by region.',
    image: project2,
    link: 'https://rest-countries-paienobe.netlify.app/',
    code: 'https://github.com/Paienobe/REST-Countries-API-with-color-theme-switcher',
  },
  {
    name: 'Jobs Filter App',
    description:
      'This is an app that displays a certain amount of jobs. The jobs can be filtered by passing in some requirements.',
    image: project3,
    link: 'https://static-job-listings-app.netlify.app/',
    code: 'https://github.com/Paienobe/Static-Job-Listings-App',
  },
  {
    name: 'Comments App',
    description:
      'This is an interactive comments section app. Users can add comments, delete comments, reply to comments, edit comments and replies. I also made use of local storage to preserve the comments.',
    image: project4,
    link: 'https://interactive-comments-app-paienobe.netlify.app/',
    code: 'https://github.com/Paienobe/Interactive-Comments-App',
  },
  {
    name: 'Space Tourism Site',
    description:
      'This is a multi-page website built with React. It displays information about destinations for a space misssion. I also shows info about the crew and technologies used for the mission.',
    image: project5,
    link: 'https://space-tourism-website-paienobe.netlify.app/',
    code: 'https://github.com/Paienobe/Space-Tourism-Website',
  },
  {
    name: 'Entertainment Webapp',
    description:
      'This is an entertainment website/application. Its similar to popular streaming services. Users are shown a collection of movies and tv shows they can watch.',
    image: project6,
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
