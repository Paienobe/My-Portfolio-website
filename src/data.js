// projects
import project1 from './assets/cryptostatz.png'
import project2 from './assets/feedback_app.png'
import project3 from './assets/invoice-app.png'
import project4 from './assets/Comments-app.png'
import project5 from './assets/countries-app.png'
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
import nextJsLogo from './assets/next-js.png'
import gitLogo from './assets/icons8-git.svg'

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
    name: 'Product Feedback App',
    description:
      'This is an app that where users can give feedback on a product. The users get to see requests that have been accepted by the creators and they can also interact with other users.',
    image: project2,
    link: 'http://product-feedback-app-seven.vercel.app/',
    code: 'https://github.com/Paienobe/Product-feedback-app',
  },
 {
    name: 'Invoice App',
    description:
      'This is an app that lets the user create invoices for business transactions. Users can create, edit or delete invoices. It is a very usefull application for keeping track of sales.',
    image: project3,
    link: 'https://invoice-app-gamma.vercel.app/',
    code: 'https://github.com/Paienobe/invoice-app',
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
   name: 'Countries App',
    description:
      'This is an app that displays information about all countries in the world. You can search for a specific country or filter countries by region.',
    image: project5,
    link: 'https://rest-countries-paienobe.netlify.app/',
    code: 'https://github.com/Paienobe/REST-Countries-API-with-color-theme-switcher',
  },
  {
    name: 'Entertainment Webapp',
    description:
      'This is an entertainment website/application. Its similar to popular streaming services. Users are shown a collection of movies and tv shows they can watch.',
    image: project6,
     link: 'https://entertainment-webapp.netlify.app/',
    code: 'https://github.com/Paienobe/Entertainment-Web-App',
  },
]

export const skills = [
  { name: 'html', image: htmlLogo },
  { name: 'css', image: cssLogo },
  { name: 'javascript', image: jsLogo },
  { name: 'react', image: reactLogo },
  { name: 'next.js', image: nextJsLogo },
  { name: 'vscode', image: vsCodeLogo },
  { name: 'git', image: gitLogo },
  { name: 'github', image: gitHubLogo },
  { name: 'tailwind', image: tailWindLogo },
]
