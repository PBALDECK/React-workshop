import React, { useState, useEffect } from 'react'
import { RenderImageProps } from 'react-photo-gallery'
import CSS from 'csstype'
import { Picker_Picture } from '../api/types'
import Checkmark from './Checkmark'

const imgStyle = {
    height: '100%',
    transition:
        'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s',
}
const selectedImgStyle = {
    transform: 'translateZ(0px) scale3d(0.9, 0.9, 1)',
    transition:
        'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s',
}
type Cont = {
    left?: number | undefined
    top?: number | undefined
    backgroundColor: CSS.Properties['backgroundColor']
    cursor: CSS.Properties['cursor']
    overflow: CSS.Properties['overflow']
    position: CSS.Properties['position']
}
const cont: Cont = {
    backgroundColor: '#eee',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
}

type SelectedImageProps = {
    index: number
    margin: CSS.Properties['margin']
    direction?: RenderImageProps['direction']
    selected: boolean
    photo: Picker_Picture
    top: RenderImageProps['top']
    left: RenderImageProps['left']
    onClick: (picture: Picker_Picture) => void
}

const SelectedImage = ({
    photo,
    margin,
    direction,
    top,
    left,
    selected,
    onClick,
}: SelectedImageProps) => {
    const [isSelected, setIsSelected] = useState(selected)
    //calculate x,y scale
    const sx = (100 - (30 / photo.width) * 100) / 100
    const sy = (100 - (30 / photo.height) * 100) / 100
    selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`

    if (direction === 'column') {
        cont.position = 'absolute'
        cont.left = left
        cont.top = top
    }

    const handleOnClick = (
        e: React.MouseEvent<HTMLImageElement, MouseEvent>
    ) => {
        setIsSelected(!isSelected)
        onClick(photo)
    }

    useEffect(() => {
        setIsSelected(selected)
    }, [selected])

    return (
        <div
            style={{
                margin,
                height: photo.height,
                width: photo.width,
                ...cont,
            }}
            className={!isSelected ? 'not-selected' : ''}
        >
            <Checkmark selected={isSelected ? true : false} />
            <img
                style={
                    isSelected
                        ? { ...imgStyle, ...selectedImgStyle }
                        : { ...imgStyle }
                }
                {...photo}
                onClick={handleOnClick}
            />
            <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
        </div>
    )
}

export default SelectedImage
