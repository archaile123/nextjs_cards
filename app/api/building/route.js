export async function GET() {
  const gozuMerch = [
    { id: 1, name: 'Ryomen Sukuna', color: 'Beige', sizes: ['One Size'], price: 1200, description: 'Show your allegiance with this item featuring the King of Curses, Ryomen Sukuna.', image: '/images/WDJL8klS.jpg' },
    { id: 2, name: 'Megumi Fushiguro', color: 'Black', sizes: ['S', 'M', 'L', 'XL'], price: 2000, description: 'Summon style with this merchandise featuring the skilled sorcerer, Megumi Fushiguro.', image: '/images/EXDjmTsW.jpg' },
    { id: 3, name: 'Satoru Gojo', color: 'Gray', sizes: ['M', 'L', 'XL'], price: 4000, description: 'Unleash Limitless style with this item featuring the strongest sorcerer, Satoru Gojo.', image: '/images/LkyZ-bTU.jpg' },
    { id: 4, name: 'Satoru Gojo T-shirt', color: 'Navy Blue', sizes: ['One Size'], price: 1500, description: 'A classic navy blue T-shirt showcasing the iconic Satoru Gojo.', image: '/images/SdT0URph.jpg' },
    { id: 5, name: 'Satoru Gojo Hoodie', color: 'White', sizes: ['One Size'], price: 1000, description: 'Stay warm and powerful in this comfortable white hoodie featuring Satoru Gojo.', image: '/images/VWkK3-wQ.jpg' },
    { id: 6, name: 'Satoru Gojo Sleeve', color: 'Brown', sizes: ['One Size'], price: 800, description: 'Protect your gear with this stylish sleeve adorned with Saturo Gojo.', image: '/images/mZiA4AkI.jpg' },
  ];

  return Response.json(gozuMerch);
}