"use strict";

import {timeline, inView} from "https://cdn.skypack.dev/motion";


const sequence = [
    [".assignment-title", {y: [0, -100, 0]}, { duration: 1 }]
  ]

  timeline(sequence, {repeat: 1});

  //
  //

  //h2

  const assignmentH2 = document.querySelector('.assignment-h2')

  const projectTitleH2 = document.querySelector('.project-title');

  const finalThoughtsH2 = document.querySelector('.final-thoughts-h2');
  
  function iSeeYou(el){
    el.classList.add('sup');
}

  inView(assignmentH2, iSeeYou(assignmentH2), {root: assignmentH2});

  inView(projectTitleH2, iSeeYou(projectTitleH2), {root: projectTitleH2});

  inView(finalThoughtsH2, iSeeYou(finalThoughtsH2), {root: finalThoughtsH2});

