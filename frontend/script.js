// Constants
const MOCK_API_URL = "https://mockapi.example.com/products"; // Replace with a real API URL if available



// const productsInfo = async function(){
  
//   let arrdata = await fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>console.log(json));
//   return arrdata;
// }
// console.log(productsInfo());

// geting the products based on catagories

const getCatagory = async function(catagories){
 return await fetch(`https://fakestoreapi.com/products/category/${catagories}`).then(res=>res.json())
}



window.showCategory = async function(category) {


  const currentCatagory = await getCatagory(category);
  console.log(currentCatagory)


  const categoriesSection = document.getElementById('categories');
  categoriesSection.style.display = 'none';

  // Show the top-searches section
  const topSearchesDiv = document.getElementById('display-categories');
  topSearchesDiv.style.display = 'block';

  const catItem = [];
  currentCatagory.forEach(function(ele){
    catItem.push(
        `
        <div class="catagory-card">
                    <div class="img-catagory">
                    <img class="platform-image" src="${ele.image}" alt="Product 4">
                    </div> 
                    <div class="text">
                      <p>Trending in ${ele.category} category!</p>
                    <p>${ele.title}</p>
                    <p>Rs. ${ele.price}/-</p>
                    <p>Rating:${ele.rating.rate}⭐</p>
                    </div>
                </div>
        `
    )
})
  
// Insert the HTML into the container
topSearchesDiv.innerHTML = catItem.join('');

  // You can expand this function to dynamically load category-specific products or content.
}

