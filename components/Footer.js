import {BiWorld} from   "react-icons/bi"

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col sm:flex-row  items-center text-center gap-x-10 dark:bg-gray-900 dark:text-white gap-y-3 justify-center  font-mono text-blue-800 p-8 text-sm">
        <span>© {new Date().getFullYear()} / Hüseyin BATTAL</span>
        <p className="mb-0 flex justify-center space-x-2 hover:text-red-800">
          <a
            className="e-mail underline hover:text-red-800   dark:text-white text-blue-800  hover:underline hover:dark:text-teal-400"
            href="https://www.huseyinbattal.online/"
            rel="noopener noreferrer"
          >
            huseyinbattal.online 
          </a>
        <BiWorld size={20}/>
        </p>
      </footer>
    </>
  );
};

export default Footer;
