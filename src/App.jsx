import './App.css'
import { SoundButton } from './components/SoundButton'

function App() {
	const rain = new Audio('https://cdn.pixabay.com/download/audio/2022/03/12/audio_d7ae5e8d5a.mp3?filename=rain_loop-51858.mp3')
	const water = new Audio('https://cdn.pixabay.com/audio/2022/02/07/audio_6666f206aa.mp3')
	const campfire = new Audio('https://cdn.pixabay.com/audio/2022/09/10/audio_113b247b69.mp3')

	return (
		<div className='flex gap-2'>
			<SoundButton name='Rain' sound={rain} />
			<SoundButton name='Water' sound={water} />
			<SoundButton name='Campfire' sound={campfire} />
		</div>
	)
}

export default App