const stock = [
  {
    name: 'Apple MacBook Pro 16-inch',
    site: 'Flipkart',
    price: '₹3,25,990',
    rating: '4.2',
    features: [
      'Apple M2 Max Chip',
      '16-core GPU',
      'RAM-36 GB',
      'SSD Capacity 1TB',
      'Screen Size 40.64 cm (16 Inch)',
    ],
    reviews: [
      'This is the best laptop I have used. Best for running Adobe after effects and premier pro', 
      'Battery is good',
      'The performance is amazing; it can easily handle complicated simulations and video editing'],
                
    img: 'https://m.media-amazon.com/images/I/618d5bS2lUL.SX679.jpg',
    url: 'https://www.flipkart.com/apple-m4-max-36-gb-1-tb-ssd-macos-sequoia-mx303hn-a/p/itm90980fbd809f7?pid=COMH64PYWW273SRT&lid=LSTCOMH64PYWW273SRTHFDUMR&marketplace=FLIPKART&q=Apple+MacBook+Pro+16-inch&store=6bo%2Fb5g&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=54d41ae6-8607-4e44-a146-4eedc57081d0.COMH64PYWW273SRT.SEARCH&ppt=hp&ppn=homepage&ssid=nef33i4dog0000001733941662317&qH=53ef3dedbf7181b1'
  },
  {
    name: 'Apple MacBook Pro 16-inch',
    site: 'Amazon',
    price: ' ₹3,69,900',
    rating: '3.9',
    features: [
      'Apple M2 Max Chip','16GB Unified Memory ','RAM-48 GB','SSD:512GB','Liquid retina XDR display'
    ],
    reviews: [
      'It lags so much',
         'Battery - 10/10 no other laptop in world can give this much battery life 2 hours heavy  ',
         'guality is very good'
    ],
    img: 'https://m.media-amazon.com/images/I/618d5bS2lUL.SX679.jpg',
    url: 'https://www.amazon.in/Apple-MacBook-16-inch-16%E2%80%91core-40%E2%80%91core/dp/B0CM5SZ7CP/ref=sr_1_1?crid=2658S9QZ5LSEE&dib=eyJ2IjoiMSJ9.4dq-tEzrk34MiPe-NIZO9lCrRTXAQIzS24iG98VKraBpFo9-yHBnHOnpawrlmyKAP7QqsvfTVKYn28HB7x8HOlI4QlGUl4V4AZuJZfIORpVPxNTbUdpRCiy8_PZrW4JhzpYKVszPEVnVHJeJSayC-mrYMjhqFnjw8kZWqhu7BQ-0p8yG6QwsGvoJnhdOd2KnR6DQU5EACSWD_18KAdWPwYi54OMww5pBKA3hLlfhv-Y.P1swHDsoC-PSum_bNCvyeaRIdtKqMyuktW3INDPA_6w&dib_tag=se&keywords=Apple+MacBook+Pro+16-inch&nsdOptOutParam=true&qid=1733939948&sprefix=apple+macbook+pro+16-inch%2Caps%2C447&sr=8-1'
  },
  {
    name: 'Apple MacBook Air M2',
    site: 'Croma',
    price: '₹98,990',
    rating: '5',
    features: [
      'Apple M2 Chip',
      'Brand color-space grey',
      '8-core CPU, 8-core GPU',
      '8GB RAM',
      '152 GB SSD',
      'Processor: Apple M2',
       'Display: 34.46 cm (13.6 inches) LED-Backlit',
    ],
    reviews: [
      'Very Nice Packing for such delicate product. Really Appreciated And Loved Product',
      'Excellent for students and light work.',
      'Product is good',
     
    ],
    img: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL.AC_UY327_FMwebp_QL65.jpg',
    url: 'https://www.croma.com/apple-macbook-air-2022-m2-13-6-inch-8gb-512gb-macos-space-grey-/p/256598'
  },
  {
    name: 'Apple MacBook Air M2',
    site: 'amazon',
    price: '₹93,906',
    rating: '4',
    features: [
      'Apple M2 Chip',
      '8-core CPU, 8-core GPU',
      '8GB RAM',
      '256GB SSD',
      '13.6-inch Retina Display',
    ],
    reviews: [
      'Product is good',
      'go for it ',
            'Sleek body, Easy to carry, Premium feel..',
      'Only issue with this color is fingerprints on macbook body.',
      'it is aswom and i love it but only one fault is this mac is very very sensitive each and every outside part is sensitive'
    ],
    img: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL.AC_UY327_FMwebp_QL65.jpg',
    url: 'https://www.amazon.in/2022-Apple-MacBook-Laptop-chip/dp/B0DLHFM2XL/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.CHExN13tCcFNwuIzOI3JSuX_EUQVLhJLZZ5v9e7voYTF8OJrc1C766yKeS81hiA-rik-agYKHNfGJcg6EG9-o3aU-DlqzriBgURYKx7_2vpp1lVBOfv-AZaS50pdldFUrD93hn86uRq8_NdL6g6n67yuBHOad6jrftJK33rp5PjunNMW0BJMFlWQTtWgaN2TuEVPHYmTn015ZkW4MfKAeSCYJkQndrf_CfrvPvEdeJU.iUWTDnkYUVHSbLI7KaNseGr77NgS5cDe7O6aFox5brY&dib_tag=se&keywords=macbook+air+m2+512gb&qid=1734066238&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
  },
  {
    name: 'Sony WH-1000XM5 Noise Cancelling Headphones',
    site: 'Flipkart',
    price: '₹29,990',
    rating: '4.7',
    features: [
      'Industry-leading noise cancellation',
      'Up to 30 hours of battery life',
      'Touch-sensitive controls',
      'Comfortable fit for long listening',
    ],
    reviews: [
      'Best noise-canceling headphones ever.',
      'Superb sound quality.',
      'Extremely comfortable for long sessions.',
    ],
    img:'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/i/x/x/wh-ch510-sony-original-imagz5r5qqrsfteq.jpeg?q=70&crop=false',
    url: 'https://www.flipkart.com/sony-wh-ch520-50-hrs-playtime-dsee-upscale-multipoint-connection-dual-pairing-bluetooth/p/itm064cf3dcf3b5c?pid=ACCGZ4MAKQZWQDRJ&lid=LSTACCGZ4MAKQZWQDRJNUGFL1&marketplace=FLIPKART&q=Sony+WH-1000XM5+Noise+Cancelling+Headphones&store=0pm%2Ffcn%2Fgc3%2Fka8&spotlightTagId=FkPickId_0pm%2Ffcn%2Fgc3%2Fka8&srno=s_1_5&otracker=search&otracker1=search&fm=Search&iid=b5207906-6815-4219-9bdc-369c6cde77e4.ACCGZ4MAKQZWQDRJ.SEARCH&ppt=sp&ppn=sp&ssid=ccir8my0v40000001733946980528&qH=0b51e572f20e1a91',
  },
  {
    name: 'Sony WH-1000XM5 Noise Cancelling Headphones',
    site: 'Amazon',
    price: '₹29,999',
    rating: '4.8',
    features: [
      'Industry-leading noise cancellation',
      'Up to 30 hours of battery life',
      'Touch-sensitive controls',
      'Comfortable fit for long listening',
    ],
    reviews: [
      'Great noise cancellation.',
      'Incredible sound and build quality.',
    ],
    img: 'https://m.media-amazon.com/images/I/31R03pZblJL.SX300_SY300_QL70_FMwebp.jpg',
    url: 'https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTI3NDc5MzI3NTM5NzcxOjE3MzM5NDQ4NzA6c3BfYXRmOjMwMDE5NjUyMDE4NTEzMjo6MDo6&url=%2FSony-Headphones-Wh-Ult900N-Cancelling-Pair-Black%2Fdp%2FB0CWVX1GNX%2Fref%3Dsr_1_1_sspa%3Fcrid%3DTIYG7RH5KYA9%26dib%3DeyJ2IjoiMSJ9.kDITq7OrrHeIwpurKbq9YsFmTo5_0dOBXgayUm6ZZoFPGn1zRDFUEbzfqC4dZTMiLLpzlVNObmYCYyHsbnVL2VlYdvG8BfQh3dCW9OyQqiYa1H0M-OxLF31oUL6vW1pDxCMFDwLEzBaOruOLIAx3vlKA_Q8capOvreNxcFm7_Ah-c47E29sjmV2iJnYRMa4g3mtrQUiNRZWzI3cTa_xPsrPla0wq0cNowLWxJsN5j5g.537xPjyMDYMlLa0AGQ_uFd9sFA181Ygwtxn3qEAblTk%26dib_tag%3Dse%26keywords%3DSony%2BWH-1000XM5%2BNoise%2BCancelling%2BHeadphones%26nsdOptOutParam%3Dtrue%26qid%3D1733944870%26sprefix%3Dsony%2Bwh-1000xm5%2Bnoise%2Bcancelling%2Bheadphones%252Caps%252C739%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1',
  },
  {
    name: 'Samsung Galaxy Z Fold 5',
    site: 'Samsung India',
    price: '₹1,84,999',
    rating: '4.4',
    features: [
      '7.6-inch Dynamic AMOLED 2X foldable screen',
      '12GB RAM',
      '1TB internal storage',
      'Qualcomm Snapdragon 8 Gen 2',
    ],
    reviews: [
      'Best foldable phone ever made.',
      'Perfect for multitasking and media consumption.',
    ],
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/j/k/-original-imagztmggmgfdt8d.jpeg?q=70',
    url: 'https://www.samsung.com/in/smartphones/galaxy-z-fold5/',
  },
  {
    name: 'Samsung Galaxy Z Fold 5',
    site: 'Flipkart',
    price: '₹1,84,999',
    rating: '4.4',
    features: [
      '7.6-inch Dynamic AMOLED 2X foldable screen',
      '12GB RAM',
      '1TB internal storage',
      'Qualcomm Snapdragon 8 Gen 2',
    ],
    reviews: [
      'The best foldable phone.',
      'Incredible display and multitasking abilities.',
],
    img: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/z/j/k/-original-imagztmggmgfdt8d.jpeg?q=70&crop=false',
    url: 'https://www.flipkart.com/samsung-galaxy-z-fold5-cream-512-gb/p/itm0888019922067?pid=MOBGRS322BGTXSGU&lid=LSTMOBGRS322BGTXSGUYB9W88&marketplace=FLIPKART&q=Samsung+Galaxy+Z+Fold+5&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=f4432ad2-a2f4-4893-aa40-db9f5cac224c.MOBGRS322BGTXSGU.SEARCH&ppt=hp&ppn=homepage&ssid=iih2ir5rgg0000001733947854601&qH=3f20092f45d64d08',
    },
    {
      name: 'Samsung Galaxy S23 Ultra',
      site: 'Amazon',
      price: '₹1,24,999',
      rating: '4.7',
      features: [
        '6.8-inch Dynamic AMOLED 2X Display',
        'Snapdragon 8 Gen 2 Processor',
        '12GB RAM',
        '200MP Primary Camera',
        '5000mAh Battery',
      ],
      reviews: [
        'Incredible display quality.',
        'Superb camera performance.',
        'A high-end flagship experience.',
      ],
      img: 'https://m.media-amazon.com/images/I/41GAnuY2-DL.SX300_SY300_QL70_FMwebp.jpg',
      url: 'https://www.flipkart.com/samsung-galaxy-s23-ultra-5g-phantom-black-256-gb/p/itm15952643ba06d?pid=MOBGMFFX6E6SGYWC&lid=LSTMOBGMFFX6E6SGYWCZHDIJN&marketplace=FLIPKART&q=Samsung+Galaxy+S23+Ultra&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=d56e71c6-259f-4ec6-b814-cc79cd7a2448.MOBGMFFX6E6SGYWC.SEARCH&ppt=None&ppn=None&ssid=x8zrvnoa9s0000001733948327361&qH=78131cbff8f2868b',
    },
    // 2. Samsung Galaxy S23 Ultra
    {
      name: 'Samsung Galaxy S23 Ultra',
      site: 'Flipkart',
      price: '₹1,23,999',
      rating: '4.7',
      features: [
        '6.8-inch Dynamic AMOLED 2X Display',
        'Snapdragon 8 Gen 2 Processor',
        '12GB RAM',
        '200MP Primary Camera',
        '5000mAh Battery',
      ],
      reviews: [
        'The best flagship phone by Samsung.',
        'Unmatched performance and display.'
        ,
      ],
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/a/l/-original-imagzm8qrfdmhy8z.jpeg?q=70',
      url: 'https://www.flipkart.com/samsung-galaxy-s23-ultra-5g-phantom-black-256-gb/p/itm15952643ba06d?pid=MOBGMFFX6E6SGYWC&lid=LSTMOBGMFFX6E6SGYWCZHDIJN&marketplace=FLIPKART&q=Samsung+Galaxy+S23+Ultra&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=1dc4b078-a42b-4464-b656-538291cad014.MOBGMFFX6E6SGYWC.SEARCH&ppt=sp&ppn=sp&ssid=ndasolb9xc0000001733948449027&qH=78131cbff8f2868b',
    },
    // 3. Sony PlayStation 5
    {
      name: 'Sony PlayStation 5',
      site: 'Amazon',
      price: '₹49,990',
      rating: '4.9',
      features: [
        'Custom SSD for faster loading',
        '3D audio support',
        'DualSense wireless controller',
        'Ultra-high-speed SSD',
      ],
      reviews: [
        'The best gaming console available.',
        'Next-gen gaming experience.',
      ],
      img: 'https://m.media-amazon.com/images/I/312kJIuSwxL.SY300_SX300_QL70_FMwebp.jpg',
      url: 'https://www.amazon.com/PlayStation-Digital-Anniversary-Limited-Bundle-5/dp/B0DHLM85Z6/ref=sr_1_5?crid=32KAWUOP71S0N&dib=eyJ2IjoiMSJ9.LAZlICKbrbDeKK-wjJg3PhaVoL_1ja8VAKQMpZRsDS4jx8JFR4-od-dL3Bbdv3OSwJeaRA6h0lDUt1Xt6KX-xD7JcbsZNP1n0MzK2GjsxEBeaf8o_2CLFSKfVXwQROYqwlDUK0jD3Er3EkB60cdvyMvfWgyI-mAn8wxy5CBHLdUUAKKulZLMppG6zdCwlJuzHnj2TfRBVL0C406z54U0muai91uXBs7PMiTKsJtmU.QG3HWe6EJMJDTnvhzfhQuOuqnEVkhoyp9sAAK4yWX7M&dib_tag=se&keywords=Sony+PlayStation+5&qid=1733941939&sprefix=sony+playstation+5%2Caps%2C328&sr=8-5'
    },
    // 4. Sony PlayStation 5
    {
      name: 'Sony PlayStation 5',
      site: 'Flipkart',
      price: '₹48,990',
      rating: '4.9',
      features: [
        'Custom SSD for faster loading',
        '3D audio support',
        'DualSense wireless controller',
        'Ultra-high-speed SSD',
      ],
      reviews: [
        'An absolute game-changer.',
        'Best console for gaming enthusiasts.',
      ],
      img: 'https://rukminim2.flixcart.com/image/832/832/xif0q/gamingconsole/b/w/n/-original-imagzf6vtprhm3sz.jpeg?q=70&crop=false',
      url: 'https://www.flipkart.com/sony-playstation5-digital-slim-cfi-2008b01x-1-tb/p/itm87ac7d8e29d05?pid=GMCGZCYP4NEKPPYM&lid=LSTGMCGZCYP4NEKPPYMASPKUN&marketplace=FLIPKART&q=Sony+PlayStation+5&store=4rr&spotlightTagId=BestsellerId_4rr&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=9be3673f-a538-47d5-8480-f6f51387d298.GMCGZCYP4NEKPPYM.SEARCH&ppt=sp&ppn=sp&ssid=jzaoa1cu4w0000001733948047631&qH=7c23251de3cb4427'
    },
    // 5. Xiaomi Mi 11X Pro
    {
      name: 'Xiaomi Mi 11X Pr',
      site: 'Amazon',
      price: '₹39,999',
      rating: '4.7',
      features: [
        '6.67-inch FHD+ AMOLED Display',
        'Snapdragon 888 Processor',
        '8GB RAM',
        '108MP Triple Camera',
        '4520mAh Battery',
      ],
      reviews: [
        'Excellent value for money.',
        'Great performance and camera.',
      ],
      img: 'https://m.media-amazon.com/images/I/51syvCSKr+S.AC_SX679.jpg',
      url: 'https://www.amazon.com/Xiaomi-Factory-Unlocked-Compatible-International/dp/B094W8Y46N/ref=sr_1_1?crid=VLW8KFKUBTGI&dib=eyJ2IjoiMSJ9.EbYlu5NEtYEUrUPCfq2fl1w5z0ZAAoh9TTvBMTQxBLz3mcXOjVB8Fm-X9nJ1V60Jj0f7Aj_Ar-BSX0BJP-87LJ6ZcIBaJslG9uzkaMKiw5b1_MLrhWGPpOpWPsgc0hNl_Q-6HTbvbSgyFe5TqH0bMrE1Iw0urB2XLZIQEINr4CuvdMhFRO9RDu_5eMzvQ20LPPLSfvszOnEUghsT8z0V_9yEZ6aUHvGxexdzQougj80.Y7dofGdha-i-h_OXDRYYeTVYPxJLPkHIu1Buu5YObzE&dib_tag=se&keywords=xiaomi+mi+11x+pro&qid=1733946795&sprefix=xiaomi+mi+11x+pr%2Caps%2C606&sr=8-1'
    },
    // 6. Xiaomi Mi 11X Pro
    {
      name: 'Xiaomi Mi 11X Pro',
      site: 'Flipkart',
      price: '₹39,999',
      rating: '4.7',
      features: [
        '6.67-inch FHD+ AMOLED Display',
        'Snapdragon 888 Processor',
        '8GB RAM',
        '108MP Triple Camera',
        '4520mAh Battery',
      ],
      reviews: [
        'Fantastic performance at this price point.',
        'Stunning camera quality.',
      ],
      img: 'https://rukminim2.flixcart.com/image/832/832/kod858w0/mobile/s/7/d/11x-pro-11x-pro-mi-original-imag2tzj6jjbkgwz.jpeg?q=70&crop=false',
      url: 'https://www.flipkart.com/mi-11x-pro-5g-cosmic-black-128-gb/p/itmca65d279a84c8?pid=MOBG36HS2CKRMU8E&lid=LSTMOBG36HS2CKRMU8ERTDA2H&marketplace=FLIPKART&q=Xiaomi+Mi+11X+Pro&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=a4f5c7ec-da64-43e9-af23-4b6408853bbb.MOBG36HS2CKRMU8E.SEARCH&ppt=hp&ppn=homepage&ssid=5zllyc7rog0000001733946460892&qH=d8e13664204ed9d8'
    },
    // 7. Apple iPhone 15 Pro Max
   
    {
      name: 'Apple iPhone 15 Pro Max',
      site: 'Alibba',
      price: '79,900',
      rating: '4.6',
      features: [
        '6.7-inch Super Retina XDR Display',
        'A17 Pro Chip',
        '48MP Main Camera',
        '5G capable',
        '128GB Storage',
      ],
      reviews: [
        'The best iPhone ever made.',
        'Excellent camera performance.',
      ],
      img: 'https://s.alicdn.com/@sc04/kf/Hee84e19e714d4dcf96b8ca7c3970d58dG.jpg_720x720q50.jpg',
      url: 'https://www.alibaba.com/product-detail/Original-i15-phone-15-pro-max_1601267563631.html?spm=a2700.galleryofferlist.normal_offer.d_image.41d113a0bSB9PW&selectedCarrierCode=SEMI_MANAGED_PREMIUM@@PREMIUM'
    },
    // 8. Apple iPhone 15 Pro Max
    {
      name: 'Apple iPhone 15 Pro Max',
      site: 'Amazon',
      price: '₹1,79,900',
      rating: '4.6',
      features: [
        '6.7-inch Super Retina XDR Display',
        'A17 Pro Chip',
        '48MP Main Camera',
        '5G capable',
        '128GB Storage',
      ],
      reviews: [
        'Best performance and camera quality.',
        'The most premium iPhone.',
      ],
      img: 'https://m.media-amazon.com/images/I/41K6b4oqxyL.AC_SX522.jpg',
      url: 'https://www.amazon.com/Apple-iPhone-Silicone-Case-MagSafe/dp/B0CHWVCV1Y/ref=sr_1_1?crid=BXN5S70K9QK0&dib=eyJ2IjoiMSJ9.IFSuPOrQLTJRuAoQbgGUt7rttPQEhgccW1D8HZRA5hwByPcXNHTk7UWVDlx8z7_A-HciUOiD2Smn_OPo0DL89cw_ymG6VUl2rgyXFqgJ-nsHK7f0fEpGOBP08arVrQdq7i4YDYgxmkhyGLP4hrqqj_t28ecYeUPun5v3-hYQJgq7TqvofX5VKK5nCVycFii11tHbkFqDq_4rZsVp25uGLFYNeUIeufHLvQYExwuvyys.haE2K7NtgORqm1adyWs5VoxDjjHKmY-SkGpjh1pEaO4&dib_tag=se&keywords=Apple+iPhone+15+Pro+Max&qid=1733945693&sprefix=apple+iphone+15+pro+max%2Caps%2C844&sr=8-1'
    },
   
   
    // 10. LG 43-inch 4K UHD Smart TV
    {
      name: 'LG 43-inch 4K UHD Smart TV',
      site: 'Amazon',
      price: '₹34,990',
      rating: '4.4',
      features: [
        '43-inch 4K UHD Display',
        'WebOS Smart TV',
        'AI ThinQ',
        'HDR10',
        'Dolby Audio',
      ],
      reviews: [
        'Great budget 4K TV.',
        'Great for streaming and smart features.',
      ],
      img: 'https://m.media-amazon.com/images/I/41cQ1cJeIxL.AC_SX466.jpg',
      url: 'https://www.amazon.com/TCL-43-Inch-Class-43S551F-Channel/dp/B0DDVMLNGK/ref=sr_1_2?dib=eyJ2IjoiMSJ9.h26TH4HYrKhoLaZBZGlpTyL7WayhYfYnC-dQO_U6rSU9Y532H92m47S7rYO2A0OQrFVPtfE7HP9YvtHOFSeFrIq0i1d92q2NGvmYM5FZzcYYbEryLO-nkHXUnDxOXqnal8rSCHXKunoAdjNK2iqu4xgsFtHIBFI67LaSOwoVgqv-KPBMqRa_csCOC8NgYJLEUwaxG1Al-GMe34XUyqmC99mgp7HljIizFxhboRVgTd1xn_2SFP87vyvZ9ZifuAe_JHwCXzoX9HmXHwiY5_0-cvsOnSkuyzJtHYztvHuKPvmkU3GjYMGR1Rdz8GQOmFuu-kEcIvn9iGoH1KwE14IO6Mv3-kYRBBCPqettXnrbTb8-8fDJKDFyTDL57KnkwheBMfQXZ_lWK8MAniEe5px3yznBOPheJAIPzzOwysYMaT4.Df28Z6hXB1Rv1POCGQwZAQM38_qsIwYKkdSKO6OjNak&dib_tag=se&keywords=LG%2B43-inch%2B4K%2BUHD%2BSmart%2BTV&qid=1733944562&s=amazon-devices&sr=1-2&th=1https://www.flipkart.com/lg-43-inch-4k-ultra-hd-smart-tv-43up8000-2021-model/p/itm85e2cba3c6cf3'
    },
    {
    name: 'LG 43-inch 4K UHD Smart TV',
      site: 'Flipkart',
      price: '₹34,990',
      rating: '4.4',
      features: [
        '43-inch 4K UHD Display',
        'WebOS Smart TV',
        'AI ThinQ',
        'HDR10',
        'Dolby Audio',
      ],
      reviews: [
        'Great budget 4K TV.',
        'Great for streaming and smart features.',
      ],
      img: 'https://rukminim2.flixcart.com/image/832/832/xif0q/television/q/d/h/-original-imah2pjbmycn39c8.jpeg?q=70&crop=false',
      url: 'https://www.amazon.com/TCL-43-Inch-Clashttps://www.flipkart.com/lg-uq7550-108-cm-43-inch-ultra-hd-4k-led-smart-webos-tv-alpha5-ai-processor-gen5-sound-pro-super-upscaling-60-hz-refresh-rate-game-optimizer-magic-remote/p/itmf2095fc2f357c?pid=TVSGQQDYDZ6HZVUH&lid=LSTTVSGQQDYDZ6HZVUHFD2NHF&marketplace=FLIPKART&q=LG+43-inch+4K+UHD+Smart+TV&store=ckf%2Fczl&srno=s_1_2&otracker=search&otracker1=search&fm=organic&iid=295325d0-a87e-4128-8bee-940410b84681.TVSGQQDYDZ6HZVUH.SEARCH&ppt=hp&ppn=homepage&ssid=v09viixqj40000001733945255630&qH=1daaa2ce816484b6s-43S551F-Channel/dp/B0DDVMLNGK/ref=sr_1_2?dib=eyJ2IjoiMSJ9.h26TH4HYrKhoLaZBZGlpTyL7WayhYfYnC-dQO_U6rSU9Y532H92m47S7rYO2A0OQrFVPtfE7HP9YvtHOFSeFrIq0i1d92q2NGvmYM5FZzcYYbEryLO-nkHXUnDxOXqnal8rSCHXKunoAdjNK2iqu4xgsFtHIBFI67LaSOwoVgqv-KPBMqRa_csCOC8NgYJLEUwaxG1Al-GMe34XUyqmC99mgp7HljIizFxhboRVgTd1xn_2SFP87vyvZ9ZifuAe_JHwCXzoX9HmXHwiY5_0-cvsOnSkuyzJtHYztvHuKPvmkU3GjYMGR1Rdz8GQOmFuu-kEcIvn9iGoH1KwE14IO6Mv3-kYRBBCPqettXnrbTb8-8fDJKDFyTDL57KnkwheBMfQXZ_lWK8MAniEe5px3yznBOPheJAIPzzOwysYMaT4.Df28Z6hXB1Rv1POCGQwZAQM38_qsIwYKkdSKO6OjNak&dib_tag=se&keywords=LG%2B43-inch%2B4K%2BUHD%2BSmart%2BTV&qid=1733944562&s=amazon-devices&sr=1-2&th=1'

    }];
  const products = [
    { site: "Amazon", product: "HP Pavilion 15cs", img: "https://m.media-amazon.com/images/I/51OVtjtV5nL._SX425_.jpg", rating: 4.3, categories: "electronics", price: 6380, url: "https://www.amazon.in/HP-Pavilion-i5-1335U-14-inch-ew0116TU/dp/B0CWDBJ3Q8/ref=sr_1_1_sspa?crid=2D5PRRVKHJN81&dib=eyJ2IjoiMSJ9.b1Be0QraOCFVxwEX2Z1f_e8YEdUIYFSd7hH9u1cJ41KVfQdplAOhq168y2QvNHyE_tqXRIv52DA3X2l8qb4NodS3cFvcz-fJRYNdzdIEy1GgdrUo-8GFWC58bH6w_Sve62XOcNVJEZawTGDp5Lduer3JL2RENnfEDDInBxjq2UuBUsRGUMDQWGWcJOKSySKDijVkDnIY_A_zg0h17gq0rcHIxjhPQghIb9RnvENo4g0.GkHYP0szXPM_VynknfQD91fUcgpLSJMx3_RSTNvgXg8&dib_tag=se&keywords=HP+Pavilion+15cs&nsdOptOutParam=true&qid=1733947136&sprefix=hp+pavilion+15cs%2Caps%2C860&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
    { site: "eBay", product: "Apple iPhone 13", img: "https://i.ebayimg.com/images/g/InIAAOSwLPRnFp4p/s-l1600.webp", rating: 4.7, categories: "electronics", price: 799, url: "https://www.ebay.com/itm/126735443891?_skw=Apple+iPhone+13&epid=11049276145&itmmeta=01JEVMX7K83MSTA8MFETV8FPMV&hash=item1d820567b3:g:HnIAAOSwKz9nFp4Z&itmprp=enc%3AAQAJAAAA8HoV3kP08IDx%2BKZ9MfhVJKmwkQnSqQ%2BSyUqTnQJQicFnOt5Ue8OwUi1KKqc%2ByZJLeeqINlX5A%2BYRZrYNRe2exGduNJ4tWjM4SUBQFe5UjXIb4lQ7nx3siWmZ%2FmoHWaQPOviD60R0fNEwWn6X3%2F58sphHIas7r4mxLWhf70K01sa3VbP2%2FTmAkDm4xBuNXTQGIIbP%2BQ8gNsKQgDnZnT0L7Fz4wAV%2Fu2rMY4YmqFMCQHjh%2FB8zpwCokLH4uiDOpofkl7gsgmLHerp8VebNRc3M1tJEJxiClNesLNKfIqTFNE%2BblDE3lgG%2Bn2PzQdyH8WcVxg%3D%3D%7Ctkp%3ABFBM3Pn09PZk" },
    { site: "Alibaba", product: "Samsung Galaxy S21", img: "https://s.alicdn.com/@sc04/kf/H87e72269cee44a429a6c739e5840cab6C.jpg_720x720q50.jpg", rating: 4.6, categories: "electronics", price: 999, url: "https://www.alibaba.com/product-detail/Wholesale-Original-USA-S21-Unlocked-Second_1601048143417.html?spm=a2700.galleryofferlist.normal_offer.d_image.197013a0gWzxXi" },
    { site: "Walmart", product: "Fujifilm Instax Mini 11", img: "https://i5.walmartimages.com/seo/Fujifilm-instax-Mini-SE-Instant-Camera-Bundle-Light-Blue_ed9c4fbf-e515-43cb-9951-141b511743f9.aba89bb929b040547e811c08fd522af7.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", rating: 4.5, categories: "electronics", price: 60, url: "https://www.walmart.com/ip/5232924922?povid=ETS_camera_facet_search_minisebundle_instant_holiday" },
    { site: "Etsy", product: "Handmade Leather Wallet", img: "https://i.etsystatic.com/7970370/r/il/b1e3f4/993440344/il_794xN.993440344_gtcu.jpg", rating: 4.8, categories: "Accessories", price: 45, url: "https://www.etsy.com/in-en/listing/243437828/mens-leather-wallet-handmade-bi-fold?click_key=2dd26f42151d2172a2e888a210b80d834ed2f0b9%3A243437828&click_sum=628b5859&ref=search2_top_narrowing_intent_modules_etsys_pick-1&sts=1" },
    { site: "Target", product: "Dyson V11 Vacuum Cleaner", img: "https://target.scene7.com/is/image/Target/GUEST_d209f5d0-0185-4799-9cee-8ed80f27a8d7?wid=1200&hei=1200&qlt=80&fmt=webp", rating: 4.7, categories: "electronics", price: 599, url: "https://www.target.com/p/dyson-v8-origin-cordless-stick-vacuum/-/A-85269288#lnk=sametab" },
    { site: "Best Buy", product: "Sony WH-1000XM4 Headphones", img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408356_rd.jpg;maxHeight=640;maxWidth=550;format=webp", rating: 4.9, categories: "electronics", price: 350, url: "https://www.bestbuy.com/site/sony-wh1000xm4-wireless-noise-cancelling-over-the-ear-headphones-black/6408356.p?skuId=6408356" },
    { site: "Amazon", product: "Apple MacBook Air", img: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX522_.jpg", rating: 4.8, categories: "electronics", price: 999, url: "https://www.amazon.in/Apple-MacBook-Chip-13-inch-256GB/dp/B08N5W4NNB/ref=sr_1_1_sspa?crid=3ATFC3KGMFP54&dib=eyJ2IjoiMSJ9.CHExN13tCcFNwuIzOI3JShIoQF0uQXKeJmkv_nWTytrmiBHgmKMgLx5EWUq-V8UDghtr-xgRp7a7oIJBKcDCl35vvBcgy4zCN49JVjx9dJzJLyZ_xQG4Lw006gW0uNIuhrbsLMAqPQh8-2OtisIHUcrFAp3teT2oIIawBt-RoEIFEyMvaWxM4_dk6mDK-nN47yd608KZpcQD7DPkupLggFypMa6f945Et2aLGWdzPs8.utD6EY5husO0FR_tTBCqDfCAVaIihSNfIm1Nr7Hn4MY&dib_tag=se&keywords=Apple+MacBook+Air&nsdOptOutParam=true&qid=1733947827&sprefix=apple+macbook+air%2Caps%2C550&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
    { site: "eBay", product: "Samsung 55-inch TV", img: "https://i.ebayimg.com/images/g/Yl0AAOSwWJZla7kV/s-l1600.webp", rating: 4.5, categories: "electronics", price: 599, url: "https://www.ebay.com/itm/404658514797?_skw=Samsung+55-inch+TV&epid=10053121415&itmmeta=01JEVNHHK7S05WZYSJA1Y8YSVE&hash=item5e3786eb6d:g:Yl0AAOSwWJZla7kV&itmprp=enc%3AAQAJAAAA8HoV3kP08IDx%2BKZ9MfhVJKmttOtk92gpHBe2U5B46GYWJDF%2FdFchmwD8Pe%2FOIDO79kgjSi9QYMPpKWKh4H72PAcwUW3hSf73nc9J9VZSJ6iFbX8%2BXpYN13iMO0FgVL6M7DloRW9RQGFxBNkZFfbVTOKvU3HnCSWbfGrvPWdquDUCuU8G%2B4gCrKZTpYZdBysUPBT%2FJgWCxlBIClnk9ZNOIJ6Ohf8cpX9GF1c4ZIWwrJ2f7FTO84s1HPqJOarjTtuHH1UacUdN%2FZHsDjbLMD0PIvQhZK2VJSMJecg5OoB3rN%2FzNIyohG%2Bf4ryt%2BEFgrfxETQ%3D%3D%7Ctkp%3ABFBM1pnG9fZk" },
    { site: "Alibaba", product: "Huawei P40 Pro", img: "https://s.alicdn.com/@sc04/kf/H0f34e2a113e24b4e93be9b9a593c785bh.jpg_720x720q50.jpg", rating: 4.7, categories: "electronics", price: 799, url: "https://www.alibaba.com/product-detail/Global-Unlocked-Huawei-P40-Pro-5G_1601262089694.html?spm=a2700.galleryofferlist.normal_offer.d_title.7ea613a0vttafp" },
    { site: "Walmart", product: "Apple AirPods Pro", img: "https://i5.walmartimages.com/seo/AirPods-Pro-2nd-generation-with-MagSafe-Case-USB-C_4e23623d-94ed-4bac-851a-b1fde7eeb962.1523af65ffb7f2e2be28c8b3f0a008fa.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", rating: 4.7, categories: "electronics", price: 249, url: "https://www.walmart.com/ip/AirPods-Pro-2nd-generation-with-MagSafe-Case-USB-C/5689919121?classType=REGULAR&athbdg=L1200&from=/search" },
    { site: "Etsy", product: "Vintage Hand-Painted Pot", img: "https://i.etsystatic.com/43309323/r/il/c4441d/5834897249/il_794xN.5834897249_bvcb.jpg", rating: 4.8, categories: "Accessories", price: 40, url: "https://www.etsy.com/in-en/listing/1602220638/antique-french-set-of-15-antique?click_key=689b1237f66efd8ceedce54d35957e29cfd13c21%3A1602220638&click_sum=743fd98b&ref=search2_top_narrowing_intent_modules_etsys_pick-1&sts=1" },
    { site: "Target", product: "Instant Pot Duo", img: "https://target.scene7.com/is/image/Target/GUEST_2043f4f1-be40-4c04-9d6f-c3fbad58ece4?wid=1200&hei=1200&qlt=80&fmt=webp", rating: 4.8, categories: "Kitchen Appliances", price: 89, url: "https://www.target.com/p/instant-pot-6qt-9-in-1-pressure-cooker-bundle/-/A-90571185#lnk=sametab" },
    { site: "Best Buy", product: "Apple Watch Series 6", img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/93ebbb6c-3b98-4a8c-9fc0-7892f20502d8.jpg;maxHeight=640;maxWidth=550;format=webp", rating: 4.8, categories: "electronics", price: 399, url: "https://www.bestbuy.com/site/apple-watch-series-10-gps-42mm-aluminum-case-with-black-sport-band-s-m-jet-black-2024/6572678.p?skuId=6572678" },
    { site: "Amazon", product: "Lenovo ThinkPad X1 Carbon", img: "https://m.media-amazon.com/images/I/41omwbQ1b4L._SX425_.jpg", rating: 4.5, categories: "electronics", price: 1200, url: "https://www.amazon.in/Lenovo-ThinkPad-Laptop-Windows-21JNS0QE00/dp/B0D6749MG1/ref=sr_1_1_sspa?crid=1U5RZ5GSUU4UO&dib=eyJ2IjoiMSJ9.IEf-N7H2_7UmSeQ53GVIBewnzUBbcEfxa5l4M4pmNlvubkXRqPTf3eYGVjKjMoa2hsNYkf5WG-N1aHo7vXJdxLFzA_JySfW2ALDulRUZE40S7R1ZQb_meln2oTshSJitG32tYLAzM-1ACqli7lIFmLyI2SfmcmiZB-mPOs0zj5JybRVqRGWDy8FD0UKjyiSyVQIcSByrtuePlGUsOalFXhuK_b-oVTGh2uyR7XyWRkw.755ukWWF20DieGbkh6xq3-tcMWZm6rvD1W0q_7-CYGg&dib_tag=se&keywords=Lenovo+ThinkPad+X1+Carbon&nsdOptOutParam=true&qid=1733948258&sprefix=lenovo+thinkpad+x1+carbon%2Caps%2C436&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
    { site: "eBay", product: "HP Spectre x360", img: "https://i.ebayimg.com/images/g/3CYAAOSwa3FnRckH/s-l960.webp", rating: 4.6, categories: "electronics", price: 1500, url: "https://www.ebay.com/itm/156570270631?_skw=HP+Spectre+x360&itmmeta=01JEVNZEKN0SER7QQZD80EGPVD&hash=item247450bba7:g:JL4AAOSwrH1nRckC&itmprp=enc%3AAQAJAAAA8HoV3kP08IDx%2BKZ9MfhVJKksz8tXBT1K1xBO1RQJ%2FMP0QDw8e8KRxMKZdkdepeHokasAnlJgfHrSLuPPtmj07J9RtGJ66xbLBbCCLWCnZ4INmj%2BWZg60WO8%2FZWMONliruJKUSPHi81xcRn9O8ry17zJ8CT7W6eBicIkxj3il1tqUGWEOZ7KV5%2B1IBvDnrpIdyDHM1SWSHD8ZcvngYJAOnvA2zonRRrMm%2Fe8wZwM9X2xs3sNbu1Y4v2K%2BaTKPKGYr7Vg2dCvxdl1CWclqwKtSqcVNPrDYH6UvtgEZxITV%2FZbrrmdpyvsybW8AxkYfSppuuQ%3D%3D%7Ctkp%3ABFBM-un99fZk" },
    { site: "Alibaba", product: "Sony A7 III Camera", img: "https://s.alicdn.com/@sc04/kf/H712695e40e604b79b6af92fccaa831a6i.jpeg_720x720q50.jpg", rating: 4.9, categories: "electronics", price: 2200, url: "https://www.alibaba.com/product-detail/Sony-a7-III-Mirrorless-4K-Digital_1601207606552.html?spm=a2700.galleryofferlist.normal_offer.d_title.565613a03nDDv9" },
    { site: "Walmart", product: "Microsoft Surface Laptop 4", img: "https://i5.walmartimages.com/seo/Microsoft-Surface-Laptop-4-13-5-32GB-1TB-SSD-Core-i7-1185G7-2-3GHz-WIN11H-Black-Used-Good_648bf2e7-2ac8-4660-8f75-69aa1d3d1ae2.ab37373ac6db78d186efbdd5743655dd.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", rating: 4.7, categories: "electronics", price: 1300, url: "https://www.walmart.com/ip/Microsoft-Surface-Laptop-4-13-5-32GB-1TB-SSD-Core-i7-1185G7-2-3GHz-WIN11H-Black-Used-Good/3685908941?classType=VARIANT&athbdg=L1600&adsRedirect=true" },
    { site: "Etsy", product: "Custom Wooden Keychain", img: "https://i.etsystatic.com/24569586/r/il/56c773/2829142595/il_794xN.2829142595_g6fn.jpg", rating: 4.9, categories: "Accessories", price: 15, url: "https://www.etsy.com/in-en/listing/939149269/personal-handwritten-message-keyring?click_key=019e588ff1050dd2638bf63e6e3c28e8ea8fb27a%3A939149269&click_sum=c46e6d85&ref=search2_top_narrowing_intent_modules_etsys_pick-1&pro=1&sts=1" },
    { site: "Target", product: "Ninja Foodi Air Fryer", img: "https://target.scene7.com/is/image/Target/GUEST_f5cef684-6f6b-43aa-b74e-f2db44eb19d1?wid=1200&hei=1200&qlt=80&fmt=webp", rating: 4.6, categories: "Kitchen Appliances", price: 120, url: "https://www.target.com/p/ninja-foodi-8qt-original-dualzone-2-basket-air-fryer-with-6-functions-dz201/-/A-79991380#lnk=sametab" },
    { site: "Best Buy", product: "Bose SoundLink Revolve+ Bluetooth Speaker", img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452118_sd.jpg;maxHeight=640;maxWidth=550;format=webp", rating: 4.8, categories: "electronics", price: 329, url: "https://www.bestbuy.com/site/bose-soundlink-revolve-ii-portable-bluetooth-speaker-triple-black/6452118.p?skuId=6452118" },
    { site: "Amazon", product: "Dell XPS 13", img: "https://m.media-amazon.com/images/I/611nPYn-NmL._SX522_.jpg", rating: 4.7, categories: "electronics", price: 999, url: "https://www.amazon.in/Dell-Enabled-Processor-Graphics-Platinum/dp/B0DNT8PMT9/ref=sr_1_5?crid=B3U178BVDD3T&dib=eyJ2IjoiMSJ9.KZ24iGnEZI7L2oN6B98qgd7aRBTalcu6zmyJliGy_3Az26IQSqzJhSlqiBHwkKI5KgYjvvH8DOdc1IvS9QUPW9D6r4rKeZHTQ6HB3je-uzAuIAzPY9yIAJgVjyJZQyYpTYjdIr5DEiX57tzOaXMxCkxmILRtl2qnixvSPqwDr5Qpr4m2a_UJ3FRKKX-AiwcG_er3IdZ-3XXyNEqwgMEgg0EwJ1WviWtgpmikgerTigI.6zYAyfEn47wvXTYKws5lxDyEvbDOT359VgfkxNGGNjs&dib_tag=se&keywords=Dell+XPS+13&nsdOptOutParam=true&qid=1733948592&sprefix=lenovo+thinkpad+x1+carbon%2Caps%2C641&sr=8-5" },
    { site: "eBay", product: "Google Pixel 5", img: "https://i.ebayimg.com/images/g/a3MAAOSw8jFhQ6Hc/s-l960.webp", rating: 4.6, categories: "electronics", price: 699, url: "https://www.ebay.com/itm/226459746196?_skw=Google+Pixel+5&epid=20041421451&itmmeta=01JEVP95JP55MD49MKHABRR68N&hash=item34ba0d7f94:g:puMAAOSwaYpnB1dT&itmprp=enc%3AAQAJAAAA8HoV3kP08IDx%2BKZ9MfhVJKmggh4PuaoYGcvh7J%2FQuD81BlZTYXfcmzMj%2BPMsEvPWYfUXDF3IteEr8lr%2F32r5gGllsFTqTFMMp9G0i7B%2BZDmC2KqTJ9FvMoAb2qigqkwDTZAB5vnaE9EORxFodgi2%2B8ciLPfVssmavLInceZicCefUzGxl8eEkRwXHbNMY9EdCNbhMVHLOaiR2YjS8XXeJdJw9cRR%2BawRVWV3SvMP1HO9y5L5Tr4Fz9v7GWxLX1o%2FVjb4gInK8eclr7fzE%2BEkFg6bd8WFqtw8wYT3AviAIe39xQodx3wdvupcnkrUWv9ZFA%3D%3D%7Ctkp%3ABFBMttmk9vZk" },
    { site: "Alibaba", product: "LG OLED 55-inch TV", img: "https://s.alicdn.com/@sc04/kf/A809b20aff11a452283814cc4368a41e8p.jpg_720x720q50.jpg", rating: 4.8, categories: "electronics", price: 2200, url: "https://www.alibaba.com/product-detail/LG-55-inch-Icd-advertising-display_1600609657165.html?spm=a2700.galleryofferlist.wending_right.i7.464713a0qLKVMX" },
    { site: "Walmart", product: "Fitbit Charge 4", img: "https://i5.walmartimages.com/seo/Fitbit-Versa-4-Fitness-Smartwatch-Daily-Readiness-GPS-24-7-Heart-Rate-40-Exercise-Modes-Fit-Bit-Smart-Watch-For-Men-And-Women-Pink-Sand-Copper-Rose-B_548c74e7-8cc1-47b2-a330-89a7ed56a883.185a165fe40cce1f9df0276509c2c7e3.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", rating: 4.5, categories: "electronics", price: 149, url: "https://www.walmart.com/ip/Fitbit-Versa-4-Fitness-Smartwatch-Daily-Readiness-GPS-24-7-Heart-Rate-40-Exercise-Modes-Fit-Bit-Smart-Watch-For-Men-And-Women-Pink-Sand-Copper-Rose-B/9585559128?classType=VARIANT&athbdg=L1600&adsRedirect=true" },
    { site: "Etsy", product: "Handmade Wooden Clock", img: "https://i.etsystatic.com/7279722/r/il/857905/5496042600/il_794xN.5496042600_aywq.jpg", rating: 4.9, categories: "Accessories", price: 50, url: "https://www.etsy.com/in-en/listing/1433053823/wooden-wall-clock-12-30cm-topology?click_key=7dac83d14d639825ed042dcd6f13f63e403a638f%3A1433053823&click_sum=4a19aeed&ref=search2_top_narrowing_intent_modules_etsys_pick-1&pro=1&frs=1" },
    { site: "Target", product: "Cuisinart Food Processor", img: "https://target.scene7.com/is/image/Target/GUEST_f9e6291d-38d0-49a7-a96a-67d5fbd547fa?wid=1200&hei=1200&qlt=80&fmt=webp", rating: 4.7, categories: "Kitchen Appliances", price: 120, url: "https://www.target.com/p/cuisinart-core-7-cup-food-processor-fp-7/-/A-89077096#lnk=sametab" },
    { site: "Best Buy", product: "Apple HomePod Mini", img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6377/6377587_sd.jpg;maxHeight=640;maxWidth=550;format=webp", rating: 4.7, categories: "electronics", price: 99, url: "https://www.bestbuy.com/site/apple-homepod-mini-midnight/6377594.p?skuId=6377594" },
    
  ];
  

  
  
function getRandomItems(arr) {
    let randomItems = [];
    // Clone the array to avoid modifying the original array
    let clonedArr = [...arr];

    // Randomly select 10 items from the array
    for (let i = 0; i < 10; i++) {
        // Pick a random index
        const randomIndex = Math.floor(Math.random() * clonedArr.length);
        // Get the item at the random index
        randomItems.push(clonedArr[randomIndex]);
        // Remove the selected item from the array to avoid duplicates
        clonedArr.splice(randomIndex, 1);
    }

    return randomItems;
}


const randomItems = getRandomItems(products);
let  newTrends = [];

randomItems.forEach(function(ele){
    newTrends.push(
        `
        <div class="product-card">
                    <a href="${ele.url}" > 
                    <img class="platform-image" src="${ele.img}" alt="Product 4">
                    </a>
                    
                    <p>Trending in ${ele.site} today!</p>
                    <p>${ele.product}</p>
                    <p>Rs. ${ele.price * 80}/-</p>
                    <p>Rating:${ele.rating}⭐</p>
                </div>
        `
    )
})
const todayTrends = document.querySelector('.top-searches');
  
// Insert the HTML into the container
todayTrends.innerHTML = newTrends.join('');






let itemToCompare;

// Helper Functions
const toggleClass = (element, className) => {
    element.classList.toggle(className);
};

const showElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) element.classList.remove('hidden');
};

const hideElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) element.classList.add('hidden');
};

const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

// Sidebar Toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    toggleClass(sidebar, 'active');
}

// Navigation: Show/Hide Sections
function showSection(sectionId) {
    console.log("we are in")
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => hideElement(section.id)); // Hide all sections
    showElement(sectionId); // Show the selected section

    // Update UI for dynamic sections
    if (sectionId === "cart") {
        updateCartUI();
    } else if (sectionId === "favorites") {
        updateFavoritesUI();
    }
    else if (sectionId === "categories") {
      console.log("we are in")
      const topSearchesDiv = document.getElementById('display-categories');
      topSearchesDiv.style.display = 'none';
      
      const categoriesSection = document.getElementById('categories');
      categoriesSection.style.display = 'block';
        
          // Show the top-searches section
      loadCategories();
    }
}

// Dynamic Category Loading
function loadCategories() {
    const categoriesContainer = document.getElementById('categories-container');
    const categories = [
        "Electronics",
        "Kitchen Appliances",
        "Home Decor",
        "Fashion",
        "Books",
        "Sports Equipment",
    ];

    // Show Specific Category (Placeholder Functionality)



    // Clear previous categories
    categoriesContainer.innerHTML = "";

    // Dynamically add category buttons
    categories.forEach((categories) => {
        const button = document.createElement("button");
        button.className = "category-btn";
        button.innerText = categories;
        button.onclick = () => handleCategoryClick(categories);
        categoriesContainer.appendChild(button);
    });
}

// Handle Click on a Category
function handleCategoryClick(categories) {
    alert(`You clicked on ${categories}!`);
    // Optionally redirect or load a specific page for this category
}

// Search Product
async function searchProduct() {                                                     //  1. search product
    const searchTerm = document.getElementById('search-bar').value.trim();

    if (!searchTerm) {
        alert('Please enter a product name to search.');
        return;
    }

    try {
        showLoadingMessage('Searching for products...');
        const productData = await fetchProductData(searchTerm);
        const itemsToCompare = stock.filter((ele) => ele.name === searchTerm);
        if(itemsToCompare.length === 0 ){
            

            showLoadingMessage('No deals to compare !! Please try with different keyword');
            setTimeout(function() {
                hideLoadingMessage();
            }, 3000);
            return;
        }
        displayComparison(productData, itemsToCompare);

        
    } catch (error) {
        console.error('Error fetching product data:', error);
        alert('Failed to fetch product data. Please try again later.');
    } finally {
        hideLoadingMessage();
    }
}

// Mock Function to Fetch Product Data
async function fetchProductData(searchTerm) {                                       // 2. data to compare
    // Simulated delay and mock response
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                flipkart: {
                    price: '₹1,89,900',
                    rating: '4.6',
                    features: ['SSD:1 TB','RAM:16GB','USB PORT : 3 x thunderbolt 4(USB -C)'],
                    reviews: ['Good quality!', 'Value for money!','Battery is good'],
                },
                amazon: {
                    price: '₹1,69,900',
                    rating: '4.5',
                    features: ['Liquid retina XDR display', '16GB Unified Memory ','SSD:512GB'],
                    reviews: ['Fast delivery!', 'Great packaging!','guality is very good'],
                },
            });
        }, 1500);
    });
}

