import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 px-6">
    <div className="container mx-auto max-w-3xl">
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
        Visit Us
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex gap-4">
            <MapPin className="w-5 h-5 text-primary mt-1 shrink-0 cursor-pointer" />
            <div className="font-poppins text-sm text-foreground/80 leading-relaxed">
              <p className="font-medium text-foreground mb-1">Crème & Co.</p>
              Ground Floor, Rajpath Complex<br />
              Near Iscon Temple, SG Highway<br />
              Ahmedabad, Gujarat 380015<br />
              India
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Phone className="w-5 h-5 text-primary shrink-0" />
            <span className="font-poppins text-sm text-foreground/80 cursor-pointer">+91 98765 XXXXX</span>
          </div>

          <div className="flex gap-4 items-center">
            <Mail className="w-5 h-5 text-primary shrink-0 cursor-pointer" />
            <span className="font-poppins text-sm text-foreground/80 cursor-pointer">contact@cremeandco.in</span>
          </div>
        </div>

        <div className="flex gap-4">
          <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
          <div className="font-poppins text-sm text-foreground/80">
            <p className="font-medium text-foreground mb-1">Opening Hours</p>
            <p>Every Day</p>
            <p className="text-lg font-medium text-foreground">9:00 AM – 11:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
