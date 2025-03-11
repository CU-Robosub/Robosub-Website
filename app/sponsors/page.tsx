
import Footer from "../_components/footer";
import HeadshotCard from "../_components/headshotCard";
import { motion } from "framer-motion";
import TextPopup from "../_components/sponsors_page/TextPopup";
import ButtonPopup from "../_components/sponsors_page/ButtonPopup";
import SponsorImagePopup from "../_components/sponsors_page/SponsorImagePopup";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sponsors',
    description: "Meet the organizations that make it possible for us to continue engineering.",
}

export default function Teams() {
    return (
        <>
            <div className="min-h-screen w-full bg-gradient-to-b from-blue-500 dark:from-blue-900 dark:via-blue-900 via-blue-500 to-black flex flex-col justify-center items-center">
                <div className="px-6 md:px-12 flex flex-col md:flex-row h-full w-full flex-wrap">
                    <div className="flex flex-col justify-center w-full md:w-1/2 mb-8 md:mb-0">
                        <h1 className="my-5 md:my-10 font-bold text-4xl md:text-7xl w-full md:w-4/5 text-center md:text-left">Thank you to our sponsors!</h1>
                        <TextPopup/>
                        <ButtonPopup/>
                    </div>
                    <SponsorImagePopup/>
                </div>
            </div>
            <Footer />
        </>
    );
}
