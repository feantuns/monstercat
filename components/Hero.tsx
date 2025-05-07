const Hero = ({ album }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div>
        <img src={album.images[0].url} alt={album.name} className="w-[35vw]" />
      </div>
    </div>
  );
};

export default Hero;
