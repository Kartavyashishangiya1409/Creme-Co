const Footer = () => (
  <footer className="border-t border-border py-8 px-6 bg-secondary/20">
    <div className="container mx-auto text-center">
      <p className="font-playfair text-lg text-foreground mb-1">Crème & Co.</p>
      <p className="font-poppins text-xs text-muted-foreground">
        © {new Date().getFullYear()} Crème & Co. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
