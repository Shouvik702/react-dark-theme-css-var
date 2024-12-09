import { useState } from 'react';
import ToggleSwitch from './components/toggleSwitch.jsx';

import './App.css';
function App() {
	const [theme, setTheme] = useState('light');
	// ToggleSwitch state
	const [isOn, setIsOn] = useState(false);

	// Switch Theme Function
	const handleToggle = () => {
		setIsOn(!isOn);

		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
	};

	return (
		<>
			<div className='switch-container'>
				<div>
					<i className='fa fa-sun-o'></i>
				</div>
				<ToggleSwitch isOn={isOn} handleToggle={handleToggle} />
				<div>
					<i className='fa fa-moon-o'></i>
				</div>
			</div>
			<div className='page'>
				<h3>Dark Mode Toggle</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					perferendis fugiat, accusantium aspernatur, nam eius voluptatem dolore
					nulla fugit exercitationem enim porro assumenda eveniet possimus non
					atque dicta repellat officia!
				</p>
				<button onClick={handleToggle}>Switch Theme</button>
			</div>
		</>
	);
}

export default App;
