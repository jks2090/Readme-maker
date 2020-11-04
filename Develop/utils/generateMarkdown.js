// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/${encodeURI(data.license)}-License-<color>)
  ## Table of Contents
  *[Installation](#Installation)
  *[Usage](#Usage)
  *[License](#License)
  *[Contributions](#Contributions)
  *[Tests](#Tests)
  *[Questions/Contact Me](#Questions)
  # Installation
  ${data.instructions}
  # Usage
  ${data.usage}
  # License
  ${data.license}
  # Contributions
  ${data.contributions}
  # Tests
  ${data.tests}
  # Questions
    How do I get in contact?
    Email me at ${data.email} 
    What is your official GitHub page?
    https://github.com/${data.github}
    What is your linked in?
    Contact me on linked in at ${data.linkedin}
`;
}

module.exports = generateMarkdown;
