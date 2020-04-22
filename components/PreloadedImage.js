// Module imports
import React, {
  useEffect,
  useState,
} from 'react'
import PropTypes from 'prop-types'





const PreloadedImage = props => {
  const {
    height,
    source,
    width,
  } = props
  const [imageSource, setImageSource] = useState(null)

  useEffect(() => {
    (async () => {
      const image = new Image

      try {
        image.src = source
        await image.decode()
      } catch (error) {
        console.log(error)
      }

      setImageSource(source)
    })()
  }, [source])

  if (imageSource) {
    return (
      <img src={imageSource} />
    )
  }

  return (
    <div
      className="loading-spinner"
      style={{
        height: height * 4,
        width: width * 4,
      }} />
  )
}

PreloadedImage.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  source: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
}





export { PreloadedImage }
