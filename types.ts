export enum InteractionState {
  IDLE = 'IDLE',
  COLLAPSED = 'COLLAPSED', // Fist
  EXPANDED = 'EXPANDED',   // Open Palm
  ZOOMED = 'ZOOMED'        // Pinch/Grab
}

export interface TreeState {
  interactionState: InteractionState;
  rotationVelocity: number;
  setInteractionState: (state: InteractionState) => void;
  setRotationVelocity: (velocity: number) => void;
  handPresent: boolean;
  setHandPresent: (present: boolean) => void;
}

export interface ParticleData {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  offset: number;
}
