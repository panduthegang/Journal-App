import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "react-quill-new/dist/quill.snow.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reflct | Your Personal Journaling Space",
  description: "Transform your thoughts into meaningful insights with AI-powered journaling.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        url: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  manifest: "/manifest.json",
  themeColor: "#f97316",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reflct.app",
    title: "Reflct | Your Personal Journaling Space",
    description: "Transform your thoughts into meaningful insights with AI-powered journaling.",
    siteName: "Reflct",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reflct - Modern Journaling Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reflct | Your Personal Journaling Space",
    description: "Transform your thoughts into meaningful insights with AI-powered journaling.",
    images: ["/twitter-image.jpg"],
    creator: "@reflct_app",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    // appearance={{
    //   baseTheme: shadesOfPurple,
    //   variables: {
    //     colorPrimary: "#3b82f6",
    //     colorBackground: "#1a202c",
    //     colorInputBackground: "#2D3748",
    //     colorInputText: "#F3F4F6",
    //   },
    //   elements: {
    //     formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
    //     card: "bg-gray-800",
    //     headerTitle: "text-blue-400",
    //     headerSubtitle: "text-gray-400",
    //   },
    // }}
    >
      <html lang="en">
        <body
          className={`${inter.className} bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50`}
        >
          <div className="inset-0 bg-[url('/bg.jpg')] opacity-50 fixed -z-10" />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-orange-300 py-12 bg-opacity-10">
            <div className="container mx-auto px-4 text-center text-gray-900">
              <p>Made with 💗 by Harsh Rathod</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
