function Footer() {
  const year = new Date().getFullYear();
  return <footer className="footer">©{year} copyright kalumian</footer>;
}

export default Footer;
