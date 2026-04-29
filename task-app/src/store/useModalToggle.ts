import { create } from "zustand";

type ModalState = {
  showModal: boolean
  setShowModal: (value: boolean) => void
}

export const useModalToggle = create<ModalState>(set => {
  return {
    showModal: false,
    setShowModal(value: boolean) {
      set({ showModal: value })
    }
  }
})