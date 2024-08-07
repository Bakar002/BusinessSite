import React from 'react';
import cubeBox from '../../assets/cube.svg';

function Tesmonial({ user, name, title, comment, desc, titleSize, commentSize, descSize }) {
  return (
    <div className="flex justify-center mt-10 md:mt-16 max-sm:mt-0">
      <div className="bg-[rgba(5,5,7,1)] relative overflow-hidden z-50 w-full max-w-[980px] h-auto md:h-[450px] max-sm:h-[500px]  p-4 md:pt-20 md:px-8 border border-[rgba(255,255,255,0.3)] rounded-xl flex flex-col justify-between">
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h1
              style={{ fontFamily: 'SFMedium' }}
              className={`${commentSize} text-gradient text-white leading-tight md:leading-[1.2] max-sm:leading-snug`}
            >
              {comment}
            </h1>
            <p
              className={`${descSize} text-[rgba(255,255,255)] mt-4 opacity-70 leading-relaxed max-sm:leading-snug`}
              style={{ fontFamily: 'SFRegular' }}
            >
              {desc}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-10 w-full md:w-[220px] h-auto md:h-[60px]">
            <img
              src={user}
              alt="User Picture"
              className="w-14 h-14 md:w-[60px] md:h-[60px] rounded-full"
            />
            <div className="flex flex-col">
              <h2
                style={{ fontFamily: 'SFBold' }}
                className={`${titleSize} text-[rgba(255,255,255,1)] text-lg md:text-xl leading-tight`}
              >
                {name}
              </h2>
              <p
                className="text-[rgba(255,255,255,1)] text-sm md:text-base opacity-70 w-48 md:w-64 leading-snug"
                style={{ fontFamily: 'SFRegular' }}
              >
                {title}
              </p>
            </div>
          </div>
        </div>
        <img
          src={cubeBox}
          alt="cube"
          className="h-52 w-36 md:h-[238px] md:w-[238px] absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 opacity-50"
        />
      </div>
    </div>
  );
}

export default Tesmonial;
