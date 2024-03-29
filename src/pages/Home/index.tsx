import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BsCardChecklist, BsHouseDoor } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import CardService from '../../components/CardService';

import Menu from  '../../components/Menu'

import * as S from '../../styles/Home';

function Home() {
  return (
    <>
      <Menu />

      <S.HeaderPage>
        <div className="content">
          <h1>Modern Interior</h1>
          <h2>Create Your Interior Design.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.
          </p>
          <S.ButtonCall href="#">
            contact
          </S.ButtonCall>
        </div>
        <div>
          <Image
            src="/images/toa-heftiba.png"
            alt="Interior design at home"
            layout="fill"
          />
        </div>
      </S.HeaderPage>

      <S.SectionService>
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
      </S.SectionService>

      <S.SectionAboutUs>
        <div>
          <Image
            src="/images/pexels-vecislavas-popa.png"
            alt="Interior Design in the house"
            width="681"
            height="726"
          />
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

          <S.ButtonCall href="#">
            Learn More
          </S.ButtonCall>
        </div>
      </S.SectionAboutUs>

      <S.SectionCompany>
        <div>
          <p>
            <span>
              <img src="/images/20.svg" alt="20" />
            </span>
            Years Of Successful <br />
            Working <br />
            The Market
          </p>
          <S.ButtonCall href="#">Read More</S.ButtonCall>
        </div>

        <div>
          <Image src="/images/pexels-lisa-fotios.png" width="682" height="726" alt="Light on"/>
        </div>
      </S.SectionCompany>

      <S.SectionWorkSuccess>
        <p>
          3000+ Completed Work Which WE have Successfully Done
        </p>
        <div>
          <div>
            980
            <span>Project</span>
          </div>

          <div>
            520
            <span>Happy Client</span>
          </div>

          <div>
            330
            <span>Winners</span>
          </div>

          <div>
            120
            <span>Recoment</span>
          </div>
        </div>
      </S.SectionWorkSuccess>

      <S.SectionTestimonials>
        <div>
          <h2>Testimonials</h2>
          <h3>Client says about us</h3>
        </div>
        <div className="icons">
          <span>
            <MdKeyboardArrowLeft size={20} color="#646464" />
          </span>
          <span className="marker">
            <MdKeyboardArrowRight size={20} color="#FFF" />
          </span>
        </div>

        <div className="testimonials">
          <div className="card">
            <div>
              <img src="/images/louis.png" alt="Profile Louis Saville"/>
            </div>

            <div>
              <p>Louis Saville <span>/CEO at Google inc</span></p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="card">
            <div>
              <img src="/images/rekha.png" alt="Profile Rekha Varadwaz"/>
            </div>

            <div>
              <p>Rekha Varadwaz <span>/Manager at Nike inc</span></p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </S.SectionTestimonials>

      <S.SectionLatestNews>
        <div>
          <h2>Latest News</h2>
          <p>From Our Blog</p>
        </div>
        <div>
          <article>
            <div>
              <Image src="/images/img-01.png" width="600" height="480" />
            </div>

            <div>
              <h3>2020 Interior Design Trends</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                incididunt ut labore et dolore magna aliqua.
              </p>

              <S.ButtonCall href="#">Continue Reading...</S.ButtonCall>
            </div>
          </article>

          <article>
            <div>
              <Image src="/images/img-02.png" width="600" height="480" />
            </div>

            <div>
              <h3>2020 Interior Design Trends</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                incididunt ut labore et dolore magna aliqua.
              </p>

              <S.ButtonCall href="#">Continue Reading...</S.ButtonCall>
            </div>
          </article>
        </div>
      </S.SectionLatestNews>

      <S.SectionSignUp>
        <div>
          <h3>Don't Forget to sign up</h3>
          <span></span>
          <p>Find out early about all upcoming promotions and new
            product releases with our newsletter.
          </p>
        </div>
        <div>
          <form>
            <input type="email" placeholder="Enter your email address....." />
            <button>subscribe</button>
          </form>
        </div>
      </S.SectionSignUp>

      <S.SectionFooter>
        <div className="container">
          <div className="brand">
            <img src="images/logo.svg" alt="Logo decbase" />
            <p>But i must explain to you all this mistaken
              idea of dencouncing pleasure.
            </p>
          </div>
          <div>
            <p>Quick Links</p>

            <ul>
              <li>
                <a href="#">About Our Company</a>
              </li>
              <li>
                <a href="#">Services WE provide</a>
              </li>
              <li>
                <a href="#">Career & Opportunity</a>
              </li>
              <li>
                <a href="#">Privacy & policy</a>
              </li>
              <li>
                <a href="#">Contact US</a>
              </li>
            </ul>
          </div>
          <div>
            <p>Company</p>

            <ul>
              <li><a href="#">About Company</a></li>
              <li><a href="#">Our Testimonials</a></li>
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Our misson</a></li>
              <li><a href="#">Get a free Quot</a></li>
            </ul>
          </div>
          <div>
            <p>Contact us</p>

            <address>
              <p>
                Sagrada Familia, Herba <br />
                Street Front USA <br />
                <a href="mailto:brandoxide@gmail.com" >brandoxide@gmail.com</a> <br />
                002-568423591
              </p>
            </address>
          </div>
          <div className="social">
            <p>Follow Us</p>


            <ul>
              <li>
                <a href="#">
                  <img src="icon-facebook.svg" alt="Icon Facebook"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="icon-twitter.svg" alt="Icon Twitter"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="icon-instagram.svg" alt="Icon Instagram"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="icon-linkedin.svg" alt="Icon LinkedIn"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
          Copyright @ 2020 <span>Brandoxide</span>.all right reserved.
          </p>
        </div>
      </S.SectionFooter>

    </>
  );
}

export default Home;
