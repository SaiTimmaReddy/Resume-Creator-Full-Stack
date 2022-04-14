import React from 'react';

const Education = ({ educations }) => {
    return (
        <div class="skills">
            <h4 class="project-name">{educations.eduheading}</h4>
            <ul class="dots">
                <li class="work-points">
                    <h5 class="work-exp">{educations.edudescription1}</h5>
                </li>

                <li class="work-points">
                    <h5 class="work-exp">{educations.edudescription2}</h5>
                </li>
                <li class="work-points">
                    <h5 class="work-exp">{educations.edudescription3}</h5>
                </li>
            </ul>
        </div>
    );
};

export default Education;
