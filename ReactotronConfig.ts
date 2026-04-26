import { storage } from '@/helpers';
import reactotron from 'reactotron-react-native';
import Reactotron from 'reactotron-react-native';
import type { ReactotronReactNative } from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';

// Use localhost + ADB reverse so Reactotron works in emulator offline mode
Reactotron.configure({
  name: 'DiyetFit App',
})
  .useReactNative() // add all built-in react native plugins
  .use(mmkvPlugin<ReactotronReactNative>({ storage }))
  .connect();

declare global {
  interface Console {
    tron?: typeof reactotron;
  }
}

if (__DEV__) {
  // Preserve original console methods so logs still reach logcat/Flipper
  const originalConsoleLog = console.log;
  const originalConsoleWarn = console.warn;
  const originalConsoleError = console.error;

  console.log = (...args: any[]) => {
    originalConsoleLog?.(...args);
    reactotron.log?.apply(reactotron, args);
  };

  console.warn = (...args: any[]) => {
    originalConsoleWarn?.(...args);
    reactotron.warn?.apply(reactotron, args as any);
  };

  console.error = (...args: any[]) => {
    originalConsoleError?.(...args);
    reactotron.error?.apply(reactotron, args as any);
  };
}
