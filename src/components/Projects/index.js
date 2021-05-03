import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';



function ProjectCard() {
    // {
    //     name: 'Budget Tracker',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    //             github: "https://github.com/sgenesi/budget-tracker",
    //                 deployed: "https://peaceful-wave-50059.herokuapp.com/",
    //                     image: "src/assets/images/projects/budgettracker.png"
    // },
    // {
    //     name: 'Coding Quiz',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    //             github: "https://github.com/sgenesi/coding-quiz",
    //                 deployed: " https://sgenesi.github.io/coding-quiz/"
    // },
    // {
    //     name: 'Date Night Generator',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    //             github: "https://github.com/quaylas/datenightgenerator",
    //                 deployed: "https://quaylas.github.io/datenightgenerator/"
    // },
    // {
    //     name: 'Note Taker',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    //             github: "https://github.com/sgenesi/note-taker",
    //                 deployed: "https://mysterious-stream-58547.herokuapp.com/notes"
    // },
    // {
    //     name: 'Password Generator',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    //             github: "https://github.com/sgenesi/random-password-generator",
    //                 deployed: "https://sgenesi.github.io/random-password-generator/"
    // },
    // {
    //     name: 'Run Buddy',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    //             github: "https://github.com/sgenesi/run-buddy",
    //                 deployed: "https://sgenesi.github.io/run-buddy/"
    // },
    // {
    //     name: 'Sugar Rush Soda Shop',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    //             github: "https://github.com/jleatham78/sugar-rush",
    //                 deployed: "https://blooming-harbor-63482.herokuapp.com/"
    // },


    return <CardDeck>
        <Card>
            <Card.Img variant="top" src="weatherdashboard.png" />
            <Card.Body>
                <Card.Title>Weather Dashboard</Card.Title>
                <Card.Text>
                    An app that allows travelers to see the weather outlook for multiple cities so that they can plan a trip accordingly.
                    <p>Built using:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS - Bootstrap</li>
                        <li>JavaScript</li>
                    </ul>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Link href="https://sgenesi.github.io/weather-dashboard/">View Project</Card.Link>
                <Card.Link href="https://github.com/sgenesi/weather-dashboard">View Repository</Card.Link>
            </Card.Footer>
        </Card>

    </CardDeck>
}
export default ProjectCard;