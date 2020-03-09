import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    color: ${props => props.colored ? 'red' : 'black'}
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const AppHeader = ({ liked, allPosts }) => {
  
  let text;
  switch (allPosts) {
    case 1:
      text = 'запись';
      break;
    case 2:
      text = 'записи';
      break;
    case 3:
      text = 'записи';
      break;
    case 4:
      text = 'записи';
      break;
    default:
      text = 'записей';
      break;
  }

  return (
    <Header>
      <h1>Yevhenii Perekopskyi </h1>
      <h2>{allPosts} {text}, из них понравилось {liked}</h2>
    </Header>
  )
}

export default AppHeader;