import { colors } from '@/lib/colors';
import { Tags } from '@/lib/typography';
import React from 'react';
import styled from 'styled-components';

type TagProps = {
    content: string,
    bgcolor?: string,
}

const Tag = ({content}: TagProps) => {
    return (
        <TagBody><Tags>{content}</Tags></TagBody>
    );
};

export default Tag;

const TagBody = styled.div`
    display: flex;
    padding: 8px;
    border-radius: 4px;
    width: fit-content;
    border: 1px solid ${colors.borderRed};
    background: ${colors.errorRed};
`;