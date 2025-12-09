import { Howl } from 'howler'

type AudioKeys = 'background' | 'chime'

const audioSources: Record<AudioKeys, string> = {
  background: '/assets/audio/background-piano.mp3',
  chime: '/assets/audio/gift-chime.mp3',
}

const sounds: Partial<Record<AudioKeys, Howl>> = {}

export function preloadAudio() {
  ;(Object.keys(audioSources) as AudioKeys[]).forEach((key) => {
    if (!sounds[key]) {
      sounds[key] = new Howl({
        src: [audioSources[key]],
        preload: true,
        volume: key === 'background' ? 0.7 : 1,
        loop: key === 'background',
        html5: true,
      })
    }
  })
}

export function playSound(key: AudioKeys) {
  const sound = sounds[key]
  if (!sound) return
  if (key === 'background') {
    if (!sound.playing()) {
      sound.play()
    }
  } else {
    sound.play()
  }
}

export function stopSound(key: AudioKeys) {
  const sound = sounds[key]
  if (!sound) return
  sound.stop()
}


