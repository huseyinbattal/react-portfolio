const Footer = () => {
  return (
    <>
      <footer className="flex flex-col sm:flex-row  items-center text-center gap-x-10 dark:bg-gray-900 dark:text-white gap-y-3 justify-center  font-mono text-blue-800 p-8 text-sm">
        <span>© {new Date().getFullYear()} / Hüseyin BATTAL</span>
        <p className="mb-0">
          <a
            className="e-mail hover:text-red-500 hover:underline hover:dark:text-teal-400"
            href="https://www.huseyinbattal.online/"
            rel="noopener noreferrer"
          >
            www.huseyinbattal.online
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
