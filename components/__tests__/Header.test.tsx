import { render } from '@testing-library/react';
import Header from 'components/Header';

describe('Header', () => {
  test('Should set a default document title', () => {
    render(<Header />);

    expect(document.title).toEqual('NextJs Boilerplate');
  });

  test('Should set a document title', () => {
    render(<Header title="New document title" />);

    expect(document.title).toEqual('New document title');
  });
});
