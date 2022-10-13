import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';

import hljs from 'highlight.js';

VMdPreview.use(githubTheme, { Hljs: hljs });
VMdPreview.use(createEmojiPlugin());
VMdPreview.use(createCopyCodePlugin());

export default VMdPreview;
