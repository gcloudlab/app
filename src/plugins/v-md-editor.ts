import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';

import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});
VMdEditor.use(createEmojiPlugin());
VMdEditor.use(createCopyCodePlugin());

export default VMdEditor;
