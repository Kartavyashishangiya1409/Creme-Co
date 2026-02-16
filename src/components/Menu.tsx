import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuData = {
  coffee: {
    emoji: "☕",
    items: [
      { name: "Espresso", price: 120 },
      { name: "Cappuccino", price: 180 },
      { name: "Latte", price: 200 },
      { name: "Mocha", price: 220 },
    ],
  },
  desserts: {
    emoji: "🍰",
    items: [
      { name: "Chocolate Truffle Cake", price: 250 },
      { name: "Blueberry Cheesecake", price: 280 },
      { name: "Red Velvet Pastry", price: 220 },
      { name: "Croissant", price: 150 },
    ],
  },
  beverages: {
    emoji: "🥤",
    items: [
      { name: "Cold Coffee", price: 220 },
      { name: "Fresh Lime Soda", price: 120 },
      { name: "Iced Tea", price: 150 },
      { name: "Hot Chocolate", price: 200 },
    ],
  },
};

const MenuCard = ({ name, price }: { name: string; price: number }) => (
  <div className="bg-card border border-border rounded-lg p-6 flex items-center justify-between hover:shadow-md transition-shadow">
    <span className="font-playfair text-lg text-card-foreground">{name}</span>
    <span className="font-poppins text-sm font-medium text-primary">₹{price}</span>
  </div>
);

const Menu = () => (
  <section id="menu" className="py-20 px-6 bg-secondary/30">
    <div className="container mx-auto max-w-3xl">
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-foreground mb-2">
        Our Menu
      </h2>
      <p className="text-center text-muted-foreground font-poppins mb-12">
        A curated selection of premium offerings
      </p>

      <Tabs defaultValue="coffee" className="w-full">
        <TabsList className="w-full justify-center gap-2 bg-transparent mb-8">
          {Object.entries(menuData).map(([key, { emoji }]) => (
            <TabsTrigger
              key={key}
              value={key}
              className="font-poppins text-sm capitalize data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border data-[state=active]:border-primary"
            >
              {emoji} {key}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(menuData).map(([key, { items }]) => (
          <TabsContent key={key} value={key} className="space-y-3">
            {items.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

export default Menu;
