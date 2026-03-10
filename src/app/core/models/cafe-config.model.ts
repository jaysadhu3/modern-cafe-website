export interface CafeConfig {

  branding: {
    name: string;
    tagline: string;
  };

  hero: {
    headline: string;
    subtext: string;
    ctaText: string;
  };

  menu: {
    name: string;
    price: number;
  }[];

  gallery: {
    image: string;
  }[];

  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
    mapEmbed: string;
  };

}