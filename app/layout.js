import "./globals.css";
import fonts from "./fonts";
import Contexts from "@/contexts";

export const metadata = {
  title: "Chatsvilla: Instant Conversations at Your Fingertips",
  description:
    "Chatsvilla: Embrace the power of real-time communication with our cutting-edge chat application. Connect with friends, family, and colleagues effortlessly, share ideas, and stay in sync like never before. Experience smooth and seamless conversations with our user-friendly interface and enjoy a secure platform that prioritizes your privacy. Say hello to the future of chat applications with Chatsvilla",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts}>
        <Contexts>{children}</Contexts>
      </body>
    </html>
  );
}