// Display Comparison Results
function displayComparison(productData, itemsToCompare) {                                           // 3. cards to display
    const { flipkart, amazon } = productData;

    let eleArr = [];
    itemsToCompare.forEach(function (ele) {
        // Generate list items for features
        const featuresHTML = ele.features.map(feature => `<li>${feature}</li>`).join('');
      
        // Generate reviews
        const reviewsHTML = ele.reviews.map(review => `<p>${review}</p>`).join('');
      
        // Add the full HTML for the platform
        eleArr.push(
          `<div class="platform">
            <h2 id="flipkart-title">${ele.site}</h2>
            <img src="${ele.img || 'mac.png'}" alt="${ele.site} Product" class="platform-image">
            <p>Price: <span id="flipkart-price">${ele.price}</span></p>
            <p>Rating: <span id="flipkart-rating">${ele.rating}</span> ⭐</p>
            <p>Features:
              <ul id="flipkart-features">
                ${featuresHTML} <!-- Dynamically inserted features -->
              </ul>
            </p>
            <p>User Reviews:</p>
            <div id="flipkart-reviews">
              ${reviewsHTML} <!-- Dynamically inserted reviews -->
            </div>
            <a id="alink" href="${ele.url}">Buy on ${ele.site}</a>
            <button onclick="addToCart('${ele.site}')">Add to Cart</button>
          </div>`
        );
      });
      
  // Select the comparison container
  const comparisonContainer = document.querySelector('.comparison-container');
  
  // Insert the HTML into the container
  comparisonContainer.innerHTML = eleArr.join('');

  //features

  


    showSection('comparison');
}
// Loading Message
function showLoadingMessage(message) {
    const loadingElement = document.createElement('div');
    loadingElement.id = 'loading-message';
    loadingElement.innerText = message;
    loadingElement.style.position = 'fixed';
    loadingElement.style.top = '50%';
    loadingElement.style.left = '50%';
    loadingElement.style.transform = 'translate(-50%, -50%)';
    loadingElement.style.padding = '20px';
    loadingElement.style.background = 'rgba(0, 0, 0, 0.7)';
    loadingElement.style.color = '#fff';
    loadingElement.style.borderRadius = '8px';
    loadingElement.style.zIndex = '1000';
    document.body.appendChild(loadingElement);
}

