import React from "react"

var helloRT = function () {
  return React.createElement('body', {}, React.createElement('div', {
      'className': 'world',
      'data-world': true
  }, React.createElement('div', {
      'className': 'score',
      'data-score': true
  }, '0'), React.createElement('div', {
      'className': './start-screen',
      'data-start-screen': true
  }, 'Press Any Key To Start'), React.createElement('img', {
      'src': 'imgs/ground.png',
      'className': 'ground',
      'data-ground': true
  }), React.createElement('img', {
      'src': './imgs/ground.png',
      'className': 'ground',
      'data-ground': true
  }), React.createElement('img', {
      'src': './imgs/dino-stable-horse.png',
      'className': 'dino',
      'data-dino': true
  })));
};

export default helloRT;