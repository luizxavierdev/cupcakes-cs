"use client"

import { useTranslations } from "@/hooks/use-translations";

const Footer = () => {
    const t = useTranslations();
    
    return (
        <footer className="w-full bg-default-100 text-default-foreground px-6 py-10 mt-10 border-t border-default-200">
            <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

                <div>
                    <h3 className="font-semibold text-lg mb-3">Cupcakes CS & Co</h3>
                    <p className="text-default-500">
                        {t.footer.description}
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">{t.footer.corporate}</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline text-default-600">{t.footer.aboutUs}</a></li>
                        <li><a href="#" className="hover:underline text-default-600">{t.footer.privacyPolicy}</a></li>
                        <li><a href="#" className="hover:underline text-default-600">{t.footer.termsOfUse}</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">{t.footer.customerService}</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline text-default-600">{t.footer.contactUs}</a></li>
                        <li><a href="#" className="hover:underline text-default-600">{t.footer.faq}</a></li>
                        <li><a href="#" className="hover:underline text-default-600">{t.footer.trackOrder}</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">{t.footer.socialMedia}</h4>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:underline text-default-600">Instagram</a></li>
                        <li><a href="#" className="hover:underline text-default-600">Facebook</a></li>
                        <li><a href="#" className="hover:underline text-default-600">TikTok</a></li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-default-200 mt-10 pt-6 text-center text-xs text-default-500">
                © {new Date().getFullYear()} Cupcakes CS & Co.
            </div>
        </footer>
    )
}

export default Footer
