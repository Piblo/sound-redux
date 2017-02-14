import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from '../components/Song';
import { getPlayingSongId } from '../utils/PlayerUtils';

class SongContainer extends Component {
  render() {
    return <Song {...this.props} />;
  }
}

function mapStateToProps(state, ownProps) {
  const { authed, entities, environment, player, playlists } = state;
  const { songs, users } = entities;
  const { height } = environment;

  const playingSongId = getPlayingSongId(player, playlists);

  return {
    authed,
    height,
    player,
    playingSongId,
    playlists,
    songId: ownProps.params.id,
    songs,
    users,
  };
}

export default connect(mapStateToProps)(SongContainer);
