import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

class SongList extends Component {
  renderSongs() {
    if (this.props.data.loading) {
      return <div>loading...</div>;
    }
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="collection">{this.renderSongs()}</ul>;
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
