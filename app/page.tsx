
import React from 'react';
import { ProjectInterface } from '@/common.types';
import { LoadMore, Categories, ProjectCard } from '@/components';

type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
};

type Props = {
  searchParams: SearchParams,
};

type ProjectSearch = {
  projectSearch: {
    edges: {
      node: ProjectInterface
    }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  },
};

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

const Home = async ({
  searchParams: {
    category,
    endcursor,
  },
}: Props) => {



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
