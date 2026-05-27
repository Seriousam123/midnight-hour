import './globals.css';


export const metadata = {
  title: 'KNOT THEORY — Official Site',
  description: 'She glows in violence. No mercy. Only war.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
