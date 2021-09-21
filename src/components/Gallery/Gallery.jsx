import React from "react";
import classes from "./Gallery.module.css"; //заменить на не модули

const Gallery = () => {
  const slides = document.querySelectorAll('.slide')

  function activeOnclick(e) {
    //clearPrevActiveClasses()
    e.target.classList.add('active')
  }
  
  function clearPrevActiveClasses(){
    slides.forEach((slide) => {
      slide.classList.remove('active')
  })
  }

  return (
    <div className={classes.divWrapper}>
    <div className={classes.container}>
      <div
        className={classes.slide}
        style={{backgroundImage: `url('https://images.unsplash.com/photo-1540939615471-650169276c13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1031&q=80')`}}
      >
        <h3>flower</h3>
      </div>
      <div
        className={classes.slide}
         style=
           {{backgroundImage: `url('https://images.unsplash.com/photo-1503262028195-93c528f03218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80')`}}
         
      >
        <h3>flower</h3>
      </div>
      <div
        className={classes.slide}
         style=
           {{backgroundImage: `url('https://images.unsplash.com/photo-1605015238459-ebb14c9f865d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`}}
         
      >
        <h3>flower</h3>
      </div>
      <div
        className={classes.slide}
         style=
           {{backgroundImage: `url('https://images.unsplash.com/photo-1610768252994-c88f146aaeae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`}}
         
      >
        <h3>flower</h3>
      </div>
      <div
       className={classes.slide}
        style={{backgroundImage: `url('https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80')`}}
        
      >
        <h3>flower</h3>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
