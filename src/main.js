requirejs.config({
  urlArgs: "cachebuster=swa_cachebuster",
  waitSeconds: 0,
  paths: {
    react: 'libs/react',
    "react-dom": 'libs/react-dom',
    photoeditor: 'libs/PhotoEditor'
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
    photoeditor: {
      deps: ["react", "react-dom"],
      exports: "pesdk"
    },
  }
});

define([
  "react",
  "react-dom",
  "libs/PhotoEditor"
], function ( _react, _reactDom, PhotoEditor,) {
 
  _reactDom.render(
    _react.createElement(PhotoEditor.default, {
      container: document.getElementById('photo__editor'),
      editorInstance: () => {},
      image: 'https://image.shutterstock.com/image-photo/word-example-written-on-magnifying-260nw-1883859943.jpg',
      transform: {}
    }),
    document.getElementById('root')
  );
  
});