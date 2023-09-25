import React from 'react';
import Animation from '@/components/home/Animation';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요! 개발의 끝 없는 배움을 즐기는 FE 개발자,
          <br className="hidden lg:inline-block" /> 손정민입니다.
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed">
          표현하고자 하는 아이디어를 제가 배운 기술들로 구현하는 과정들이
          재밌습니다. <br className="hidden lg:inline-block" />
          Back-end 와의 협업을 통한 IT 개발 경험으로 회사가 필요로하는 개발자가
          되고 싶습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            view more projects
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Hero;
