import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './projects.css';

function Project() {
  return (
    <div className="mainbox">
      <div style={{backgroundColor: "white", marginBottom: "30px", borderWidth: "3px", border: "solid", padding: "5px"}}>
        <h1 style={{fontSize:"60px"}}>
          Bike Helmet Navigator
        </h1>
      </div>
      <div className='imagebox'>
      <div className='secondarybox'>
      <h3>
        Project Description
      </h3>
      <p>
        This project is a bike helmet meant to indicate when a car or pedestrian is behind a biker. While riding a
        bike in a city, a biker must constantly be checking behind them when riding. This device is designed to warn
        a biker when an obstacle is behind them, to prevent them from having to turn their head to check their blind spots,
        which can cause crashes or swerves if an obstacle ahead of the biker is not seen. The device uses Time-of-Flight (TOF) sensors to 
        detect cars or other hazards. The project uses two LEDs to indicate a detection of the TOF sensors on the left
        and right sides.
      </p>
      </div>
      <div>
      <Image style={{height: "300px", width:"400px", border: "solid"}} src="protoype.jpg"/>
      
      <p style={{color: "black", fontSize:"8px"}}><i>An image of my Arduino Uno connected to one TOF sensor</i></p>
      </div>
      </div>


      <div className='imagebox'>


      <div className='secondarybox'>
        <h3>
          Acquired Skills
        </h3>
        <p>
          While I had already had arduino skills before this project, I was able to gain a greater understanding of the
          Arduino Uno's I2C bus capabilities. This came along with a general understanding of how to control devices on
          an I2C bus. The hardest part of this project was adapting already available code with my own code to control 
          multiple devices on the bus. I was able to find the library's GitHub repository, to learn how it worked, and
          write some code to read from both sensors. I was also able to learn about design and design preparation. I 
          prepared very poorly for the creation of this project, and my design ended up being pretty cobbled together.
          Had I prepared better, my project would have been more professional and better constructed.
        </p>
      </div>

      <div>
      <Image style={{height: "330px", width:"440px", border: "solid"}} src="ECE1100.png"/>
      <p style={{color: "black", fontSize:"8px"}}><i>An screenshot of some code I used for the sensor, along with sensor readings on the Serial Monitor</i></p>
      </div>
      </div>

      <div className='imagebox'>
      <div className='secondarybox'> 
        <h3>
          Results
        </h3>
        <p>
          While I was successful at completing a prototype that had the full functionality I had set out for, many aspects
          of the project did not work very well. A large limiter is that my sensors do not have much range. They can only
          detect objects within 2 meters away, which is not very far in a traffic scenario. I also was under a time crunch
          when fabricating my prototype, and its state reflects this. the prototype is covered in tape, with loose wires sticking
          out everywhere. I also have no way to actually wear it on a bike, since I do not have any batteries I could use to
          power the Arduino. But while the project is not very useful for a biker, I learned a lot. I was able to set a goal,
          and do the best I could with what I had to reach that goal. I also learned about bus communication, API usage, and
          design.
        </p>
      </div>
      <div>
      <Image style={{height: "330px", width:"440px", border: "solid"}} src="complete.jpg"/>
      <p style={{color: "black", fontSize:"8px"}}><i>An image of my prototype for the helmet.</i></p>
      </div>
      </div>
      
      <div className='imagebox'>
      <div className='secondarybox'>
        <h3>
          Next Steps
        </h3>
        <p>
          While I will not develop more on the project, the skills I took away from its creation will form roots for skills that
          could help me long down the road. I learned how to overcome design challenges, how to deal with real world design constraints, how to
          integrate a microcontroller into a device, and IoT communication. My ECE 1100 project was an extremely valuable learning experience.
        </p>
      </div>
      <div>
      <video height="330px" width="440px" controls muted>
        <source src="demo.mp4" type="video/mp4"/>
      </video>
      <p style={{color: "black", fontSize:"8px"}}><i>A demonstration of the helmet working.</i></p>
      </div>
      </div>
    </div>
  );
}

export default Project;