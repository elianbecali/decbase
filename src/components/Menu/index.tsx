import Image from 'next/image';
import { MdMenu } from 'react-icons/md';

import { Header, Nav } from './styles';

function Menu() {
  return (
    <>
      <Nav>
        <Image src="/images/logo.svg" alt="DecBase" width="150" height="47" />

        <div>
          <a href="#">Home</a>
          <a href="#">Project</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
          <a href="#">Sign up</a>
        </div>
        <div className="menu">
          <MdMenu size={28} />
        </div>
      </Nav>

      <Header>
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
      </Header>
    </>
  );
}

export default Menu;
