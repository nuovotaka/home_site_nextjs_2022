import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="About" description="自分の琴線にふれたモノを勝手に紹介していくサイトです。分かりやすく言うと衝撃を受けたモノということです" />}>
    <Content>
      <p>
        「NUOVO」はイタリア語で「新しい」を意味し、「TAKA」は呼称です。
      </p>
      <p>
        なぜ「新しい」をつけたのか？
      </p>
      <p>
        実はある日突然、右足が動かなくなり「この先どうなるのだろう？」
      </p>
      <p>
        不安が頭をよぎりその後なんとか歩ける様になりました。
      </p>
      <p>
        そこで、「新しい」何かに挑戦しようと、今までの「好きな事」x「やってきた事」x「新しい」を組み合わせ挑戦中です
      </p>
    </Content>
  </Main>
);

export default About;
