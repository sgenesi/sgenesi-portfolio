import React from 'react';

function ProjectCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Title:</strong> {props.title}
                    </li>
                    <li>
                        <strong>Link:</strong> {props.link}
                    </li>
                    <li>
                        <strong>Github:</strong> {props.github}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;