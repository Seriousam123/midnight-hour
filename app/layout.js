import './globals.css';


export const metadata = {
  title: 'Midnight Hour — Official Game Site',
  description: 'Midnight Hour — coming soon. Sign up for updates.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
