import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import { Picker_Picture, API_Picture } from '../api/types'
import SelectedImage from '../private/SelectedImage'

type ImageGalleryPickerProps = {
    onClose: () => void
    onSubmit: (picture: Picker_Picture) => void
}

const ImageGalleryPicker = ({ onClose, onSubmit }: ImageGalleryPickerProps) => {
    const [selectedPicture, setSelectedPicture] =
        useState<null | Picker_Picture>(null)
    const [pictures, setPictures] = useState<Array<API_Picture>>([])

    async function getPicture() {
        // [TODO] Fetch picture
    }
    function handleOnClick(picture: Picker_Picture) {
        setSelectedPicture(picture)
    }

    const imageRenderer = useCallback(
        ({ index, left, top, key, photo }) => (
            <SelectedImage
                onClick={handleOnClick}
                selected={
                    selectedPicture ? selectedPicture.id === photo.id : false
                }
                key={key}
                margin={'2px'}
                index={index}
                photo={photo}
                left={left}
                top={top}
            />
        ),
        [selectedPicture]
    )

    function handleOnSubmit() {
        onClose()
        if (selectedPicture) {
            onSubmit(selectedPicture)
        }
    }

    const rawPictures = pictures.map((picture) => ({
        src: picture.download_url,
        width: 4,
        height: 3,
        id: picture.id,
    }))

    return (
        <div className="modal post-image-modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Select a picture</p>
                    <button
                        className="delete"
                        aria-label="close"
                        onClick={onClose}
                    />
                </header>
                <section className="modal-card-body">
                    <Gallery photos={rawPictures} renderImage={imageRenderer} />
                </section>
                <footer className="modal-card-foot">
                    <button
                        disabled={!!!selectedPicture}
                        className="button is-success"
                        onClick={handleOnSubmit}
                    >
                        Save changes
                    </button>
                    <button className="button" onClick={onClose}>
                        Cancel
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default ImageGalleryPicker