function hideLoadingMessage() {
    const loadingElement = document.getElementById('loading-message');
    if (loadingElement) loadingElement.remove();
}

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    updateFavoritesUI();
});
// Sidebar Toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Navigation: Show/Hide Sections
function showSection(sectionId) {

  const categoriesSection = document.getElementById('categories');
    
  if (sectionId === "categories") {

    const topSearchesDiv = document.getElementById('display-categories');
    topSearchesDiv.style.display = 'none';
    
    // const categoriesSection = document.getElementById('categories');
    categoriesSection.style.display = 'block';
  }else {
    categoriesSection.style.display = 'none';
  }
  
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => section.classList.remove('active')); // Hide all sections
    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.classList.add('active'); // Show selected section
}

// Add to Cart
function addToCart(platform) {
    alert("Item added to cart");
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(`Item from ${platform}`);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = cartItems.length
        ? cartItems.map((item) => `<li>${item}</li>`).join('')
        : '<li>Your cart is empty.</li>';
}

// Clear Cart
function clearCart() {
    localStorage.removeItem('cart');
    updateCartUI();
}

// Initialize UI on Load
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
});
// Load environment variables from .env file
require('dotenv').config();

// Access the Flipkart and Amazon API keys from environment variables
const flipkartApiKey = process.env.FLIPKART_API_KEY;
const amazonApiKey = process.env.AMAZON_API_KEY;

