import { useSetRecoilState, useRecoilValue, atom } from 'recoil';
import { useNuiEvent } from 'fivem-nui-react-lib';

const coreState = {
  visibility: atom({
    key: 'coreStateHidden',
    default: false
  })
};

export const useVisibility = () => useRecoilValue(coreState.visibility);

export const useCoreService = () => {
  const setShowHide = useSetRecoilState(coreState.visibility);
  useNuiEvent('react-fivem', 'setVisibility', setShowHide);
  return useVisibility();
};
