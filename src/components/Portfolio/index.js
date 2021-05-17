import React from 'react';
import Project from '../Project';


function Portfolio() {
	const projects = [
		{
			name: 'SimpliFam',
			description:
				'SimpliFam is a one stop shop where you can keep your family organized with a family calendar, grocery list, and chat app.',
			image: 'simplifam.png',
			technologies: [
				'CSS',
				'Node.js',
				'MongoDB',
				'React.js',
				'Apollo',
				'MERN Stack',
				'GraphQL',
				'Express.js'
			],
			github: 'https://github.com/sgenesi/sgenesi-portfolio',
			deployed: 'https://simplifam.herokuapp.com/',
		},
		{
			name: 'Budget Tracker',
			description:
				'This is a PWA that allows the user to track their money by adding expenses and deposits to their budget with or without an internet connection.',
			image: 'budgettracker.png',
			technologies: [
				'Node',
				'Express',
				'MongoDB',
				'IndexedDB'
			],
			github: 'https://github.com/sgenesi/budget-tracker',
			deployed: 'https://peaceful-wave-50059.herokuapp.com/',
		},
		{
			name: 'Coding Quiz',
			description:
				'The "Coding Quiz" is a timed coding quiz with multiple choice questions. If you answer a questions incorrectly, then time is subtracted from the timer. When all quetsions are answered, or the timer reacher 0, then the game is over and you are able to save your score and ititials.',
			image: 'codingquiz.png',
			technologies: [
				'HTML/CSS',
				'JavaScript'
			],
			github: 'https://github.com/sgenesi/coding-quiz',
			deployed: 'https://sgenesi.github.io/coding-quiz/',
		},
		{
			name: 'Date Night Generator',
			description:
				'A simple tool to make date night a little bit easier.',
			image: 'datenightgenerator.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/quaylas/datenightgenerator',
			deployed: 'https://quaylas.github.io/datenightgenerator/',
		},
		{
			name: 'Note Taker',
			description:
				'Note Taker is an Express.js application that allows you to enter and save notes to keep yourself organized.',
			image: 'notetaker.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'NodeJs',
				'Express.js'
			],
			github: 'https://github.com/sgenesi/note-taker',
			deployed: 'https://mysterious-stream-58547.herokuapp.com/notes',
		},
		{
			name: 'Password Generator',
			description:
				'An app used to create a random password generator that will create a strong password that provides greater security based on user input criteria.',
			image: 'passwordgenerator.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/sgenesi/random-password-generator',
			deployed: 'https://sgenesi.github.io/random-password-generator/',
		},
		{
			name: 'Run Buddy',
			description:
				'A website that offers fitness training services.',
			image: 'runbuddy.png',
			technologies: ['HTML/CSS'],
			github: 'https://github.com/sgenesi/run-buddy',
			deployed: 'https://sgenesi.github.io/run-buddy/',
		},
		{
			name: 'Sugar Rush Soda Shop',
			description:
				'Welcome to the Sugar Rush website, where a user can view the menu on the main page, then visit the log in/sign up page to access an interactive menu. Once logged in, the user can view drinks filtered by soda type. By visiting the Sugar Rush website and store front, we can help support local businesses.',
			image: 'sugarrush.png',
			technologies: ['HTML', 'JavaScript', 'Bulma', 'Express.js', 'MySQL', 'Sequelize'],
			github: 'https://github.com/jleatham78/sugar-rush',
			deployed: 'https://blooming-harbor-63482.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'An app that allows a traveler to see the weather outlook for multiple cities so that they can plan a trip accordingly.',
			image: 'weatherdashboard.png',
			technologies: ['HTML/CSS', 'Bootstrap', 'JavaScript'],
			github: 'https://github.com/sgenesi/weather-dashboard',
			deployed: 'https://sgenesi.github.io/weather-dashboard/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[6]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[7]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;