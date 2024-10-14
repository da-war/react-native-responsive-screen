declare module 'react-native-responsive-screen' {
  import { Component } from 'react';

  // Define props and state types if applicable
  interface ScreenClassComponent<Props = {}, State = {}> extends Component<Props, State> {}

  export function widthPercentageToDP(widthPercent: string | number): number;
  export function heightPercentageToDP(heightPercent: string | number): number;

  // Use a more specific type for the screenClassComponent parameter
  export function listenOrientationChange(screenClassComponent: ScreenClassComponent): void;
  
  // Indicate that this function does not take any parameters
  export function removeOrientationListener(): void;
}
