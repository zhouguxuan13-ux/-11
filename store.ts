import { create } from 'zustand';
import { TreeState, InteractionState } from './types';

export const useTreeStore = create<TreeState>((set) => ({
  interactionState: InteractionState.EXPANDED,
  rotationVelocity: 0,
  handPresent: false,
  setInteractionState: (state) => set({ interactionState: state }),
  setRotationVelocity: (velocity) => set({ rotationVelocity: velocity }),
  setHandPresent: (present) => set({ handPresent: present }),
}));
