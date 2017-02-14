import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { formatSongTitle } from '../utils/FormatUtils';

const propTypes = {
  songId: PropTypes.number,
  title: PropTypes.string.isRequired,
  userId: PropTypes.number,
  username: PropTypes.string.isRequired,
};

class SongDetails extends Component {
  render() {
    const { songId, title, userId, username } = this.props;
    return (
      <div className="song-card-details">
        <Link
          className="song-card-title"
          to={`/songs${songId}`}
          title={title}
        >
          {formatSongTitle(title)}
        </Link>
        <Link
          className="song-card-user-username"
          to={`/users${userId}`}
          title={username}
        >
          {username}
        </Link>
      </div>
    );
  }
}

SongDetails.propTypes = propTypes;

export default SongDetails;
