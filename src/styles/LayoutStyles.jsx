import styled, { keyframes } from 'styled-components';

// Define keyframe animation
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled component for the header with animation
export const Header = styled.article`
  background-color: blue;
  color: #ffffff;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  transition: opacity 0.3s ease-in-out;
  align-self:top; /* Align to the top */

  &:hover {
    opacity: 0.8;
  }
`;

// Styled component for the content section with animation
export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: lightgray;
  }
`;
const GlobalNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
// Styled component for the main content with animation
export const MainContent = styled.main`
  flex-grow: 1;
  margin-left: 20px;
  animation: ${fadeInAnimation} 0.5s ease-in-out;

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
    color: #e0e0d0; /* Set text color to white for better visibility */
  }
  tr {
    background-color: #2196f3; /* Use light blue color for all rows
  }
  th {
    background-color: #1e88e5; /* Use dark blue color, e.g., #1e88e5 */
  }

  tr:hover {
    background-color: #1976d2; /* Use a different shade of blue, e.g., #1976d2 */
  }
`;
