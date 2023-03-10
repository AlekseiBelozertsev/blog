import { GridLayout } from '@/lib/layouts';
import { Heading } from '@/lib/typography';
import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { projects } from '@/pages/api/projects';

const Projects = () => {
    return (
        <ProjectsSection id='projects'>
            <Heading>Projects</Heading>
            <GridLayout>
                {
                    projects.map((project) => {
                        return (
                            <Card key={project.projectName} props={{
                                thumbnail: project.thumbnail,
                                tags: project.tags,
                                projectalt: project.alt,
                                projectName: project.projectName,
                                description: project.description,
                                to: project.to,
                            }} />
                        )
                    })
                };
            </GridLayout>
           
        </ProjectsSection>
    );
};

export default Projects;

const ProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 150px 0;
    gap: 48px;
    @media(max-width: 550px) {
        padding: 70px 0;
    }

    ${GridLayout} {
        box-sizing: border-box;
        padding-right: 24px;
        gap: 48px;
        width: 100%;
        @media(max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            padding-right: 0;
        }
        @media(max-width: 550px) {
            grid-template-columns: 1fr;
            padding-right: 0;
        }
    }
`;