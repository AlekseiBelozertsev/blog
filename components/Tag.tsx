import { colors } from '@/lib/colors';
import { Tags } from '@/lib/typography';
import React from 'react';
import styled from 'styled-components';

type TagProps = {
    content: string,
    bgcolor?: string,
}

const Tag = ({content, bgcolor}: TagProps) => {
    return (
        <TagBody bgcolor={bgcolor}><Tags>{content}</Tags></TagBody>
    );
};

export default Tag;

const TagBody = styled.div<{bgcolor?: string}>`
    display: flex;
    padding: 8px;
    border-radius: 4px;
    width: fit-content;
    background: ${ props => props.bgcolor ? props.bgcolor : colors.pendingBlue };
`;