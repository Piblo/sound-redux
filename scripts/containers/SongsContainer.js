import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSongsIfNeeded } from '../actions/PlaylistsActions';
import MobileSongs from '../components/MobileSongs';
import Songs from '../components/Songs';
import { getPlayingSongId } from '../utils/PlayerUtils';

const propTypes = {
  isMobile: PropTypes.bool,
};

class SongsContainer extends Component {
  render() {
    const { isMobile } = this.props;
    if (isMobile) {
      return <MobileSongs {...this.props} />;
    }

    return <Songs {...this.props} />;
  }
}

SongsContainer.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
  const { authed, entities, environment, navigator, player, playlists } = state;
  const { height, isMobile } = environment;
  const { songs, users } = entities;
  const query = ownProps.location.query;
  const playingSongId = getPlayingSongId(player, playlists);

  const time = query && query.time ? query.time : null;
  let playlist = query && query.genre ? query.genre : 'house';
  if (time) {
    playlist = `${playlist} - ${time}`;
  }

  return {
    authed,
    height,
    isMobile,
    playingSongId,
    playlist,
    playlists,
    scrollFunc: fetchSongsIfNeeded.bind(null, playlist),
    songs,
    time,
    users,
  };
}

export default connect(mapStateToProps)(SongsContainer);
