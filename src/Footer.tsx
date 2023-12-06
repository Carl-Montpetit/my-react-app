function Footer() {
  const localTime = new Date();
  const currentDate = localTime.toLocaleTimeString();
  return (
    <>
      <h4>©Carl Montpetit</h4>
      <h5>{currentDate}</h5>
    </>
  );
}

export default Footer;
