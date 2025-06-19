import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import '../../styles/footerStyles.css';

const Footer = () => {
  return (
    // <footer className="border-t border-gray-200 py-12 bg-gradient-to-br from-[#e38dd0] via-[#e2e8a5] to-[#d6d464]">
    //   <div className="container mx-auto px-4 lg:px-0">
    //     {/* logo natin */}
    //     <div className="Logo p-4 ">
    //       <img
    //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatYPoPawbfCctn3mvDbfuhLd-iedJlQMsSw&s"
    //         alt="Logo"
    //         className="w-36 h-36 object-cover rounded-full"
    //       />
    //     </div>

    //     {/* parang letter to */}

    //     <div className="flex items-center justify-center flex-col text-center mb-12">
    //       <p className="text-gray-900 font-bold mb-4 text-balance text-xl">
    //         Hunger Halt and other Group Inc. -affiliated companies own the
    //         trademarks, logos and service marks displayed on ths site and users
    //         are prohibited from using the same without written permission of
    //         Mac's Group Inc. or such other parties.
    //       </p>
    //       <p className="text-gray-900 font-bold mb-4 text-balance text-xl">
    //         The materials on this site are protected by copyright and no part of
    //         such materials may be modified, reproduced, stores in a retrieval
    //         system, transmitted (In any form or by anu means), copied,
    //         distributed, used for creating derivative works or use in any other
    //         way for commercial or public purposes without the Max's Group Inc.'s
    //         prior written consent.
    //       </p>

          
    //     </div>
    //     <div className="flex justify-center items-center my-4 w-full">
    //       <hr className="border-t-2 border-dotted border-gray-400 w-1/2 bg-gray-900" />
    //     </div>

    //     {/* numbers */}
    //     <div className="mt-12 flex flex-col ">
    //       <div className="p-8 flex items-center space-x-5">
    //         <BsTelephone className="text-lg" />
    //         <h3 className="text-xl  text-red-700 tracking-wide font-semibold ">
    //           DELIVERY NUMBERS:
    //         </h3>
    //       </div>
    //       <div className="flex justify-evenly mb-10 ">
    //         <div>
    //           <h3 className="text-red-700 fond-bold text-lg">ICCT CAINTA</h3>
    //           <h2 className="font-bold text-md">987-90000</h2>
    //         </div>
    //         <div>
    //           <h3 className="text-red-700 fond-bold text-lg">ICCT SAN MATEO</h3>
    //           <h2 className="font-bold text-md">143-30300</h2>
    //         </div>
    //         <div>
    //           <h3 className="text-red-700 fond-bold text-lg">ICCT ANTIPOLO</h3>
    //           <h2 className="font-bold text-md">999-89000</h2>
    //         </div>
    //       </div>
    //       <div className="flex justify-evenly">
    //         <div>
    //           <h3 className="text-red-700 fond-bold text-lg">ICCT CAINTA</h3>
    //           <h2 className="font-bold text-md">987-90000</h2>
    //         </div>
    //         <div>
    //           <h3 className="text-red-700 fond-bold text-lg">ICCT SAN MATEO</h3>
    //           <h2 className="font-bold text-md">143-30300</h2>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex items-center justify-center flex-col text-center mt-12">
    //       <p className="text-gray-800 font-light mb-4 text-balance text-xl">
    //         Hunger Halt provides conventient delivery services to major areas
    //         within Greater Manila and a number of nearby provincial zones. To
    //         ensure smooth processing and efficient service, we require a minimum
    //         order amount of Php 300. This policy helps us maintain qualify and
    //         timely deliveries for all our valued customers.
    //       </p>
    //     </div>

    //     <div className="flex justify-center items-center my-4 w-full">
    //       <hr className="border-t-2 border-dotted border-gray-400 w-1/2 bg-gray-900" />
    //     </div>
    //   </div>

    //   <div className="flex flex-col items-center ">
    //     <h1 className="text-red-700 font-bold tracking-wide">OTHER BRAND</h1>

    //     <div className="flex justify-center items-center  mt-8">
    //       <ul className="flex gap-5">
    //         <li>
    //           <img
    //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatYPoPawbfCctn3mvDbfuhLd-iedJlQMsSw&s"
    //             alt="Logo"
    //             className="w-24 h-24 object-cover rounded-full"
    //           />
    //         </li>
    //         <li>
    //           <img
    //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatYPoPawbfCctn3mvDbfuhLd-iedJlQMsSw&s"
    //             alt="Logo"
    //             className="w-24 h-24 object-cover rounded-full"
    //           />
    //         </li>
    //         <li>
    //           <img
    //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatYPoPawbfCctn3mvDbfuhLd-iedJlQMsSw&s"
    //             alt="Logo"
    //             className="w-24 h-24 object-cover rounded-full"
    //           />
    //         </li>
    //         <li>
    //           <img
    //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatYPoPawbfCctn3mvDbfuhLd-iedJlQMsSw&s"
    //             alt="Logo"
    //             className="w-24 h-24 object-cover rounded-full"
    //           />
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-300 pt-6">
    //     <p className="text-sm text-gray-500 text-center tracking-tighter">
    //       @Krema Kreme, All Right Reversed.
    //     </p>
    //   </div>
    // </footer>

  
  <div className="menu-container">
    
    <div className="left-panel">
      <img src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.15752-9/496510690_1228784272071599_47544572011920674_n.png?stp=dst-png_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHwYvBwpGtiS2GxTSUrDlEIlariywHbtgyVquLLAdu2DGbmqCsWdXWiREyH5-RSLjpZ417tOymk_zDk0ujJKPbq&_nc_ohc=kf2-tjEuTxAQ7kNvwHK88bC&_nc_oc=AdmK_FCTOnemltEskArlNYqQFSbU8BLP0fHP1KZgL7sk9r2TM3FozuXHiAE3kVGZl2LtjiL4qbQgDWMab0IRh1av&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&oh=03_Q7cD2gEN2ngdegDdPvjdoFtI1qHrGrvu4bNfsebYCjjLX2sa8w&oe=687203FB" alt="Logo" class="logo" />
      <p className="desc">
        Hunger Halt and other Group Inc.-affiliated companies own the trademarks, logos and service marks 
		displayed on this site and users are prohibited from using the same without permission 
		of Max's Group Inc. or such other parties.
		
		The materials on this site are protected by copyright and no part of such materials may be modified,
		reproduced, stored in a retrieval system, tansmitted(in any form or by any means), copied, distributed,
		used for creating derivative works or used in any other way for commercial or public purposes without the 
		Max's Group Inc. prior written consent.
      </p>
      <hr />
      <h3>📞 DELIVERY NUMBERS:</h3>
      <ul>
        <li>ICCT CAINTA - 987-90000</li>
        <li>ICCT SAN MATEO - 143-30300</li>
        <li>ICCT ANTIPOLO - 999-89000</li>
        <li>ICCT BINANGONAN - 678-30509</li>
        <li>ICCT COGEO - 143-90000</li>
      </ul>
      <p className="note">
        Hunger Halt provides convenient delivery services to major areas within Greater Manila
		and a number of nearby provincial zones. To ensure smooth processing and effcient service,
		we require a minimun order amount of Php 300. This policy helps us maintain quality and timely
		deliveries for all our valued customers.
      </p>
      <div className="brands">
        <h4>Other Brand</h4>
        <div className="brand-icons">
          <img src="https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-cinnamon-sugar-donut-png-image_13090873.png" />
          <img src="https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-cinnamon-sugar-donut-png-image_13090873.png" />
          <img src="https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-cinnamon-sugar-donut-png-image_13090873.png" />
          <img src="https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-cinnamon-sugar-donut-png-image_13090873.png" />
        </div>
      </div>
    </div>
	
    <div className="menu-panel">
      <h2 className="ribbon">BEST SELLER</h2>

      <div className="classic">
        <h3>CLASSIC DONUTS</h3>
        <div className="item-list">
          <div className="item">
            <img src="https://www.krispykreme.co.uk/media/catalog/product/m/e/menu-images-templates-menu-singles-600x600px-og_1.png?quality=80&fit=bounds&height=&width=&canvas=:" />
            <p>Original Glazed Donut</p>
          </div>
          <div className="item">
            <img src="https://app.krispykreme.co.uk/media/catalog/product/m/e/menu-images-templates-menu-singles-600x600px-choc-sprinkles.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700" />
            <p>Chocolate Sprinkles Donut</p>
          </div>
          <div className="item">
            <img src="https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-cinnamon-sugar-donut-png-image_13090873.png"/>
            <p>Sugar Cinnamon Donut</p>
          </div>
        </div> 
      </div>

      <div className="drinks">
        <h3>DRINKS</h3>
        <div className="item-list">
          <div className="item">
            <img src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/494688043_1250922879934893_6975106578943707323_n.png?stp=dst-png_s526x395&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGDz2nKBG9qkxT46AkZm86SYhp91GyotONiGn3UbKi04_7XjqUEnuh4tQ-JDDAzs3kF6Y0bb-lzU0WabMJrdKrH&_nc_ohc=pFSRktHjYNIQ7kNvwFzecZW&_nc_oc=AdkZBi8UYYv7ABzA_YBnXrVZOfENCjAAfkfrCAKH-LIBczJxAfpM2KtIKta3bUm5dgTN0hXI3T3GwsEOYNwz-EE7&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&oh=03_Q7cD2gF4C2sbUd-_cw9Dy_L9kRYyUWFekoErKv2aycBG5lqu3Q&oe=6871FBF8"/>
            <p>Cookies & Cream Chiller with Choco<br /><span></span></p>
          </div>
          <div className="item">
            <img src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/494691710_1428098851871124_8601709043562710419_n.png?stp=dst-png_s480x480&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGpf2DXFz-Dl-bM5v6V2eWXLatP_M7OsPktq0_8zs6w-TlFtE0gEfDoFQVtNQO-NMQY0Gh1e5lHm4x64m30rS8w&_nc_ohc=gohemQpXaQAQ7kNvwEX3kHL&_nc_oc=Adl0VcJaumX0rYXI7arBlIJIat4mzMA7521vmk8viHuV_reBeyxQUp99QQk-FLiH9ryiWFIrF6SFncZov6U8u8VY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&oh=03_Q7cD2gFaUZ65CB7KpdLRP04rUBVwR1bg_jrCpJr1UsYVAltIzQ&oe=6871E33F"/>
            <p>Frozen Strawberry Lemonade<br /><span></span></p>
          </div>
          <div className="item">
            <img src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.15752-9/494691248_3118079101672990_1113392556521420610_n.png?stp=dst-png_s526x395&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeF5yoLRR5Ig80h9j2JftS4SDttuziebqgYO227OJ5uqBl_zI0B3UFnrLpfqZkp5LCyTJtG__d7VgpPJEptmW16M&_nc_ohc=xJfs_qXEtxkQ7kNvwHrgWj2&_nc_oc=AdmXv5w_OY8Z8BYCOSxQYjK_0RFJdALtyKjekMTB8qAs5ocmCpzHet6VtbZaZAHXZTXbaH1xhDlTs4ucZmuHguxD&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&oh=03_Q7cD2gFeXXhpX93bROedOJFqSqvXC8Vw-k3KLxzkMPhGCiNmMA&oe=68720316"/>
            <p>Caramel Latte Chiller with Espresso<br /><span></span></p>
          </div>
        </div>
      </div>

      <div className="promos">
        <h3>HOLIDAY PROMOS</h3>
        <div clclassNamess="item-list">
          <div className="item">
            <img src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.15752-9/495076179_1741143397284590_4130859430672784682_n.png?stp=dst-png_s480x480&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHfTJRkuJaH9tlptfh9dDPspB_4UyMv51ekH_hTIy_nV-qklwwk_wquqFSO6yLZGMsIPgrfZySYRhhVJ8VnMVe4&_nc_ohc=j_oqPCtEy5MQ7kNvwE2izDw&_nc_oc=AdkPGUmDtWbTWYtqo910Bj1k9QpZmdrEM2G1ykEEk7bzS9CvwlC_a5MbKCx7QiQrakx6s3n7rhwe69kPcbKIlIYJ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&oh=03_Q7cD2gFAzzfChHph7ZhIyE6VCa0JqcZ30c9CABch04bGB5M17Q&oe=68720288" />
            <p>Double Dozen Original Glazed® Doughnuts</p>
          </div>
          <div className="item">
            <img src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.15752-9/496512179_611609578619747_8582401237461660838_n.png?stp=dst-png_s480x480&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGsAtCW3UsUQzEpNwVwKh62CnvYe9UliHQKe9h71SWIdCxa94pu3rEjTM5vLZt1o8DkJTZqo0kEQJpILLhoKAls&_nc_ohc=dpzN1huaK8sQ7kNvwFwXZWh&_nc_oc=AdnR0d6c3hgkrUIbyeyUOBQ7U2mJHcL7Ti_mru9jB4-K3Osfx6jxG7iAxs4dNghRSIZFeByGbkCUyMuRh7LJwP_i&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&oh=03_Q7cD2gHS2r7s4flVDjkdDViNeBfYuFPLh15Y8BRqdJUWC9w8sQ&oe=6871F537" />
            <p>Churro Doughnuts</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <img src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.15752-9/496510690_1228784272071599_47544572011920674_n.png?stp=dst-png_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHwYvBwpGtiS2GxTSUrDlEIlariywHbtgyVquLLAdu2DGbmqCsWdXWiREyH5-RSLjpZ417tOymk_zDk0ujJKPbq&_nc_ohc=kf2-tjEuTxAQ7kNvwHK88bC&_nc_oc=AdmK_FCTOnemltEskArlNYqQFSbU8BLP0fHP1KZgL7sk9r2TM3FozuXHiAE3kVGZl2LtjiL4qbQgDWMab0IRh1av&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&oh=03_Q7cD2gEN2ngdegDdPvjdoFtI1qHrGrvu4bNfsebYCjjLX2sa8w&oe=687203FB" />
        <p>+1234567890<br />hungerhalt.ph.com<br />Manila, Philippines</p>
      </div>
    </div>

    <div className="menu-panel">
    </div>
  </div>

  );
};

export default Footer;
