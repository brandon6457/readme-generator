// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(description, installation, usage, credits, license, features, contributions, tests, github, email) {
   return `# <Your-Project-Title>
  ## Description
  ${description}
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${nstallation}
  ## Usage
  ${usage}
  ## Credits
  ${credits}
  ## License
  ${license}
  ## Features
  ${features}
  ## How to Contribute
  ${contributions}
  ## Tests
  ${tests}
  ## Contact
  ${github}
  ${email}`;
}

module.exports = generateMarkdown;
