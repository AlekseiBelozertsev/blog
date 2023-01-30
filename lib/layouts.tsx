import styled from "styled-components";
import { colors } from "./colors";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`;

export const ResponsiveImage169 = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
`;

export const ResponsiveImage11 = styled.div`
    position: relative;
    width: 60px;
    aspect-ratio: 1 / 1;
`;

export const DateWrapper = styled.div`
    display: flex;
    padding: 8px;
    border-radius: 4px;
    width: fit-content;
    background: ${colors.mainBackground};
`;

