// Import generated plant images
import palas from "@/assets/palas_hero.jpeg";
import palas2 from "@/assets/palas_2.jpeg";
import palas3 from "@/assets/Palas.jpeg";
import pimpla from "@/assets/pimpal.jpeg"
import pimpla2 from "@/assets/Pimpal_1.jpeg"
import pimpla3 from "@/assets/pimpal_2.jpg"
import vad from "@/assets/vad.jpeg"
import vad2 from "@/assets/vad_2.webp"
import vad3 from "@/assets/vad_3.jpg"
import audumbar from "@/assets/audumbar_1.jpeg"
import audumbar2 from "@/assets/audumbar.jpeg"
import audumbar3 from "@/assets/audumber_3.jpeg"
import bakul from "@/assets/bakul.jpeg"
import bakul2 from "@/assets/bakul_2.jpeg"
import bakul3 from "@/assets/bakul_3.jpeg"
import arjun from "@/assets/arjun.webp"
import arjun2 from "@/assets/arjun_1.jpeg"
import arjun3 from "@/assets/arjun_2.jpeg"
import bel from "@/assets/bel.jpg"
import bel2 from "@/assets/bel_1.jpg"
import bel3 from "@/assets/bel_2.jpeg"
import kusum from "@/assets/kusum.jpg"
import kusum2 from "@/assets/kusum_1.webp"
import kusum3 from "@/assets/kusum_2.jpg"

// Image mapping for plant IDs
export const plantImages: Record<number, string[]> = {
  1: [palas, palas2, palas3],
  2: [pimpla, pimpla2, pimpla3],
  3: [vad2, vad, vad3],
  4: [audumbar, audumbar2, audumbar3],
  5: [bakul, bakul2, bakul3],
  6: [arjun, arjun2, arjun3],
  7: [bel, bel2, bel3],
  8: [kusum3, kusum, kusum2],

};

// Get image URL for a plant
export const getPlantImage = (plantId: number, imageIndex: number = 0): string => {
  const images = plantImages[plantId];
  if (images && images[imageIndex]) {
    return images[imageIndex];
  }
  return "/api/placeholder/400/300"; // fallback
};