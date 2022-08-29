import type { MessageReactive, MessageOptions } from 'naive-ui';
import { VNodeChild } from 'vue';

declare type ContentType = string | (() => VNodeChild);
declare global {
  interface Window {
    $message: {
      success: (content: ContentType, options?: MessageOptions) => MessageReactive;
      info: (content: ContentType, options?: MessageOptions) => MessageReactive;
      warning: (content: ContentType, options?: MessageOptions) => MessageReactive;
      error: (content: ContentType, options?: MessageOptions) => MessageReactive;
    };
  }
}
