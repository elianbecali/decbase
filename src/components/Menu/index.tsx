import Image from 'next/image';
import { MdMenu } from 'react-icons/md';

import { Nav } from './styles';

function Menu() {
  return (
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
      {/* <div className="menu">
        <MdMenu size={28} />
      </div> */}
    </Nav>
  );
}

export default Menu;
