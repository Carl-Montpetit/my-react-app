function Footer() {
  const currentDate = new Date();
  const localTime = currentDate.toLocaleTimeString();
  return (
    <>
      <h4>©Carl Montpetit</h4>
      <h5>{localTime}</h5>
    </>
  );
}

export default Footer;
