import './globals.css';
import MainBackground from '../components/main-background/main-background';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainBackground />
        {children}
      </body>
    </html>
  );
}
