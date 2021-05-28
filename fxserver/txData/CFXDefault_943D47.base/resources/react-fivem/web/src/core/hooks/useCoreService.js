import { useSetRecoilState, useRecoilValue, atom } from 'recoil';
import { useNuiEvent } from 'fivem-nui-react-lib';

const coreState = {
  visibility: atom({
    key: 'coreStateHidden',
    default: false
  }),
  phone: atom({
    key: 'corePhoneStateHidden',
    default: false
  })
};

export const useVisibility = () => useRecoilValue(coreState.visibility);
export const usePhoneVisibility = () => useRecoilValue(coreState.phone);

export const useCoreService = () => {
  const setShowHide = useSetRecoilState(coreState.visibility);
  useNuiEvent('react-fivem', 'setVisibility', setShowHide);
  return useVisibility();
};

export const usePhoneService = () => {
  const setPhoneShowHide = useSetRecoilState(coreState.phone);
  useNuiEvent('react-fivem', 'setPhoneVisibility', setPhoneShowHide);
  return usePhoneVisibility();
};
