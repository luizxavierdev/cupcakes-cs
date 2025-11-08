"use client"

const Footer = () => {
    return (<footer className="w-full bg-zinc-900 text-zinc-100 px-6 py-10 mt-10">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

            <div>
                <h3 className="font-semibold text-lg mb-3">Cupcakes CS & Co</h3>
                <p className="text-zinc-400">
                    Handcrafted treats made with love. Order online and receive it at the comfort of your home!
                </p>
            </div>

            <div>
                <h4 className="font-semibold mb-3">Corporate</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">About us</a></li>
                    <li><a href="#" className="hover:underline">Privacy policy</a></li>
                    <li><a href="#" className="hover:underline">Terms of use</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-semibold mb-3">Customer Service</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Contact us</a></li>
                    <li><a href="#" className="hover:underline">FAQ</a></li>
                    <li><a href="#" className="hover:underline">Track order</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-semibold mb-3">Social Media</h4>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Instagram</a></li>
                    <li><a href="#" className="hover:underline">Facebook</a></li>
                    <li><a href="#" className="hover:underline">TikTok</a></li>
                </ul>
            </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} Cupcakes CS & Co.
        </div>
    </footer>)
}

export default Footer
