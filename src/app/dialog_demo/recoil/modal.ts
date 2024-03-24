"use client"

import { atomFamily } from 'recoil'

export type ModalType =
  | 'contact'
  | 'faq'
  | 'confirm'
export const ModalVisibilityState = atomFamily({
  key: 'ModalVisibilityState',
  default: false,
})
