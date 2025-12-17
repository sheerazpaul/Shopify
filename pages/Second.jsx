import { useState } from "react";
import Nav2 from "../components/Nav2";
import react from 'react';
import Progress from "../Components/Progress";
import Title from "../Components/Title";
import Drive from "../Components/Drive";
import CardsPart from "../Components/CardsPart";
import BigCard from "../Components/BigCard";
import Footer from "../Components/Footer";
function Second() {
    const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData = [
    {
      head: "Other apps from Storeware",
      src: "/images/assets/card1.png",
      title: "BetterDocs for Shopify – Advanced Knowledge Base App",
      para: "Boost customer satisfaction with an efficient AI-enhanced knowledge base & FAQ system. Build smart documentation and reduce support load effortlessly.",
      list: [
        "Create high-performing docs & FAQs with Magic AI AutoWrite",
        "Enable Live Chat & Instant Answers for seamless customer support",
        "Customize your knowledge base with intuitive design options",
        "Track performance with in-depth analytics",
      ],
    },
    {
      head: "Other apps from Storeware",
      src:"/images/assets/card2.png" ,
      title: "EasyFlow Product Optionsp",
      para: "EasyFlow is a Shopify app designed to enhance product customization and streamline the management of product options for online stores.",
      list: [
      " Allows customers to personalize products with text, images, and more",
         " Dynamically shows or hides options based on customer selections",
         " Customers can upload files for personalized products",
         " Centralized management of all product options and variants"
      ],
    },
      {
      head: "Other apps from Storeware",
      src:"/images/assets/card3.png" ,
      title: "StoreFAQ-Product FAQ Builder",
      para: "Create FAQ pages or build individual product FAQS with Al to reduce support tickets and improve the customer experience.",
      list: [
          "Use the advanced Al Autowrite feature for writing FAQs instantly ",
          "Design the FAQ page with various customizations",
       "   Drag & drop to add the StoreFAQ App block anywhere on a page ",
         " Export or import FAQs without any hassle"
      ],
    },
     {
      head: "Other apps from Storeware",
      src:"/images/assets/card4.png" ,
      title: "TrustSync - Review Collection App",
      para: "Boost your business reputation by collecting reviews for Google Review, Trustpilot, Etsy & more while filtering out negative ratings.",
      list: [
          "Collect customers' reviews via review collection emails ",
          "Auto-publish reviews on popular platforms",
          "Review Settings & Email Configurations",
          "Manage Negative Feedback while filtering out low ratings"
      ],
    },
     {
      head: "Other apps from Storeware",
      src:"/images/assets/card5.png" ,
      title: "StoreSEO - AI SEO Agent",
      para: "StoreSEO is an AI-powered Shopify app to boost your store’s search engine rankings and organic traffic through AI SEO optimization.",
      list: [
      "   Improve ranking in search engines with Product SEO Optimizer & Blog SEO.",
         " Generate meta title, description, and tag with AI.",
     "     AI Image Optimizer, Resizer Compressor and boost page speed & alt text image.",
      "    Local SEO updates, Schema markup, Sitemaps & LLMs.txt for organic ranking boost"
      ],
    },
  ];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cardsData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  const currentCard = cardsData[currentIndex];
  return (
    <>
  
       <Nav2/>
       <Title/> 
       <Progress/>
       <CardsPart
       image="/images/assets/Lady.png"
       name="Generate Stunning AI-Videos from Product Images"
       para="Turn your product images into scroll-stopping marketing videos in seconds. Just upload images; we'll add dynamic animations and effects for a high-converting result."
       logo="/images/assets/play.png"
       btn="Generate AI Video"
       />
       <Drive/>
        <CardsPart
       image="/images/assets/man.png"
       name="Want to schedule a call?"
       para="We have marketing experts ready to help build your video marketing strategy and guide you in scaling your store with video. Want to book a one-to-one session? It’s FREE!"
       logo="/images/assets/call.png"
       btn="Talk to Vidify Expert"
       />
     
      <BigCard
        head={currentCard.head}
        src={currentCard.src}
        title={currentCard.title}
        para={currentCard.para}
        list={currentCard.list}
        onNext={nextCard}
        onPrev={prevCard}
      />
       <Footer/>
    </>
  )
}

export default Second