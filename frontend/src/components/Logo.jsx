// const Logo = ({ className = "h-14 w-auto" }) => {
//   return (
//     <svg
//       viewBox="0 0 680 260"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       role="img"
//       aria-label="Digamber Mart logo"
//     >
//       <g transform="translate(120,60)">
//         <path
//           d="M20 40 L20 25 Q20 0 45 0 Q70 0 70 25 L70 40"
//           fill="none"
//           stroke="#db2777"
//           strokeWidth="6"
//           strokeLinecap="round"
//         />
//         <rect x="0" y="40" width="90" height="90" rx="10" fill="#db2777" />
//         <text
//           x="45"
//           y="98"
//           textAnchor="middle"
//           fontFamily="Arial, sans-serif"
//           fontSize="52"
//           fontWeight="700"
//           fill="#ffffff"
//         >
//           D
//         </text>
//       </g>
//       <text x="240" y="115" fontFamily="Arial, sans-serif" fontSize="56" fontWeight="700" fill="#1f2937">
//         Digamber
//       </text>
//       <text x="240" y="170" fontFamily="Arial, sans-serif" fontSize="56" fontWeight="700" fill="#db2777">
//         Mart
//       </text>
//       <line x1="242" y1="188" x2="560" y2="188" stroke="#f9a8d4" strokeWidth="3" />
//       <text x="242" y="212" fontFamily="Arial, sans-serif" fontSize="16" fill="#6b7280" letterSpacing="2">
//         EVERYDAY ESSENTIALS, DELIVERED
//       </text>
//     </svg>
//   );
// };

// export default Logo;

const Logo = ({ className = "h-14 w-auto" }) => {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Digamber Mart logo"
    >
      <circle cx="80" cy="100" r="62" fill="#fdf2f8" stroke="#db2777" strokeWidth="3" />
      <g
        transform="translate(45,72)"
        stroke="#db2777"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0 L8 0 L16 42 L58 42 L66 14 L14 14" />
        <circle cx="22" cy="56" r="5" fill="#db2777" stroke="none" />
        <circle cx="52" cy="56" r="5" fill="#db2777" stroke="none" />
      </g>
      <text x="180" y="88" fontFamily="'Baloo 2', sans-serif" fontSize="48" fontWeight="700" fill="#1f2937">
        Digamber
      </text>
      <text x="180" y="142" fontFamily="'Baloo 2', sans-serif" fontSize="48" fontWeight="700" fill="#db2777">
        Mart
      </text>
    </svg>
  );
};

export default Logo;

// const Logo = ({ className = "h-14 w-auto" }) => {
//   return (
//     <svg
//       viewBox="0 0 680 200"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       role="img"
//       aria-label="Digamber Mart logo"
//     >
//       <circle cx="80" cy="100" r="62" fill="#fdf2f8" stroke="#db2777" strokeWidth="3" />
//       <g
//         transform="translate(45,72)"
//         stroke="#db2777"
//         strokeWidth="4"
//         fill="none"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M0 0 L8 0 L16 42 L58 42 L66 14 L14 14" />
//         <circle cx="22" cy="56" r="5" fill="#db2777" stroke="none" />
//         <circle cx="52" cy="56" r="5" fill="#db2777" stroke="none" />
//       </g>
//         <text x="180" y="88" fontFamily="'Poppins', sans-serif" fontSize="46" fontWeight="700" fill="#1f2937">
//         Digamber
//       </text>
//       <text x="180" y="140" fontFamily="'Poppins', sans-serif" fontSize="46" fontWeight="700" fill="#db2777">
//         Mart
//       </text>
//     </svg>
//   );
// };

// export default Logo;