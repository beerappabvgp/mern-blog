import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook , BsInstagram , BsTwitter , BsGithub , BsDribbble} from 'react-icons/bs'
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          {/* logo */}
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                People's
              </span>
              Blog
            </Link>
          </div>
          {/* links */}
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Our Story
                </Footer.Link>
                {/* second link */}
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  People's blog
                </Footer.Link>
                {/* third link */}
                <Footer.Link href="/#">Mission & Values</Footer.Link>
                {/* fourth link */}
                <Footer.Link href="/#">Contributors</Footer.Link>
                {/* fifth link */}
                <Footer.Link href="/#">Terms of Service</Footer.Link>
                {/* sixth link */}
                <Footer.Link href="/#">Join Our Community</Footer.Link>
                {/* seventh link */}
                <Footer.Link href="/#">Subscribe</Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* second section */}
            <div>
              <Footer.Title title="FOLLOW US" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Twitter</Footer.Link>
                {/* second link */}
                <Footer.Link href="#">Instagram</Footer.Link>
                {/* third link */}
                <Footer.Link href="/#">Facebook</Footer.Link>
                {/* fourth link */}
                <Footer.Link href="/#">LinkedIn</Footer.Link>
                {/* fifth link */}
                <Footer.Link href="/#">Discord</Footer.Link>
                {/* sixth link */}
                <Footer.Link href="/#">WhatsApp</Footer.Link>
                {/* seventh link */}
                <Footer.Link href="#">Telegram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* third section */}
            <div>
              <Footer.Title title="LEGAL" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Legal Hub</Footer.Link>
                {/* second link */}
                <Footer.Link href="#">Terms & Policies</Footer.Link>
                {/* third link */}
                <Footer.Link href="/#">Regulatory Zone</Footer.Link>
                {/* fourth link */}
                <Footer.Link href="/#">Guidelines & Policies</Footer.Link>
                {/* fifth link */}
                <Footer.Link href="/#">Terms of Use</Footer.Link>
                {/* sixth link */}
                <Footer.Link href="/#">Policies & Compliance</Footer.Link>
                {/* seventh link */}
                <Footer.Link href="#">Regulatory Roadmap</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by = "people's blog" year = {new Date().getFullYear()} className=""/>
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook}/>
                <Footer.Icon href="#" icon={BsInstagram}/>
                <Footer.Icon href="#" icon={BsTwitter}/>
                <Footer.Icon href="#" icon={BsGithub}/>
                <Footer.Icon href="#" icon={BsDribbble}/>
            </div>
        </div>
      </div>
    </Footer>
  );
}
