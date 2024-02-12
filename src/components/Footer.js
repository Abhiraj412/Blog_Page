function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center fixed bottom-0 w-full">
      <p className="text-gray-500">Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
