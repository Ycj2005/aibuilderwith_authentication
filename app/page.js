import { AppleCardsCarouselDemo } from "./compo/applecardcarousel";
import { BackgroundBeamsWithCollisionDemo } from "./compo/beamexplode";
import { CardHoverEffectDemo } from "./compo/cardsgroup";
import { TypewriterEffectSmoothDemo } from "./compo/gettingstarted";
import { NavbarDemo } from "./compo/navbarmenu";
export default function Home() {
  return (
    <>
      {/* <NavbarDemo/> */}
      <BackgroundBeamsWithCollisionDemo />
      <AppleCardsCarouselDemo />
      {/* <CardHoverEffectDemo /> */}
      <TypewriterEffectSmoothDemo />
    </>
  );
}
