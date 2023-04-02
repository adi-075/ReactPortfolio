import atharv from '../img/Atharv.jpg'
// import '../About.css'

const About = () => {
  return (
    <div style={{ 'height': "800px" }} id="about" className='bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900'>
      <div className="text-center" style={{ "position": "absolute", "marginTop": "5%" }}>
        <h2 className="text-6xl text-white">About Me</h2>
        <div className="flex">
          <img src={atharv} alt="Atharv" style={{ "borderRadius": '50%', "width": '27%', "margin": "auto", "marginTop": "5%", "marginLeft": "12%" }} />
          <div style={{ "width": "60%", "margin": "auto", "marginTop": "5%" }}>
            <p className="text-white p-8 text-4xl text-center text-transparent font-normal font-sans overflow-hidden">
              I'm currently a student studying computer science.
              I have always been interested in coding and technology.
              I'm eager to learn new technologies and always ensure to do the best I can in whatever task I do.
              I'm very interested in Web Development and Machine Learning.</p>
            <button className="bg-transparent hover:bg-gradient-to-r from-green-600 to-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded" style={{ "width": "130px", "marginTop": "5%" }}>
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
