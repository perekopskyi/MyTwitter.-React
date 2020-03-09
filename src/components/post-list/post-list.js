import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import { ListGroup } from 'reactstrap';

import styled from 'styled-components';

const ListItem = styled.li`
  padding: 20px 35px 10px 35px;
  margin-top: 10px;
`

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {

  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <ListItem key={id} className="list-group-item">
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </ListItem>
    )
  });

  return (
    <ListGroup style={{ marginTop: '50px'}}>
      {elements}
    </ListGroup>
  )
}

export default PostList;