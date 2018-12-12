## 最短で学ぶ React と Redux の基礎から実践まで

- 動画

  - https://www.udemy.com/react-redux-from-beginning/

- 完成ソース
  - https://github.com/muratayusuke/udemy_react

React のラーニングでお世話になった動画です。学習で作成したソースコードをメモしました。

### 初めに

- section3-22 から Google マップを使います。GoogleAPI キーが必要となります。
- GoogleAPI キーの取得方法は以下が参考になるかと思います。

  - https://maps.multisoup.co.jp/blog/2967/

- section3-29 から楽天トラベルの API を使います。あらかじめ、API キーを取得しておきます。
  - https://webservice.rakuten.co.jp/app/create
  - https://webservice.rakuten.co.jp/api/simplehotelsearch/

### API キーについて

- 勉強したソースコードを Github で公開してますが、API キーのべた書きはよくないので、このリポジトリでは「.env」ファイルに設定しました。動画での設定方法と少しことなります。

- .env ファイルを作成方法
  `cp .env.sample .env`

```
GOOGLE_MAP_API_KEY=Google の API キーを設定
RAKUTEN_APP_ID=楽天の API ID を設定
```

- `dotenv`のパッケージで`.env`の内容を読み込んで使ってます。

### ブランチ

- 動画の各セクション、ユニットごとでブランチを切ってます。途中見逃したソースなどあれば参考に使ってください。

### React Router ドキュメント

- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

### TypeScript について

- TypeScript を学習中で、セクションの区切りで TypeScrip 変換バージョンのブランチ（末尾に「-ts」がついてるブランチ）もあります。お作法もあいまいなまま実装。
