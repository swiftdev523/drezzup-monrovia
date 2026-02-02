import { Instagram } from "lucide-react";
import { Section, SectionTitle } from "../ui/Section";
import Button from "../ui/Button";
import { SITE_CONFIG } from "../../config/constants";

const images = [
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=400&h=400&fit=crop",
];

const InstagramSection = () => (
  <Section className="bg-linear-to-b from-gray-50 to-white">
    <div className="text-center mb-12">
      <SectionTitle>Behind the Scenes</SectionTitle>
      <p className="text-gray-600 mb-6 mt-4">
        Follow us on Instagram for daily inspiration
      </p>
      <a
        href={SITE_CONFIG.contact.instagram}
        target="_blank"
        rel="noopener noreferrer">
        <Button className="inline-flex items-center gap-3">
          <Instagram size={20} />
          FOLLOW US
        </Button>
      </a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
      {images.map((img, i) => (
        <a
          key={i}
          href={SITE_CONFIG.contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300">
          <img
            src={img}
            alt={`Instagram ${i + 1}`}
            className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Instagram size={32} className="text-white" />
          </div>
        </a>
      ))}
    </div>
  </Section>
);

export default InstagramSection;
