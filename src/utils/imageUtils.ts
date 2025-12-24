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
import jambhul from "@/assets/jambhul.jpg"
import jambhul1 from "@/assets/jambhul_1.jpg"
import jambhul2 from "@/assets/jambhul_2.jpg"
import tamrind from "@/assets/tamarind_1.jpg"
import tamrind2 from "@/assets/tamarind_2.jpg"
import tamrind3 from "@/assets/tamarind_3.jpg"
import amla1 from "@/assets/amla_1.jpg"
import amla2 from "@/assets/amla_2.webp"
import amla3 from "@/assets/amla_3.jpeg"
import undi from "@/assets/undi.jpg"
import undi2 from "@/assets/undi_2.jpg"
import undi3 from "@/assets/undi_3.jpg"
import neem1 from "@/assets/neem_1.jpg"
import neem2 from "@/assets/neem_2.jpg"
import neem3 from "@/assets/neem_3.avif"
import bibba1 from "@/assets/bibba_1.jpg"
import bibba2 from "@/assets/bibba_2.jpg"
import bibba3 from "@/assets/bibba_3.jpg"
import behada1 from "@/assets/behada_1.jpg"
import behada2 from "@/assets/behada_2.webp"
import behada3 from "@/assets/behada_3.webp"
import hirada from "@/assets/hirada1.jpg"
import hirada1 from "@/assets/hirada2.jpg"
import hirada2 from "@/assets/hirada3.jpg"
import mahua1 from "@/assets/mahua1.jpg"
import mahua2 from "@/assets/mahua2.jpg"
import mahua3 from "@/assets/mahua3.jpg"
import muchkunda1 from "@/assets/muchkunda_1.jpg"
import muchkunda2 from "@/assets/muchkunda_2.jpg"
import muchkunda3 from "@/assets/muchkunda_3.jpg"
import sankasur1 from "@/assets/sankasur1.jpg"
import sankasur2 from "@/assets/sankasur2.jpg"
import sankasur3 from "@/assets/sankasur3.jpg"
import surangi1 from "@/assets/surangi1.jpg"
import surangi2 from "@/assets/surangi2.jpg"
import surangi3 from "@/assets/surangi3.jpg"

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
  9: [jambhul, jambhul1, jambhul2],
  10: [tamrind, tamrind2, tamrind3],
  18: [amla1, amla2, amla3],
  12: [undi3, undi2, undi],
  19: [neem1, neem2, neem3],
  13: [bibba2, bibba1, bibba3],
  17: [behada2, behada1, behada3],
  16: [hirada, hirada1, hirada2],
  11: [mahua2, mahua1, mahua3],
  20: [muchkunda1, muchkunda2, muchkunda3],
  15: [sankasur1, sankasur2, sankasur3],
  14: [surangi1, surangi2, surangi3]

};

// Get image URL for a plant
export const getPlantImage = (plantId: number, imageIndex: number = 0): string => {
  const images = plantImages[plantId];
  if (images && images[imageIndex]) {
    return images[imageIndex];
  }
  return "/api/placeholder/400/300"; // fallback
};