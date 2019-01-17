import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import PostListFollower from './PostListFollower'

class PostListItem extends Component {
  render() {
    const {post} = this.props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={post.postPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{post.title}</Item.Header>
                <Item.Description>
                  Posted by <a>{post.postedBy}</a><span> || </span>  
                  <Icon name="clock" /> {post.date}<span> || </span>
                  <Button size="mini" disabled content="Java" /> <Button size="mini" disabled content="Tech" />
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment secondary>
          <List horizontal>
          {post.followers.map((follower) => (
            <PostListFollower key={follower.id} follower={follower}/>
          ))}

          </List>
        </Segment>
        <Segment clearing>
        <span>{post.description}</span>
          <Button as="a" color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default PostListItem;
