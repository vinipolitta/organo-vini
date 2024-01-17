import "./Banner.css";

export const Banner = () => {
  const bannerImage = "/imagens/imagens/banner.png";
  return (
    <header className="banner">
      <img
        className="banner"
        src={bannerImage}
        alt="Banner principal da pagina"
      />
    </header>
  );
};
