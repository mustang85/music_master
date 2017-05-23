import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { artist } = this.props;
    return (
      <div className="profile">
        <img src={artist.images[0].url} alt="Profile" className="profile-img" />

        <div className="profile-info">
          <div className="profile-name">{ artist.name }</div>
          <div className="profile-followers">{ artist.followers.total } followers</div>
          <div className="profile-genres">
            {
              artist.genres.map((genre, k) => {
                genre = genre !== artist.genres[artist.genres.length-1] ? ` ${genre},` : ` & ${genre}`;
                return <span key={k}>{genre}</span>
              })
            }
          </div>
        </div>

      </div>
    );
  }
}

export default Profile;
