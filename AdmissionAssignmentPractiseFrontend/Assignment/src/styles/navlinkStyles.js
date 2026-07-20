const navlinkStyles = ({ isActive }) =>
  `px-5 py-2 flex items-center h-full text-xl font-medium transition-all duration-300 ${
    isActive
      ? "bg-emerald-700 text-white"
      : "text-white/90 hover:bg-white/20 hover:text-white"
  }`;

export default navlinkStyles;