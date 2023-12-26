import React from 'react'
import Container from 'react-bootstrap/Container'; 
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Mus.css';

function Play() {
    const songs = [
          {
            id: 1,
            title: "Eyy bidda edhi na adda",
            artist: "DSP",
            movie:'P',
            src: "https://res.cloudinary.com/digdliiab/video/upload/v1684307725/Eyy-Bidda-Idhi-Naa-Adda---Pushpa_MrSong.In_r1xwr7.mp3",
          },
          {
            id: 2,
            title: "Come on come on",
            artist: "Illey",
            src: "https://res.cloudinary.com/digdliiab/video/upload/v1684325362/Cheap_Thrills_ydrhcr.mp3",
          },
          {
            id: 3,
            title: "Believer",
            artist: "Justin Biber",
            src: "https://res.cloudinary.com/digdliiab/video/upload/v1684325572/Imagine_Dragons_-_Believer_RaaSongs_1_zvutyr.mp3",
          },
          // Add more songs to the array
        ];
      
        const playSong = (song) => {
          const audioPlayer = document.getElementById("audio-player");
          audioPlayer.src = song.src;
          audioPlayer.play();
        };
  return (
    <div>
        <Navbar className="nav">
        <Container>
          <Navbar.Brand >
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Music Bass
          </Navbar.Brand>
        </Container>
      </Navbar> 

      {/* card 1 */}
      <div className='cards'>
      <Card style={{ width: '23rem',backgroundColor:'wheat' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
       <ul className="song-list">
         {songs.map((song) => (
           <Card key={song.id} onClick={() => playSong(song)}>
             {song.title} 
           </Card>
         ))}
       </ul> 
       <span>{
        songs.map((song)=>(
            <Card key={song.id}>{song.movie}</Card>
        ))}</span>
       <span>{
        songs.map((song)=>(
            <Card key={song.id}>{song.artist}</Card>
        ))}</span>
       <audio id="audio-player" controls></audio>
       </Card.Body>
       </Card>
    </div>
    </div>
)
}

export default Play;