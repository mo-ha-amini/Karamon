import { Fragment, useEffect, useState } from "react";
import "./project.css";
import Filter from "./Filter";
import Picture from "./pictures";
import { motion, AnimatePresence } from "framer-motion";
import { picturesPro } from "../Data/Data";
import { staggerContainer } from "../../utils/motion";
import { AiFillCloseCircle } from "react-icons/ai";

function Projects({picData}) {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(25);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const setPic = () => {
    setPopular(picData);
  };

  const selectMovie = (id) => {
    setSelectedId(id);
    var movie = filtered.filter((obj) => {
      return obj.id === Number(id);
    });

    movie = movie[0];
    setSelectedMovie(movie);
  };

  const deselectMovie = () => {
    setSelectedId(null);
    setSelectedMovie(null);
  };

  useEffect(() => {
    setPic();
    setActiveGenre(0);
  }, []);
  return (
    <Fragment>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 , once:true}}
        className="tw-rounded-3xl tw-mt-4 tw-mb-1 tw-px-5"
      >
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <motion.div
          layout
          className="row justify-content-md-center align-items-center"
        >
          <AnimatePresence>
            {filtered.map((movie) => (
              <motion.div
                viewport={{ once: true }}
                className="col-md-3 mb-4 col-xs-12 xs:mr-1"
                layoutId={movie.id}
                onClick={() => selectMovie(movie.id)}
              >
                <Picture movie={movie} key={movie.id} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <div className="tw-bg-black tw-z-10 tw-absolute tw-top-0 tw-left-0 tw-w-[100%] tw-h-[100%] tw-opacity-25" />
            <div className="tw-bg-black tw-z-10 tw-absolute tw-w-[90%] tw-h-[90%] tw-right-0 tw-left-0 tw-ml-auto tw-mr-auto tw-bottom-0 tw-top-20 tw-mb-auto tw-mt-auto tw-rounded-xl tw-opacity-60" />
            <div className=" tw-z-10 tw-p-8 tw-grid lg:tw-grid-cols-2 sm:tw-grid-cols-1 tw-gap-5 tw-absolute tw-w-[90%] tw-h-[90%] tw-right-0 tw-left-0 tw-ml-auto tw-mr-auto tw-bottom-0 tw-top-20 tw-mb-auto tw-mt-auto tw-rounded-xl">
              <div className="tw-absolute tw-right-0 tw-top-0 tw-pr-1 tw-pt-1 tw-sm:tw-flex-col">
              {window.scrollTo(0, 0)}
                <button onClick={() => deselectMovie()}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Cross_red_circle.svg" className="tw-w-[20px]"/>
                </button>
              </div>

              <div className="">
                <img
                  src={selectedMovie.img}
                  alt=""
                  className="tw-w-[100%] tw-rounded-md"
                />
              </div>

              <div className="tw-bg-white tw-rounded-lg tw-shadow-xl ">
                <div className="tw-flex-row tw-p-3 tw-justify-center tw-align-middle">
                  <div className="tw-flex tw-p-2 tw-pr-5 tw-rounded-2xl tw-shadow-md tw-mb-2 ">
                    <div className="tw-w-1/2 tw-flex tw-justify-start">
                      <h5>Name :</h5>
                    </div>
                    <div className="tw-w-1/2 tw-flex tw-justify-end tw-pl-5">
                      <h5>Khansar</h5>
                    </div>
                  </div>

                  <div className="tw-flex tw-p-2 tw-pr-5 tw-rounded-2xl tw-shadow-md tw-mb-2">
                    <div className="tw-w-1/2 tw-flex tw-justify-start">
                      <h5>Year :</h5>
                    </div>
                    <div className="tw-w-1/2 tw-flex tw-justify-end tw-pl-5">
                      <h5>1402</h5>
                    </div>
                  </div>

                  <div className="tw-flex tw-p-2 tw-pr-5 tw-rounded-2xl tw-shadow-md tw-mb-2">
                    <div className="tw-w-1/2 tw-flex tw-justify-start">
                      <h5>City</h5>
                    </div>
                    <div className="tw-w-1/2 tw-flex tw-justify-end tw-pl-5">
                      <h5>khansar</h5>
                    </div>
                  </div>

                  <div className="tw-flex-row tw-p-2 tw-pr-5 tw-rounded-2xl tw-shadow-md tw-mb-2">
                    <div className="tw-flex tw-justify-start">
                      <h5>Description:</h5>
                    </div>
                    <div className="tw-flex tw-justify-end tw-p-2 tw-text-justify">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </div>

                  {/* <h5>{selectedMovie.title}</h5> */}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
}

export default Projects;
