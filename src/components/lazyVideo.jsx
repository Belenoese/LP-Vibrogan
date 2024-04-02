import React, { useRef, useEffect, useState } from 'react';
import Video from '../assets/Video/video_ubicacion_vibroganok.mp4'

const LazyVideo = ({ src, type }) => {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !loaded) {
          setLoaded(true);
          if (videoRef.current) {
            videoRef.current.load();
          }
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [loaded]);

  return (
    <video ref={videoRef} autoPlay muted loop className='responsiveVideo'>
      <source src={loaded ? src : Video} type={type} />
      Tu navegador no soporta el elemento de video.
    </video>
  );
};

export default LazyVideo;