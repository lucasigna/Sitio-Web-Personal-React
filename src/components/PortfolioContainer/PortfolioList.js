import React, { useEffect, useState } from 'react';
import { PortfolioItem } from './PortfolioItem';
import { getProjects } from '../../firebase';
import { Skeleton } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const PortfolioList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getProjects(setData);
  }, []);

  return (
    <div className="divPortfolioList">
      {data && Object.values(data).map((project) => (
            <PortfolioItem
              key={project.id}
              title={project.title}
              tools={project.technologies}
              image={project.urlImage}
              description={project.description}
              linkGithub={project.githubLink}
              linkWebsite={project.websiteLink}
            />
          ))}
      {!data &&
        Array.from({ length: 3 }).map((_, index) => (
          <Skeleton
            key={index}
            style={{ margin: '10px', borderRadius: '20px' }}
            variant="rounded"
            width='100%'
            height={200}
          />
        ))
      }
    </div>
  );
};
