import React from 'react';
import appleOneLogo from '../assets/h2.png';
import appleSixServicesIcons from '../assets/figure (30).png';
import logoTvPlus from '../assets/h3.png';
import imgTvShows from '../assets/div (2).png';
import imgMusicPlaylists from '../assets/div (3).png';
import logoMusic from '../assets/svg (2).png';
import logoNews from '../assets/div (4).png';
import imgNewsZendaya from '../assets/d1d4db0a6824d46873edeca3c9902fb8777b8b1c.png';
import logoArcade from '../assets/div (5).png';
import iconArcadeJoy from '../assets/7c0405ac6089597b68b38d94eee705c02458fe0c.jpg';
import logoFitness from '../assets/div (6).png';
import imgFitnessWorkout from '../assets/figure (31).png';
import logoGiftCard from '../assets/div (7).png';
import imgGiftCards from '../assets/figure (32).png';
import imgResearchStudies from '../assets/figure (33).png';

export default function ServicesSection() {
  return (
    <section id="entertainment" className="bg-[#f5f5f7] pb-16 text-[#1d1d1f]">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6">
        {/* 1. Apple One Banner Header Card */}
        <div className="bg-white rounded-none border border-[#d2d2d7]/30 shadow-sm hover:shadow-lg transition-all duration-300 mb-8 p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[380px]">
          <div className="flex justify-center mb-8 md:mb-0 md:w-1/2">
            <img
              src={appleSixServicesIcons}
              alt="Apple Music, TV+, Arcade, News+, Fitness+, and iCloud+"
              className="max-w-[320px] sm:max-w-[380px] h-auto object-contain"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 text-center md:text-left flex flex-col items-center md:items-start">
            <img
              src={appleOneLogo}
              alt="Apple One"
              className="h-12 md:h-14 w-auto mb-4 mx-auto md:mx-0 object-contain"
            />
            <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-[#1d1d1f] tracking-tight leading-tight mb-4 max-w-[420px]">
              Bundle up to six Apple services.<br />And enjoy more for less.
            </h3>
            <div className="flex items-center justify-center md:justify-start space-x-6">
              <a
                href="#apple-one-try"
                className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
              >
                Try it free9
              </a>
              <a
                href="#apple-one-learn"
                className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* 2. Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Card 1: Apple TV+ (Dark Card with Full-width Image) */}
          <div className="bg-black text-white rounded-none border border-black shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between pt-10 md:pt-14 px-6 md:px-12 pb-0 overflow-hidden text-center min-h-[300px] md:min-h-[400px]">
            <div>
              <div className="flex justify-center mb-3">
                <img src={logoTvPlus} alt="Apple TV+" className="h-7 sm:h-8 w-auto object-contain" />
              </div>
              <p className="text-[14px] md:text-[15px] text-[#a1a1a6] font-normal mb-4 max-w-[360px] mx-auto">
                Get 3 months of Apple TV+ free<br />when you buy an iPhone.10
              </p>
              <div className="flex items-center justify-center space-x-6 mb-8">
                <a
                  href="#tv-try"
                  className="text-[#2997ff] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Try it free
                </a>
                <a
                  href="#tv-learn"
                  className="text-[#2997ff] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="w-full mt-auto -mb-1 -mx-6 md:-mx-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)]">
              <img
                src={imgTvShows}
                alt="Ted Lasso, Bad Sisters, Severance on Apple TV+"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Card 2: Apple Music (White Card with Full-width Image) */}
          <div className="bg-white text-[#1d1d1f] rounded-none border border-[#d2d2d7]/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between pt-10 md:pt-14 px-6 md:px-12 pb-0 overflow-hidden text-center min-h-[460px] md:min-h-[500px]">
            <div>
              <div className="flex justify-center mb-3">
                <img src={logoMusic} alt="Apple Music" className="h-8 md:h-10 w-auto object-contain" />
              </div>
              <p className="text-[14px] md:text-[15px] text-[#6e6e73] font-normal mb-4 max-w-[360px] mx-auto">
                Over 100 million songs.<br />Start listening for free today.
              </p>
              <div className="flex items-center justify-center space-x-6 mb-8">
                <a
                  href="#music-try"
                  className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Try it free11
                </a>
                <a
                  href="#music-learn"
                  className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="w-full mt-auto -mb-1 -mx-6 md:-mx-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)]">
              <img
                src={imgMusicPlaylists}
                alt="Apple Music Playlists"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Card 3: Apple News+ */}
          <div className="bg-[#f5f5f7] rounded-none border border-[#d2d2d7]/30 shadow-sm hover:shadow-lg transition-all duration-300 pt-10 md:pt-14 px-6 md:px-12 pb-0 flex flex-col justify-between overflow-hidden text-center min-h-[480px] md:min-h-[520px]">
            <div>
              <img src={logoNews} alt="Apple News+" className="h-10 md:h-12 w-auto mb-3 mx-auto object-contain" />
              <p className="text-[14px] md:text-[15px] text-[#1d1d1f] font-normal mb-3 max-w-[360px] mx-auto leading-normal">
                Get 3 months of Apple News+ free<br />when you buy an iPhone.12
              </p>
              <div className="mb-6 flex justify-center">
                <a
                  href="#apple-news-learn"
                  className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="w-full mt-auto -mb-1 -mx-6 md:-mx-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] flex justify-center">
              <img
                src={imgNewsZendaya}
                alt="TIME 100 on Apple News+"
                className="w-full h-auto max-h-[310px] sm:max-h-[330px] md:max-h-[350px] object-contain object-bottom transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Card 4: Apple Arcade */}
          <div className="bg-white rounded-none border border-[#d2d2d7]/30 shadow-sm hover:shadow-lg transition-all duration-300 pt-10 md:pt-14 px-6 md:px-12 pb-8 flex flex-col justify-between text-center min-h-[480px] md:min-h-[520px]">
            <div>
              <img src={logoArcade} alt="Apple Arcade" className="h-10 md:h-12 w-auto mb-3 mx-auto object-contain" />
              <p className="text-[14px] md:text-[15px] text-[#1d1d1f] font-normal mb-3 max-w-[360px] mx-auto leading-normal">
                Get 3 months of Apple Arcade<br />free when you buy an iPhone.
              </p>
              <div className="mb-6 flex justify-center space-x-6">
                <a
                  href="#apple-arcade-try"
                  className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Try it free13
                </a>
                <a
                  href="#apple-arcade-learn"
                  className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="mt-auto flex justify-center items-center pb-4 pt-2">
              <img
                src={iconArcadeJoy}
                alt="Apple Arcade Controller"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 object-contain mix-blend-multiply transition-transform duration-500 hover:scale-[1.05]"
              />
            </div>
          </div>

          {/* Card 5: Apple Fitness+ */}
          <div className="bg-white rounded-none border border-[#d2d2d7]/30 shadow-sm hover:shadow-lg transition-all duration-300 pt-10 md:pt-14 px-6 md:px-12 pb-0 flex flex-col justify-between overflow-hidden text-center min-h-[480px] md:min-h-[520px]">
            <div>
              <img src={logoFitness} alt="Apple Fitness+" className="h-10 md:h-12 w-auto mb-3 mx-auto object-contain" />
              <p className="text-[14px] md:text-[15px] text-[#6e6e73] font-normal mb-3 max-w-[360px] mx-auto">
                Fitness for everyone.<br />Now all you need is iPhone.
              </p>
              <div className="mb-4 flex justify-center space-x-6">
                <a
                  href="#apple-fitness-learn"
                  className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Learn more
                </a>
                <a
                  href="#apple-fitness-try"
                  className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Try it free14
                </a>
              </div>
            </div>
            <div className="w-full mt-auto -mb-1 -mx-6 md:-mx-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] flex justify-center">
              <img
                src={imgFitnessWorkout}
                alt="Apple Fitness+ Workout"
                className="w-[98%] h-auto object-cover scale-[0.98] transition-transform duration-500 hover:scale-[1.00]"
              />
            </div>
          </div>

          {/* Card 6: Apple Gift Card */}
          <div className="bg-white rounded-none border border-[#d2d2d7]/30 shadow-sm hover:shadow-lg transition-all duration-300 pt-10 md:pt-14 px-6 md:px-12 pb-0 flex flex-col justify-between overflow-hidden text-center min-h-[480px] md:min-h-[520px]">
            <div>
              <img src={logoGiftCard} alt="Apple Gift Card" className="h-10 md:h-12 w-auto mb-3 mx-auto object-contain" />
              <p className="text-[14px] md:text-[15px] text-[#6e6e73] font-normal mb-3 max-w-[360px] mx-auto">
                For everything and everyone.
              </p>
              <div className="mb-4 flex justify-center space-x-6">
                <a
                  href="#apple-gift-card-learn"
                  className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Learn more
                </a>
                <a
                  href="#apple-gift-card-buy"
                  className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Buy
                </a>
              </div>
            </div>
            <div className="w-full mt-auto -mb-1 -mx-6 md:-mx-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)]">
              <img
                src={imgGiftCards}
                alt="Apple Gift Cards lineup"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* 3. Apple Research Studies Card */}
        <div className="bg-white rounded-none border border-[#d2d2d7]/30 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-center justify-between pl-8 md:pl-16 pr-0 py-8 md:py-0 min-h-[360px] md:min-h-[400px]">
          <div className="md:w-5/12 mb-8 md:mb-0 text-center flex flex-col items-center">
            <h3 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#1d1d1f] tracking-tight leading-[1.15] mb-3 max-w-[320px]">
              Introducing<br />the Apple<br />Research app.
            </h3>
            <p className="text-[14px] md:text-[15px] text-[#6e6e73] font-normal mb-4">
              The future of health research is you.
            </p>
            <div>
              <a
                href="#apple-research"
                className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="md:w-7/12 w-full flex justify-center md:justify-end items-end self-end -mb-1">
            <img
              src={imgResearchStudies}
              alt="Introducing the Apple Research app"
              className="w-[96%] max-w-[460px] md:max-w-[520px] h-auto object-contain object-bottom scale-y-[1.40] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
