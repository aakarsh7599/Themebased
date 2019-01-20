import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import PostListFollower from './PostListFollower'

class PostListItem extends Component {
  render() {
    const {post} = this.props
    return (
      <Segment.Group raised>
        <Segment raised>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={post.postPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{post.title}</Item.Header>
                <Item.Description>
                  Posted by <a>{post.postedBy}</a><span> | </span> 
                  <Icon name="code branch" />{post.category}<span> | </span>
                  <Icon name="tags" /><Button size="mini" disabled content="Java" /> <Button size="mini" disabled content="Tech" />
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment raised secondary>
          <List horizontal>
          {post.followers && post.followers.map((follower) => (
            <PostListFollower key={follower.id} follower={follower}/>
          ))}

          </List>
        </Segment>
        <Segment raised clearing>
        <span>{post.description}</span>
          <Button as="a" style={{background: '#00c07f'}} inverted floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default PostListItem;
