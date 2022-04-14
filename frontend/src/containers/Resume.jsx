import React, { useEffect, useRef } from 'react';
import Projects from '../components/Common/Projects';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../reducks/projects/selectors';
import { fetchProjects } from '../reducks/projects/operations';
import { getSkills } from '../reducks/skills/selectors';
import Skills from '../components/Common/Skills';
import { fetchSkills } from '../reducks/skills/operations';
import { getHeader } from '../reducks/header/selectors';
import { fetchHeader } from '../reducks/header/operations';
import Header from '../components/Common/Header';
import { getEducation } from '../reducks/education/selectors';
import { fetchEducation } from '../reducks/education/operations';
import Education from '../components/Common/Education';
import { fetchWorkExperience } from '../reducks/workexperience/operations';
import { getWorkExperience } from '../reducks/workexperience/selectors';
import WorkExperience from '../components/Common/WorkExperience';

const Resume = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const projects = getProjects(selector);
    const skills = getSkills(selector);
    const headers = getHeader(selector);
    const educations = getEducation(selector);
    const workexperiences = getWorkExperience(selector);
    const componentRef = useRef();

    useEffect(() => {
        dispatch(fetchProjects());
        dispatch(fetchSkills());
        dispatch(fetchHeader());
        dispatch(fetchEducation());
        dispatch(fetchWorkExperience());
        console.log(projects);

        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div ref={componentRef}>
                {headers && headers.map(headers => <Header key={headers.id} headers={headers} />)}
                <h3 class="body-heading">Projects</h3>
                {projects &&
                    projects.map(projects => (
                        <ul>
                            <Projects key={projects.id} projects={projects} />
                        </ul>
                    ))}
                <h1>Hi there!</h1>
                <h3 class="body-heading">Skills</h3>
                {skills.length && skills.map(skills => <Skills key={skills.id} skills={skills} />)}
                <h3 class="body-heading">EDUCATION</h3>
                {educations && educations.map(educations => <Education key={educations.id} educations={educations} />)}
                {/* {workexperiences &&
                workexperiences.map(workexperiences => (
                    <WorkExperience key={workexperiences.id} workexperiences={workexperiences} />
                ))} */}
                {workexperiences &&
                    workexperiences.map(workexperiences => (
                        <WorkExperience key={workexperiences.id} workexperiences={workexperiences} />
                    ))}
            </div>
        </>
    );
};

export default Resume;
export const download = () => {
    window.print();
};
