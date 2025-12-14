import React, { useRef } from 'react'
import Modal from '../../components/Modal/Modal'
import './Audio.css'

export default function AudioPopup({ ModalOpen, CloseModal, AudioURL }) {
  const audioRef = useRef(null)
  const handleClose = () => {
    CloseModal();
    if (audioRef.current && !audioRef.current.paused) {
      // Pause the audio
      audioRef.current.pause();
    }

  }
  return (
    <>
      {/* "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" */}
      <Modal isOpen={ModalOpen} onClose={handleClose} audio={'modal-md'} >
        <div className='audio-container audio-bolg text-center'>
          <audio controlsList="nodownload" controls ref={audioRef}>
            <source src={AudioURL} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio></div>
      </Modal>
    </>
  )
}