console.log('Flipkart API Key:', flipkartApiKey);
console.log('Amazon API Key:', amazonApiKey);
function buyNow(platform) {
    let url;
    if (platform === 'Flipkart') {
        url = 'https://www.flipkart.com';
    } else if (platform === 'Amazon') {
        url = 'https://www.amazon.in';
    }
    // Redirect the user to the selected platform's URL
    if (url) {
        window.location.href = url;
    } else {
        alert('Platform URL not found!');
    }
}
function toggleProfileMenu() {
    const profileMenu = document.getElementById("profile-menu");
    
    // Toggle the hidden class
    profileMenu.classList.toggle("hidden");

    // If menu is visible, add event listener for outside clicks
    if (!profileMenu.classList.contains("hidden")) {
        document.addEventListener("click", closeMenuOnClickOutside);
    } else {
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}

function closeMenuOnClickOutside(event) {
    const profileMenu = document.getElementById("profile-menu");
    const profileIcon = document.querySelector(".profile-icon");

    // Close the menu if the click is outside the menu or the profile icon
    if (!profileMenu.contains(event.target) && !profileIcon.contains(event.target)) {
        profileMenu.classList.add("hidden");
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}


// Toggle profile menu visibility
function toggleProfileMenu() {
    const profileMenu = document.getElementById("profile-menu");
    profileMenu.classList.toggle("hidden");
}

// Toggle profile menu visibility
function toggleProfileMenu() {
    const profileMenu = document.getElementById("profile-menu");
    profileMenu.classList.toggle("hidden");
}

// Open the modal for sign-in or log-in
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex"; // Show modal as flex to center it
}

// Close the modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none"; // Hide modal
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const signInModal = document.getElementById("sign-in-modal");
    const logInModal = document.getElementById("log-in-modal");

    if (event.target === signInModal) {
        signInModal.style.display = "none";
    } else if (event.target === logInModal) {
        logInModal.style.display = "none";
    }
};

