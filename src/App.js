import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileImg from './assets/img/me.jpg'
import { faEnvelope, faBriefcase, faTag } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faGithub,faLinkedin,faMedium} from '@fortawesome/free-brands-svg-icons'


function App() {
  return (
    <div className="App h-screen">
      <div className="container flex items-stretch h-full w-3/4  mx-auto">
        <div className="self-center basis-2/4">
          <div className='hi-badge rounded-sm'>
            Hi. I'm
          </div>
          <div>
            <p className='text-5xl tracking-wide'>Serhan <span className='font-light'>Yavçin</span></p>
            <p className='text-xl tracking-wide font-light'>Software Developer</p>
          </div>

          <div className='flex flex-row mt-5 space-x-5'>
            <div className='tag-item'> <FontAwesomeIcon icon={faTag} /> Php</div>
            <div className='tag-item'><FontAwesomeIcon icon={faTag} /> Node JS</div>
            <div className='tag-item'><FontAwesomeIcon icon={faTag} /> Python</div>
            <div className='tag-item'><FontAwesomeIcon icon={faTag} /> Javascript</div>
            <div className='tag-item'><FontAwesomeIcon icon={faTag} /> CSS</div>
            <div className='tag-item'><FontAwesomeIcon icon={faTag} /> React JS</div>
          </div>
          <div className='flex flex-row mt-5'>
            <div>
              <FontAwesomeIcon icon={faBriefcase} /> - <a href='https://prisync.com/'>Prisync</a>
            </div>
          </div>
          <div className='flex flex-row mt-1'>
            <div>
              <FontAwesomeIcon icon={faEnvelope} /> - <a href='mailto:info@serhanyavcin.com'>info@serhanyavcin.com</a>
            </div>
          </div>
          <div className='flex flex-row mt-5 space-x-5 justify-end border-t-2 p-4 border-slate-50'>
            <div>
              <a href='https://twitter.com/yavcin_serhan' target="_blank"><FontAwesomeIcon icon={faTwitter} size="xl" /> </a>
            </div>
            <div>
              <a href='https://serhan-yavcin.medium.com/' target="_blank"><FontAwesomeIcon icon={faMedium} size="xl"/> </a>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/syavcin/' target="_blank"><FontAwesomeIcon icon={faLinkedin} size="xl"/> </a>
            </div>
            <div>
              <a href='https://github.com/SerhnYvcn' target="_blank"><FontAwesomeIcon icon={faGithub} size="xl"/></a> 
            </div>
          </div>

        </div>
        <div className="self-center ml-20 basis-1/2">
          <img src={profileImg} className="w-2/2 rounded-full	border-4 border-slate-50	 justify-end"/>
        </div>
      </div>
    </div>
  );
}

export default App;
