import React from 'react';

function ProjectCard({ title, photo, deployed, github }) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={title} src={photo} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Title:</strong> {title}
                    </li>
                    <li>
                        <strong>Link:</strong> {deployed}
                    </li>
                    <li>
                        <strong>GitHub Repo:</strong> {github}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;