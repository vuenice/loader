import { DefineComponent } from 'vue';

declare const CommonLoader: DefineComponent<{
  size: number;
  color: string;
  duration: number;
}, {}, any>;

export default CommonLoader;