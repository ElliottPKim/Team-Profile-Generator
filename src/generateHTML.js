// Manager card
const generateManager = function (manager) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class = "card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class = "card-body">
                <p class = "id">ID: ${manager.id}</p>
                <p class = "email">Email: <a href = "mailto:${manager.email}">${manager.email}</a></p>
                <p class = "office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class = "card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class = "card-body">
                <p class = "id">ID: ${engineer.id}</p>
                <p class = "email">Email: <a href = "mailto:${engineer.email}">${engineer.email}</a></p>
                <p class = "github">Github: <a href = "https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

// Intern card
const generateIntern = function (intern) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class = "card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class = "card-body">
                <p class = "id">ID: ${intern.id}</p>
                <p class = "email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class = "school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
}

// pushes array to page
generateHTML = (data) => {
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === "Manager") {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === "Intern") {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// generates html page
const generateTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class = "navbar" id = "navbar">
                <span class = "navbar-brand mb-0 h1 w-100 text-center" id = "navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class = "container">
                <div class = "row justify-content-center" id = "team-cards">
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    </html>
`;
}

module.exports = generateHTML; 
