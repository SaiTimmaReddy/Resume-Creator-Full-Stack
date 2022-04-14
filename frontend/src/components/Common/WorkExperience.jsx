import React from 'react';

const WorkExperience = ({ workexperiences }) => {
    return (
        <div class="projects">
            <h1>work experience</h1>
            <h4 class="project-name">{workexperiences.job}</h4>
            <h5 class="description">
                <ul class="dots">
                    <li class="work-points">
                        <h5 class="work-exp">{workexperiences.jobrole1}</h5>
                    </li>

                    <li class="work-points">
                        <h5 class="work-exp">{workexperiences.jobrole2}</h5>
                    </li>
                    <li class="work-points">
                        <h5 class="work-exp">{workexperiences.jobrole3}</h5>
                    </li>
                </ul>
            </h5>
        </div>
    );
};

export default WorkExperience;
