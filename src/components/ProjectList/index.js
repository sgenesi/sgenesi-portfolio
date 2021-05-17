import React, { useState } from 'react';

const ProjectList = ({ category }) => {

    const [project] = useState([
        {
            name: 'Budget Tracker',
            category: 'projects',
            description: 'This is a PWA that allows the user to track their money by adding expenses and deposits to their budget with or without an internet connection.',
        },
        {
            name: 'Coding Quiz',
            category: 'projects',
            description: 'The "Coding Quiz" is a timed coding quiz with multiple choice questions. If you answer a questions incorrectly, then time is subtracted from the timer. When all quetsions are answered, or the timer reacher 0, then the game is over and you are able to save your score and ititials.',
        },
        {
            name: 'Date Night Generator',
            category: 'projects',
            description: 'A simple tool to make date night a little bit easier.',
        },
        {
            name: 'Note Taker',
            category: 'projects',
            description: 'Note Taker is an Express.js application that allows you to enter and save notes to keep yourself organized.'
        },
        {
            name: 'Password Generator',
            category: 'projects',
            description: 'A random password generator that will create a strong password that provides greater security based on user input criteria.',
        },
        {
            name: 'Run Buddy',
            category: 'projects',
            description: 'A website that offers fitness training services.',
        },
        {
            name: 'Sugar Rush',
            category: 'projects',
            description: 'Welcome to the Sugar Rush website, where a user can view the menu on the main page, then visit the log in/sign up page to access an interactive menu. Once logged in, the user can view drinks filtered by soda type. By visiting the Sugar Rush website and store front, we can help support local businesses.',
        },
        {
            name: 'Weather Dashboard',
            category: 'projects',
            description: 'AS A traveler I WANT to see the weather outlook for multiple cities SO THAT I can plan a trip accordingly.',
        },
        {
            name: 'Cover Letter and Resume',
            category: 'resume',
            description: 'My resume.',
        },
    ]);

    const currentProject = project.filter((project) => project.category === category);

    return (
        <div>
            <div className="flex-row">
                {currentProject.map((image, i) => (
                    <img
                        src={require(`../../assets/images/${category}/${i}.png`)}
                        alt={image.name}
                        className="img-thumbanil mx-1"
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectList;