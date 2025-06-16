import Navbar from '@/components/navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Subash Chandra Bose R - Full Stack Developer',
  description: 'Hi, I am Subash Chandra Bose R, a Full Stack Developer skilled in building robust web and mobile applications. I specialize in modern frontend and backend technologies to create scalable, user-focused digital solutions. Explore my portfolio to see my work and experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mt-10">{children}</main>
      </body>
    </html>
  );
}
