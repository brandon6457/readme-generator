// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   return `![license:${license}](https://img.shields.io/badge/license-${license}-blue)`
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   return `[license:${license}](https://opensource.org/licenses/${license}/)`
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, credits, license, features, contributions, tests, github, email}) {
   return `# ${title}
   ${renderLicenseBadge(license)}
  ## Description
  ${description}
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${installation}
  ## Usage
  ${usage}

[Link to video](/assets/images/README-video)

  ## Credits
  ${credits}
  ## License
  ${renderLicenseLink(license)}
  ## Features
  ${features}
  ## How to Contribute
  ${contributions}
  ## Tests
  ${tests}
  ## Contact
  github: [${github}](https://github.com/${github})
  email: ${email}`;
}

module.exports = generateMarkdown;
