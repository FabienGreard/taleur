import { render } from '@testing-library/react';
import Header from 'components/Header';

describe('Header', () => {
  test('Should had default values', () => {
    render(<Header />);

    expect(document.title).toEqual('Taleur.io');
    expect(
      document.head.querySelector('meta[name=description]').content,
    ).toEqual(
      'Taleur.io is a free scheduling app, plan events and start organizing your next meetings, with synching everything on your agenda.',
    );
  });

  test('Should set a custom document title', () => {
    render(<Header title="New document title" />);

    expect(document.title).toEqual('New document title');
  });

  test('Should set a custom meta description', () => {
    render(<Header description="New description meta" />);

    expect(
      document.head.querySelector('meta[name=description]').content,
    ).toEqual('New description meta');
  });
});
