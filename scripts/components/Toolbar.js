import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { GENRES } from '../constants/SongConstants';

const DAYS = [7, 30, 90];
const propTypes = {
  dispatch: PropTypes.func.isRequired,
  playlist: PropTypes.string.isRequired,
  time: PropTypes.number,
};

class Toolbar extends Component {
  renderGenres() {
    const { dispatch, playlist, time } = this.props;
    const genre = playlist.split(' - ')[0];

    return GENRES.map(g => {
      const route = {
        pathName: 'songs',
        query: {
          genre: g,
          time,
        },
      };

      return (
        <Link
          className={`toolbar-item toolbar-genre ${(g === genre ? 'active' : '')}`}
          dispatch={dispatch}
          key={g}
          to={route}
        >
          {g}
        </Link>
      );
    });
  }

  renderTimes() {
    const { dispatch, playlist, time } = this.props;
    const genre = playlist.split(' - ')[0];

    return DAYS.map(t => {
      const route = {
        pathName: 'songs',
        query: {
          genre,
          time: (t === time ? null : t),
        },
      };

      return (
        <Link
          className={`toolbar-time ${(t === time ? 'active' : '')}`}
          dispatch={dispatch}
          key={t}
          to={route}
        >
          {`${t} days`}
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="toolbar">
        <div className="container">
          <div className="toolbar-items">
            {this.renderGenres()}
            <div className="toolbar-item toolbar-filter toolbar-times">
              <i className="icon ion-funnel" />
              {this.renderTimes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Toolbar.propTypes = propTypes;

export default Toolbar;
