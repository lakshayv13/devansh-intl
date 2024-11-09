import { siteConfig } from "@/config/site"

export default function Footer() {

    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 dark:text-gray-300 tez md:px-8">
                <div className="justify-between sm:flex">
                    <div className="space-y-6">
                        <img src="logo.svg" alt="logo" className="w-52" />
                        <p className="max-w-md">
                        We specialize in providing efficient and reliable document attestation services, ensuring your credentials are globally recognized. Experience seamless solutions with us..
                        </p>
                        <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm sm:text-base">
                            {
                                siteConfig.footer.main.map((item, idx) => (
                                    <li key={idx} className="text-gray-800 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-400 duration-150">
                                        <a href={item.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="mt-6 hidden sm:block">
                        {
                            siteConfig.footer.navs.map((item, idx) => (
                                <ul
                                    className="space-y-4"
                                    key={idx}
                                >
                                    <h4 className="text-gray-800 dark:text-gray-200 font-semibold">
                                        { item.label }
                                    </h4>
                                    {
                                        item.items.map(((el, idx) => (
                                            <li key={idx}>
                                                <a 
                                                    href={el.href}
                                                    className="hover:text-gray-400"
                                                
                                                >
                                                    { el.name }
                                                </a>
                                            </li>
                                        )))
                                    }
                                </ul>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-10 py-10 md:text-center">
                    <p>© 2024 Devansh International Documentation Consultancy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}