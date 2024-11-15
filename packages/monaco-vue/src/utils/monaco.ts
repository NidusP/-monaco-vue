import loader from '@monaco-editor/loader';
import * as monaco from 'monaco-editor';

loader.config({
  monaco,
});

const cancelable = loader.init();
export const getMonaco = () => cancelable;