// Handle Sign Up Form Submission
function handleSignUp(event) {
    event.preventDefault();
    const email = document.getElementById("sign-in-email").value;
    const password = document.getElementById("sign-in-password").value;
    console.log("Signing up with", email, password);
    closeModal('sign-in-modal');
}

// Handle Log In Form Submission
function handleLogIn(event) {
    event.preventDefault();
    const email = document.getElementById("log-in-email").value;
    const password = document.getElementById("log-in-password").value;
    console.log("Logging in with", email, password);
    closeModal('log-in-modal');
}

// Toggle between the initial log-in screen and the form fields
function toggleFormFields(formId, initialId) {
    document.getElementById(formId).classList.remove("hidden");
    document.getElementById(initialId).classList.add("hidden");
}

// Go back to the initial log-in screen
function goBack(formId, initialId) {
    document.getElementById(formId).classList.add("hidden");
    document.getElementById(initialId).classList.remove("hidden");
}


const topSearches = [
    { name: "Product 1", link: "product1.html" },
    { name: "Product 2", link: "product2.html" },
    { name: "Product 3", link: "product3.html" },
    { name: "Product 4", link: "product4.html" },
];

const topSearchesContainer = document.getElementById('top-searches');

topSearches.forEach(product => {
    const productCard = document.createElement('a');
    productCard.className = 'product-card';
    productCard.href = product.link;
    productCard.textContent = product.name;
    topSearchesContainer.appendChild(productCard);
});

// Toggle Profile Menu (Show/Hide)
function toggleProfileMenu() {
    const profileMenu = document.getElementById('profile-menu');
    profileMenu.classList.toggle('show');
}

// Open Modal (Log In or Sign Up)
function openModal(modalId) {
    closeAllModals(); // Close any open modals
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
}

// Close All Modals
function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => modal.classList.remove('show'));
}

// Go Back Button (Close Modal and Return to Profile Menu)
function goBack() {
    closeAllModals(); // Close the modal
    const profileMenu = document.getElementById('profile-menu');
    profileMenu.classList.remove('show'); // Close the profile menu
}
