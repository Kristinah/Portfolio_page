/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      primary: '#ffffffff', // Raspberry
      secondary: '#334155', // bg-slate-700
      background: '#1E293B', // bg-slate-800
      text: '#9CA3AF', // text-gray-400
      alttext: 'rgb(74 222 128)',
      hover: '#334155', // bg-slate-700
  },
    },
  },
  plugins: [],
}
///text-gray-400 bg-slate-800 previous
// alternative
// primary: '#E30B5D', // Raspberry
//        secondary: '#E89EB8', // Pale Pink
//        background: '#FDFBD4', // Cream
//        text: '#810c39ff', // dark raspberry
//        accent: '#ADEBB3', // MintGreen*/


// primary: '#E30B5D', // Raspberry
//        secondary: '#334155', // bg-slate-700
//        background: '#1E293B', // bg-slate-800
//        text: '#9CA3AF', // text-gray-400
//        alttext: 'rgb(74 222 128)',
//        hover: '#334155', // bg-slate-700
//      },