// import React, { useCallback } from 'react'
// import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons
// } from './EmblaCarouselArrowButtons'
// import Autoplay from 'embla-carousel-autoplay';
// import useEmblaCarousel from 'embla-carousel-react';

// // Assuming EmblaOptionsType and EmblaCarouselType are imported or defined elsewhere

// type PropType = {
//   slides: number[];
//   options?: EmblaOptionsType;
// };

// // Define a type or interface for the Autoplay plugin instance
// interface AutoplayInstance {
//   play: () => void;
//   stop: () => void;
//   // Add other methods or properties you expect to use from the Autoplay plugin
// }

// const EmblaCarousel: React.FC<PropType> = (props) => {
//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

//   const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
//     // Use type assertion here for the autoplay plugin instance
//     const autoplay = emblaApi?.plugins()?.autoplay as AutoplayInstance;
//     // Now you can safely call methods on autoplay, e.g., autoplay.play();
//   }, []);

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick
//   } = usePrevNextButtons(emblaApi, onNavButtonClick)

//   return (
//     <section className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div className="embla__slide" key={index}>
//               <div className="embla__slide__number">{index + 1}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla__controls">
//         <div className="embla__buttons">
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default EmblaCarousel
