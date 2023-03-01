// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// If there is no license, return an empty string
function renderLicenseLink(license) {}

// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `
  # ${data.title}

## Description
${data.description}

## Table of Contents
**[Installation](#Installation)
**[Usage](#Usage)
**[License](#License)
**[Contributing](#Contributing)
**[Questions](#Questions)
**[Video](#Video)

## Installation
${data.install}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contribution}

## Questions
If you have any questions about this project, open an issue or contact me directly at 
${
  data.email
}. If you want to take a look at more of my work click on the following link:
https://github.com/${
    data.username
  }
  
## Video
For a walkthrough video click on the following link:


`;
}

module.exports = generateMarkdown;
