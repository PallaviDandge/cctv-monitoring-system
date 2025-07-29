"use client";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import "./globals.css";
import { store } from "./store/store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
           <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
