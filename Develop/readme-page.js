function generatePage(data) {
    return `# ${data.title}
    
    ## Licensing:
    [![license](https://img.shields.io/badge/license-${data.licenseing}-blue)](https://shields.io)
    
    ## Table of Contents
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[Contribution](#contribution)
    -[Testing](#testing)
    -[Questions](#questions)

    ### Description:
    ${data.description}

    ### Installation:
    ${data.installation}

    ### Usage:
    ${data.usage}

    ### Contribution
    ${data.contribtuion}

    ### Testing 
    ${data.testing}

    ### License
    ${data.license}

    ### Questions
    -Github: [${data.github}](https://github.com/${data.github})
    -Email: ${data.email}
    `;
}

module.exports = generatePage;