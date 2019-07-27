import React, { Component } from 'react';

export default class ListFavoriteMovies extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.profiles.map(profile => (
            <li key={profile.id}>{`${
              this.props.users[profile.userID].name
            } favorite movie is ${
              this.props.movies[profile.favoriteMovieID].name
            }.`}</li>
          ))}
        </ul>
      </div>
    );
  }
}
