import { useState } from 'react'

export const SoundButton = ({ sound, name }) => {
	const [play, setPlay] = useState(false)

	const handlePlay = () => {
		if (sound.paused) {
			sound.play()
			setPlay(true)
			return
		}
		sound.pause()
		setPlay(false)
	}

	return (
		<button className={play ? 'bg-green-500' : ''} onClick={handlePlay}>
			<p>{name}</p>
		</button>
	)
}
