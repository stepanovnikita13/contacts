import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'

export const useDispatch: () => AppDispatch = useAppDispatch
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector