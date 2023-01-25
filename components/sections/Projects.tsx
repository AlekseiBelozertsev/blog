import { GridLayout } from '@/src/layouts';
import { Heading } from '@/src/typography';
import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const Projects = () => {
    return (
        <ProjectsSection id='projects'>
            <Heading>Projects</Heading>
            <GridLayout>
                <Card props={{
                    thumbnail: '/test.jpg',
                    projectalt: '',
                    icon: '/icons/skull.svg',
                    projectName: 'Test project',
                    description: 'Reprehenderit obcaecati ullam nihil, ab praesentium commodi animi facere ipsa.'
                }} ></Card>
            </GridLayout>
           
        </ProjectsSection>
    );
};

export default Projects;

const ProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 200px 0;
    height: 500px;
    gap: 48px;
`;