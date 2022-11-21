import Navbar from "./Components/Navbar";
import "../styles/globals.css";
// import Footer from "./Component/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        <div>{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
