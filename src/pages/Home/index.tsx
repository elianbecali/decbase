import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BsCardChecklist, BsHouseDoor } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import CardService from '../../components/CardService';

import Menu from  '../../components/Menu';

import { HeaderPage, SectionService } from './styles';

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
          <a href="#">contact</a>
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
    </>
  );
}

export default Home;
