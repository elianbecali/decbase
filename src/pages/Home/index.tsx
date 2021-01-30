import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BsCardChecklist, BsHouseDoor } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import CardService from '../../components/CardService';

import Menu from  '../../components/Menu';

import { ButtonCall, HeaderPage, SectionAboutUs, SectionService } from './styles';

function Home() {
  return (
    <>
      <Menu />

      <HeaderPage>
        <div className="content">
          <h1>Modern Interior</h1>
          <h2>Create Your Interior Design.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.
          </p>
          <ButtonCall href="#">
            contact
          </ButtonCall>
        </div>
        <div>
          <Image
            src="/images/toa-heftiba.png"
            alt="Interior design at home"
            layout="fill"
          />
        </div>
      </HeaderPage>

      <SectionService>
        <div>
          <h2>What we do <span>Our Service</span></h2>

          <div className="icons">
            <span>
              <MdKeyboardArrowLeft size={20} color="#646464" />
            </span>
            <span className="marker">
              <MdKeyboardArrowRight size={20} color="#FFF" />
            </span>
          </div>
        </div>
        <div>
          <CardService
              title="Interior Design"
              description="Lorem ipsum dolor amet consectetur
              adipiscing elit sed eiusmod tempor
              incididunt ut labore."
              Icon={BsHouseDoor}
              isHighlight={false}
            />
          <CardService
            title="Architecture"
            description="Lorem ipsum dolor amet consectetur
            adipiscing elit sed eiusmod tempor
            incididunt ut labore."
            Icon={AiOutlineHome}
            isHighlight={true}
          />
          <CardService
            title="Planning"
            description="Lorem ipsum dolor amet consectetur
            adipiscing elit sed eiusmod tempor
            incididunt ut labore."
            Icon={BsCardChecklist}
            isHighlight={false}
          />
        </div>
      </SectionService>

      <SectionAboutUs>
        <div>
          {/* <Image
            src="/images/pexels-vecislavas-popa.png"
            alt="Interior Design in the house"
            layout="fill"
          /> */}
        </div>
        <div>
          <h2>About Us</h2>
          <h3>Interioris The Will of An Epoch Mextreo</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form injected
            humour, or randomised words which don't look even slightly
            believable.If you are going to use a passage of Lorem Ipsum,
            sure there isn't anything embarrassing hidden the middleof text.
            All the Lorem Ipsum generators on the Internettend to repeat
            predefined chunks as necessary,making this the first true
            generator on the Internet.
          </p>

          <ButtonCall href="#">
            Learn More
          </ButtonCall>
        </div>
      </SectionAboutUs>
    </>
  );
}

export default Home;
