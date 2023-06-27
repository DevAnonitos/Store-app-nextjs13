
import React from 'react';
import { LoadMore, Categories, ProjectCard } from '@/components';

const Home = async () => {
  return (
    <>
      <section className='flexStart flex-col paddings mb-16'>
        <Categories />

        <section className='projects-grid'>
          <ProjectCard />
        </section>

        <LoadMore />
      </section>
    </>
  );
};

export default Home;
