
import React from 'react'
import styled from 'styled-components';

export const UserMap = ({ user }) => {
  return (
    <div>

      {user.map((item) => (
        <div class="card text-bg-success mb-3" key={item.id}>
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">{item.author.username}</h5>
            <h5 class="card-title">{item.author.username}</h5>
            <p class="card-text"> {item.author.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
