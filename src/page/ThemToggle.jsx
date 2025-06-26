 import {useTheme} from '../context/Themecontext'

 export default function ThemeToggle(){
    const {darkMode,ToggleTheme}= useTheme()
    return(
        <button
          onClick={ToggleTheme}  className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
>

     {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    )

 }
 