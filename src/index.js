import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Links/PrivacyPolicy";
import TopNavBar from "./components/TopNavBar";
import SecondFooter from "./components/SecondFooter";
import NotFound from "./components/NotFound";
import CookiesPolicy from "./Links/CookiesPolicy";
import TermsConditions from "./Links/TermsConditions";
import NewsletterPolicy from "./Links/NewsletterPolicy";
import FAQ from "./components/FAQ";
import Paint from "./components/Paint";
import Board from "./components/Board";
import Deed from "./components/Deed";
import Bylaws from "./components/Bylaws";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TopNavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/frequently-asked-questions" element={<FAQ />} />
      <Route path="/approved-exterior-paint-colors" element={<Paint />} />
      <Route path="/board-members" element={<Board />} />
      <Route path="/deed-restrictions" element={<Deed />} />
      <Route path="/bylaws" element={<Bylaws />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookies-policy" element={<CookiesPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/newsletter-policy" element={<NewsletterPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <SecondFooter />
  </BrowserRouter>
);
