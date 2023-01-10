const Footer = () => {
  return (
    <>
      <footer className="flex flex-col sm:flex-row  items-center text-center gap-x-10 gap-y-3 justify-center mb-5 font-mono text-blue-800 p-2 text-sm">
        <span>© {new Date().getFullYear()} / Hüseyin BATTAL</span>
        <p className="mb-0">
          <a
            className="e-mail"
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
