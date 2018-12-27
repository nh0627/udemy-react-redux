import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    renderList() {
        return this.props.songs.map( (song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{ song.title } 
                    </div>
                </div>
            );
        });
    }
    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// Take our state object inside of our redux store, and it will show up as props inside of our component.
const mapStateToProps = state => {
    return { songs: state.songs };
}

// We should not call the action creator inside of our component.
// This connect function will call automatically the action creator that we made,
// It's going to automatically take the action that gets returned and call the dispatch function of Redux for us.
export default connect(mapStateToProps, { selectSong })(SongList);