import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Mus.css';

function Music() {
    // const songs=[
    //     {
    //         id:1,
    //         movie_name:'Pushpa - The Rise',
    //         song_name:'Srivalli',
    //         music_director:'DSP',
    //         song:'https://res.cloudinary.com/duoz43pcs/video/upload/v1703491221/sowdgxgt6ub0f1qxzzkf.mp3',
    //     },

       
        // {
        //     id:6,
        //     movie_name:'',
        //     song_name:'',
        //     music_director:'',
        //     song:'',
        // },
        // {
        //     id:7,
        //     movie_name:'',
        //     song_name:'',
        //     music_director:'',
        //     song:'',
        // },
        // {
        //     id:8,
        //     movie_name:'',
        //     song_name:'',
        //     music_director:'',
        //     song:'',
        // },
        // {
        //     id:9,
        //     movie_name:'',
        //     song_name:'',
        //     music_director:'',
        //     song:'',
        // },
        // {
        //     id:10,
        //     movie_name:'',
        //     song_name:'',
        //     music_director:'',
        //     song:'',
        // },
        // {
        //     id:11,
        //     movie_name:'',
        //     song_name:'',
        //     music_director:'',
        //     song:'',
        // },
        // {
        //     id:12,
        //     movie_name:'',
        //     song_name:'',
        //     music_director:'',
        //     song:'',
        // },
        // {
        //     id:13,
        //     movie_name:'Yemaaya chesave',
        //     song_name:'Ee Hridayam',
        //     music_director:'A R Rahman',
        //     song:'',
        // }

    // ]
    // const controls=(so)=>{
    //     let audioPlayer=document.getElementById('audio');
    //     audioPlayer.song=so.song;
    //     audioPlayer.play();
    // };
    // const [data,setData]=useState(songs);
    // const playSong = (song) => {
    //     const audioPlayer = document.getElementById("audio-player");
    //     audioPlayer.src = song.src;
    //     audioPlayer.play();
    //   };
  return (
    <div className='body'>
        {/* nav
        card
        img
        song_name
        movie_name
        music_director
        audio */}
        <Navbar className="nav">
        <Container>
          <Navbar.Brand className='br'>
            <img
              alt=""
              src="https://www.pngall.com/wp-content/uploads/13/Apple-Music-Logo-PNG.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Music Bass
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* 2.card  items*/}
      <div className='cards'>
      <Card className='card'  >
      <Card.Img variant="top" src="https://m.media-amazon.com/images/S/pv-target-images/c760d0432569f431630595eaf242259f2fb3292f7ec9f7c5875451282626eda6.jpg" className='img'  />
      <Card.Body>
        <Card.Title>You Rock My World</Card.Title>
        <Card.Text>
        Aarya
        </Card.Text>
        <Card.Text>
        DSP
        </Card.Text>
        <audio src='https://res.cloudinary.com/duoz43pcs/video/upload/v1703598999/a34vn9c6nhjdko7vz2y7.mp3' controls className='audio' ></audio>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Card className='card'  >
      <Card.Img variant="top" src="https://wallpapercave.com/wp/wp8467009.jpg" className='img'  />
      <Card.Body>
        <Card.Title>Manasaa</Card.Title>
        <Card.Text>
        Yemaaya chesave
        </Card.Text>
        <Card.Text>
        A R Rahman
        </Card.Text>
        <audio src='https://res.cloudinary.com/digdliiab/video/upload/v1684325362/Cheap_Thrills_ydrhcr.mp3' controls className='audio' ></audio>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src="https://images.mymazaa.net/media/images/large/movies/telugu/jalsa.jpg" className='img' />
      <Card.Body>
        <Card.Title>My Heart</Card.Title>
        <Card.Text>
        Jalsa
        </Card.Text>
        <Card.Text>
        DSP
        </Card.Text>
        <audio src='https://res.cloudinary.com/duoz43pcs/video/upload/v1703572335/bktpxrihfqyzy1oulqlv.mp3' controls className='audio'></audio>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src="https://i.scdn.co/image/ab67616d0000b27384033807a2cea63fe7d8f8d0" className='img'/>
      <Card.Body>
        <Card.Title>Vaalu Kanuladaanaa</Card.Title>
        <Card.Text>
        Premikula Roju
        </Card.Text>
        <Card.Text>
        A R Rahman
        </Card.Text>
        <audio src='https://res.cloudinary.com/duoz43pcs/video/upload/v1703572682/dd0auon82rucao8medug.mp3' controls className='audio'></audio>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src="https://igimages.gumlet.io/tamil/home/vijay-beast-newposter-arabickuthu1-1322022.jpg?w=376&dpr=2.6" className='img' />
      <Card.Body>
        <Card.Title>Halamithi Habibo</Card.Title>
        <Card.Text>
        Beast
        </Card.Text>
        <Card.Text>
        Anirudh 
        </Card.Text>
        <audio src='https://res.cloudinary.com/duoz43pcs/video/upload/v1703573132/mlxmwjnuxbey4wd42gm7.mp3' controls className='audio'></audio>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src="https://sund-images.sunnxt.com/25845/1000x1500_60267897-c444-4e4f-b842-4e032130dc4e.jpg" className='img' />
      <Card.Body>
        <Card.Title>Hrudayam Ekkadunnadi</Card.Title>
        <Card.Text>
        Ghajini
        </Card.Text>
        <Card.Text>
        Harish  
        </Card.Text>
        <audio src='https://res.cloudinary.com/duoz43pcs/video/upload/v1703573736/vsb8tyfz6mhbkbgyc4vh.mp3' controls className='audio'></audio>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src="https://static.toiimg.com/thumb/msid-90880292,width-400,resizemode-4/90880292.jpg" className='img' />
      <Card.Body>
        <Card.Title>Komma Uyyala</Card.Title>
        <Card.Text>
        RRR (Telugu)
        </Card.Text>
        <Card.Text>
        M M Keeravani  
        </Card.Text>
        <audio src='https://res.cloudinary.com/duoz43pcs/video/upload/v1703574217/ay0b1f8pw3ij6ndyndi1.mp3' controls className='audio'></audio>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src="https://sund-images.sunnxt.com/10258/1000x1500_1f840688-efeb-4c8c-9306-351091d2e884.jpg" className='img' />
      <Card.Body>
        <Card.Title>Hayirabba</Card.Title>
        <Card.Text>
        Jeans
        </Card.Text>
        <Card.Text>
        A R Rahman  
        </Card.Text>
        <audio src='https://res.cloudinary.com/duoz43pcs/video/upload/v1703596550/uuy9xvtubylww88zr8tf.mp3' controls className='audio'></audio>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src="https://www.idlebrain.com/movie/photogallery/7thsense1/images/seventhsense4.jpg" className='img' />
      <Card.Body>
        <Card.Title>Mutyala Dhaarani</Card.Title>
        <Card.Text>
        7th sense
        </Card.Text>
        <Card.Text>
        Harris jayaraj   
        </Card.Text>
        <audio src='https://res.cloudinary.com/duoz43pcs/video/upload/v1703597031/xmgqyiprsnrgusmhw2bj.mp3' controls className='audio'></audio>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src="https://sund-images.sunnxt.com/153945/1000x1500_ThiruTelugu_153945_ba453e27-103a-4233-a784-eb6feda92df1.jpg" className='img' />
      <Card.Body>
        <Card.Title>Megham Karigane</Card.Title>
        <Card.Text>
        Thiru
        </Card.Text>
        <Card.Text>
        Anirudh  
        </Card.Text>
        <audio src='https://res.cloudinary.com/duoz43pcs/video/upload/v1703597464/hzkek0qdmncxbrhmekhs.mp3' controls className='audio'></audio>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/82/94/5d/82945d2b060c721a3afad8b531e4a2a3.jpg" className='img' />
      <Card.Body>
        <Card.Title>Usure Poyene</Card.Title>
        <Card.Text>
        Villain
        </Card.Text>
        <Card.Text>
        A R Rahman  
        </Card.Text>
        <audio src='https://res.cloudinary.com/duoz43pcs/video/upload/v1703598309/gs5hbrlnj7iewufpxijo.mp3' controls className='audio'></audio>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/9b/a8/cc/9ba8cc0062a41f8c2c2d664c6d1b0732.jpg" className='img' />
      <Card.Body>
        <Card.Title>Chilipiga</Card.Title>
        <Card.Text>
        Orange
        </Card.Text>
        <Card.Text>
        Harris jayaraj  
        </Card.Text>
        <audio src='https://res.cloudinary.com/duoz43pcs/video/upload/v1703598716/jziukaajyyegzhmzdfra.mp3' controls className='audio'></audio>
      </Card.Body>
    </Card>
    </div>
        
        </div>
  )
}

export default Music;