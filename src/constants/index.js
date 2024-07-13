import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        id:'sh1',
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        rating:'4.6'
    },
    {
        id:'sh2',
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        rating:'5.0'
    },
    {
        id:'sh3',
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        rating:'4.5'
    },
    {
        id:'sh4',
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        rating:'4.8'
    },
];

export const shoeInfo = [
    {
        id:'sh1',
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        rating:'4.6',
        description:'Experience the essence of athletic sophistication with the Nike Air Jordan-01. Combining iconic design with modern comfort, these sneakers embody a legacy of innovation and style. Built for performance and crafted with premium materials, they deliver unparalleled support and cushioning. Elevate your footwear collection with a timeless classic that celebrates both heritage and contemporary flair.'
    },
    {
        id:'sh2',
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        rating:'5.0',
        description:"Step into the legend with the Nike Air Jordan 10. These sneakers fuse heritage-inspired design with cutting-edge technology, offering superior comfort and style. With a durable construction and responsive cushioning, they're ideal for both the court and the streets. Embrace the legacy of Michael Jordan with a shoe that blends iconic details and modern performance, perfect for athletes and sneaker aficionados alike."
    },
    {
        id:'sh3',
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        rating:'4.5',
        description:"Introducing the Nike Air Jordan-100, a pinnacle of style and performance. These sneakers merge heritage design with contemporary innovation, delivering exceptional comfort and support. Built with premium materials and featuring iconic Jordan brand elements, they offer a blend of luxury and athleticism. Elevate your footwear game with a shoe that embodies the spirit of excellence and timeless style."
    },
    {
        id:'sh4',
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        rating:'4.8',
        description:"Introducing the Nike Air Jordan-001, where heritage meets innovation. These sneakers showcase a blend of classic Jordan design and modern performance. Crafted with premium materials and featuring iconic details, they offer superior comfort and style. Embrace the legacy with a shoe that redefines excellence on and off the court."
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" , href:"https://www.facebook.com/nike/"},
    { src: twitter, alt: "twitter logo" ,href:"https://x.com/Nike?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"},
    { src: instagram, alt: "instagram logo" , href:"https://www.instagram.com/nike/?hl=en"},
];
