import Image from 'next/image';
import { MdCloud, MdPalette } from 'react-icons/md';
import Article from '../../components/CardService';

import Menu from  '../../components/Menu';

import { HeaderPage } from './styles';

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

      <section>
        <div>
          <h2>What we do <span>Our Service</span></h2>

          <div>
            ? ?
          </div>
        </div>
        <div>
          <Article
            title="Interior Design"
            description="Lorem ipsum dolor amet consectetur
            adipiscing elit sed eiusmod tempor
            incididunt ut labore."
            Icon={MdCloud}
            highlight={false}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
