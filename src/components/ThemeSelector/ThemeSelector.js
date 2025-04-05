import { useTheme } from '../../hooks/useTheme'
import themeToggle from '../../assets/theme-toggle.png'

import './ThemeSelector.css'

const themeColors = ["purple", "green", "orange"]

const ThemeSelector = () => {
    const { changeColor, changeMode, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }

    console.log(mode)

    return (
        <div className="theme-selector">
            <div className="mode-toggle">
                
                <img
                    src={themeToggle}
                    onClick={toggleMode}
                    alt="Dark/Light Mode Toggle"
                    style={{ filter: mode === 'dark' ? 'invert(20%)' : 'invert(100%)'}}
                />
            </div>
            <div className="theme-buttons">
                {themeColors.map(color => (
                    <div 
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color}}
                    />
                ))}
            </div>
        </div>
    )
}

export default ThemeSelector