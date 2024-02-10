import { ref } from 'vue';

export const useSlider = () => {
  interface Image {
    src: string;
    alt: string;
  }

  interface Slide {
    review: string;
    image: Image;
  }

  const slidesList: Slide[] = [
    {
      review: 'The best hard-sided carry-on suitcase',
      image: {
        src: 'https://images.ctfassets.net/635jp660g7e4/423yXGIKnTRJuGH7RinJ1q/00f0c0196d7e08d655cafdc20514d09f/NYT-WIRE-1-fl-cmyk-k.png?fm=webp&q=75&w=3840',
        alt: 'The New York Times Wirecutter', 
      }
    },
    {
      review: 'Away is the only way to travel',
      image: {
        src: 'https://images.ctfassets.net/635jp660g7e4/2RX4OEKgP7NAHUgAY0rB0c/74cfde646e6eee4e3887d99c2f872d90/Gear-Patrol-Logotype-Text-Size-Black.png?fm=webp&q=75&w=3840',
        alt: 'Gear Patrol',
      }
    },
    {
      review: 'Though Away has only been around for seven years, the New York-based brand has left its mark on the world—just visit any airport to see for yourself.',
      image: {
        src: 'https://images.ctfassets.net/635jp660g7e4/4edJEGkUDWcA5bRbePAMnx/e9de857b320893c5bcd2ed47aa4c08ce/Vogue5.png?fm=webp&q=75&w=3840',
        alt: 'Vogue',
      }
    }
  ]


  return {
    slidesList
  }
}