import Navbar from "./Components/Navbar";
import "../styles/globals.css";
import Footer from "./Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
