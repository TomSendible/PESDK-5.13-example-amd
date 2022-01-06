import react from 'react';
import reactDom from 'react-dom'
import PhotoEditor from '../src/react/PhotoEditor';


reactDom.render(
  react.createElement(PhotoEditor, {
    container: document.getElementById('photo__editor'),
    editorInstance: () => {},
    image: 'https://image.shutterstock.com/image-photo/word-example-written-on-magnifying-260nw-1883859943.jpg',
    transform: {}
  }),
  document.getElementById('root')
);