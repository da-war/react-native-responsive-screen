// packages
import { Dimensions, PixelRatio } from 'react-native';

// Retrieve initial screen dimensions
const { width: initialScreenWidth, height: initialScreenHeight } = Dimensions.get('window');

// Cache screen dimensions
let screenWidth = initialScreenWidth;
let screenHeight = initialScreenHeight;

/**
 * Converts provided percentage of screen width to independent pixel (dp).
 * @param  {string|number} widthPercent The percentage of screen width (e.g., '50%').
 * @return {number}                     The calculated dp based on the current screen width.
 */
const widthPercentageToDP = (widthPercent) => {
  const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

/**
 * Converts provided percentage of screen height to independent pixel (dp).
 * @param  {string|number} heightPercent The percentage of screen height (e.g., '50%').
 * @return {number}                      The calculated dp based on the current screen height.
 */
const heightPercentageToDP = (heightPercent) => {
  const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

/**
 * Sets up an event listener for orientation changes and updates screen dimensions.
 * @param {object} that The component instance to call setState on.
 */
const listenOrientationChange = (that) => {
  const handleDimensionsChange = ({ window }) => {
    screenWidth = window.width;
    screenHeight = window.height;

    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape'
    });
  };

  Dimensions.addEventListener('change', handleDimensionsChange);
};

/**
 * Removes the orientation change listener to prevent memory leaks.
 * Should be called in componentWillUnmount.
 */
const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', handleDimensionsChange);
};

export {
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener,
};
