import heroImage from "@/assets/hero-cafe.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Bright luxury café interior with warm sunlight, wooden furniture and indoor plants"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/70" />
      <div className="relative z-10 text-center px-6">
        <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 drop-shadow-sm">
          Crème & Co.
        </h1>
        <p className="font-poppins text-lg md:text-xl text-foreground/80 mb-8 font-light tracking-wide">
          Crafted Moments in Every Cup
        </p>
        <button
          onClick={scrollToMenu}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-poppins text-sm font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg"
        >
          View Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;
