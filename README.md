## 使用方法
ホストはVercelです。
このリポジトリはコンテンツとAppが分離していますのでそれぞれ設定をしないと動きません。
以下にその設定方法を記します。

### 環境変数の設定
先ず、Githubにてパーソナル アクセス トークンを取得する。
取得したパーソナル アクセス トークンを```GITHUB_TOKEN```としてVercelの環境変数に設定する。
プログラム内ではリポジトリのコンテンツを取得するフェッチが動いています。
プライベートでコンテンツを管理している場合は、プライベートコンテンツが見れるように設定をしてください。

### コンテンツのGithubリポジトリの下記項目を環境変数へ設定
環境変数名は
```
GITHUB_TOKEN
OWNER
REPO
DIR
```
の4つです。
最後のファイル名はコード内で取得します。
ファイル名がUrlになります。

### VercelのDeploy Hookを取得
Appの```settings > Git > Deploy Hook```がありますのでそこで取得してコピーしてください。

### Github Web Hookの設定
Vercelで取得したUrlをコンテンツのリポジトリの設定からWeb Hookを設定します。

以上の設定でApp、コンテンツそれぞれで```Build & Deploy```が走ります。
コンテンツをGithubへプッシュした時、Appを修正したときにそれぞれ走るようになっています。

### Build & Deploy コマンド
```
Framework preset    'Next.js'を選択
BUILD COMMAND   override無し
OUTPUT DIRECTORY  override無し
INSTALL COMMAND  override無し
DEVELOPMENT COMMAND override無し
```
デフォルトのままでOKです。
ルートディレクトリ、```Node.js```のバージョンもそのまま(2021/10/6現在)になります。

### 記事コンテンツについて
```blog```なり、```posts```なりディレクトリの中に最低でも１つ記事を用意してください。
ここで使用したディレクトリ名が上で利用する```DIR```の環境変数名になります。

## 注意
内部でGithub Apiのoctokit/restを使用している関係で、１つのディレクトリに対して１０００ファイル。
ファイルサイズは１メガバイトまでの取得となっています。

### 参考
[構成図](https://nuovotaka.com/posts/2021-09-25-Nextjs-Tailwindcss/)

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com)

[![Sponsor Next JS Boilerplate](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://www.buymeacoffee.com/ixartz)
