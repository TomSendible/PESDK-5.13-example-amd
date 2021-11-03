requirejs.config({
  urlArgs: "cachebuster=swa_cachebuster",
  waitSeconds: 0,
  paths: {
    react: 'libs/react',
    "react-dom": 'libs/react-dom',
  },
  shim: {
    react: {
      deps: [],
      exports: ["react"]
    },
    "react-dom": {
      deps: [],
      exports: ["react-dom"]
    },
  }
});

define([
  "react",
  "react-dom",
], function ( _react, _reactDom,) {
  require(["libs/PhotoEditor"], function(PhotoEditor){
    _reactDom.render(
      _react.createElement(PhotoEditor.default, {
        container: document.getElementById('photo__editor'),
        editorInstance: () => {},
        image: 'https://image.shutterstock.com/image-photo/word-example-written-on-magnifying-260nw-1883859943.jpg',
        transform: {}
      }),
      document.getElementById('root')
    );
   }) 
});