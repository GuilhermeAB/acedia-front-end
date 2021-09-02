import type {GetterTree} from 'vuex';
import type {RootState} from '..';
import type {LoadingStateType} from './state';

const getters: GetterTree<LoadingStateType, RootState> = {
  isLoading: state => state.isLoading
};

export default getters;
