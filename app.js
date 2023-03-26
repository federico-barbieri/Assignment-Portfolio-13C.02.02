"use strict";

import {timeline} from "https://cdn.skypack.dev/motion";


const sequence = [
    [".assignment-title", {y: [0, -100, 0]}, { duration: 1 }]
  ]

  timeline(sequence, {repeat: 1});




