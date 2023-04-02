import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div style={{ 'height': "750px" }} id="home" className='max-w-screen w-full h-full bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900'>
      <div className="text-center">
        <h1 className="font-normal text-6xl next-9xl text-transparent text-white">
          <br />
          <br />
          <br />
          <br />
          <div className='typewriter'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello, World!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("My name is Atharv Patwardhan.")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </div>
        </h1>
        <h3 className="text-center py-3 text-6xl text-transparent bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text">I'm a software developer.</h3>
      </div>
    </div>
  )
}

export default Home;
