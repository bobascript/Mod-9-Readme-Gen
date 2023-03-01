// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// If there is no license, return an empty string
function renderLicenseLink(license) {}

// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `
  # ${data.title}
${data.license}
## Description
${data.description}
## Table of Contents
**[Installation](#Installation)**<br>
**[Usage](#Usage)**<br>
**[License](#License)**<br>
**[Contributing](#Contributing)**<br>
**[Tests](#Tests)**<br>
**[Questions](#Questions)**<br>
**[Video](#Video)**<br>
## Installation
${data.install} 
## Usage
${data.usage}
## License
This project is licensed under the ${license} license.
## Contributing
${data.contribution}
## Questions
If you have any questions about this project, open an issue or contact me directly at 
${
  data.email
}. If you want to take a look at more of my work click on the following link:
https://github.com/${
    data.username
  }. Thank you for your time and I hope you enjoyed.
## Video
For a walkthrough video click on the following link:


`;
}

module.exports = generateMarkdown;
