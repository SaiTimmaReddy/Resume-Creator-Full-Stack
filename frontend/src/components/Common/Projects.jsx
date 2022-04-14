import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../reducks/projects/selectors';
import { fetchProjects } from '../../reducks/projects/operations';
const Projects = ({ projects }) => {
    return (
        <>
            <section class="body">
                <div class="projects">
                    <h4 class="project-name">{projects.projectheading}</h4>
                    <h5 class="description">
                        <p>{projects.projectdescription}</p>
                        <ul class="dots">
                            <li class="project-links">
                                <h5 class="technologies-used">
                                    Technologies Used:
                                    <span>{projects.technologiesused}</span>
                                </h5>
                            </li>
                            <li class="project-links">
                                <a href="">{projects.githublinkproject}</a>
                            </li>
                            <li class="project-links">
                                <a href="">{projects.herokulinkproject}</a>
                            </li>
                        </ul>
                    </h5>
                </div>
            </section>
        </>
    );
};

export default Projects;
