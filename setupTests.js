jest.mock('next/head', () => {
  // eslint-disable-next-line global-require
  const ReactDOMServer = require('react-dom/server');
  return {
    __esModule: true,
    default: ({ children }) => {
      if (children) {
        global.document.head.insertAdjacentHTML('afterbegin', ReactDOMServer.renderToString(children) || '');
      }
      return null;
    },
  };
});
