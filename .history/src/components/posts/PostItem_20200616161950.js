import React from 'react';

const PostItem = (props) => {
    return (
        <div class="card mb-3">
  <img class="card-img-top" src={props.image} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
    );
};

export default PostItem;
