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
                }} />
                 <Card props={{
                    thumbnail: '/test.jpg',
                    projectalt: '',
                    icon: '/icons/skull.svg',
                    projectName: 'Test project',
                    description: 'Reprehenderit obcaecati ullam nihil, ab praesentium commodi animi facere ipsa.'
                }} />
                 <Card props={{
                    thumbnail: '/test.jpg',
                    projectalt: '',
                    icon: '/icons/skull.svg',
                    projectName: 'Test project',
                    description: 'Reprehenderit obcaecati ullam nihil, ab praesentium commodi animi facere ipsa. '
                }} />
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

    ${GridLayout} {
        padding-right: 24px;
        gap: 48px;
        width: 100%;
        @media(max-width: 768px) {
            grid-template-columns: repeat(2, 1fr)
        }
    }
`;