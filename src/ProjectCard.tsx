import './ProjectCard.css';

type ProjectProps = 
{
    projectName:string
}

function ProjectCard({projectName}:ProjectProps)
{
    return(
        <div className="bg">
            <h3>{projectName}</h3>
            <p>There once was a project that...</p>
        </div>
    );
}

export default ProjectCard;