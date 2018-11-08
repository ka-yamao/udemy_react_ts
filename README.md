## 最短で学ぶ React と Redux の基礎から実践まで

- 動画

  - https://www.udemy.com/react-redux-from-beginning/

- 完成ソース

  - https://github.com/muratayusuke/udemy_react

React のラーニングでお世話になった動画です。学習で作成したソースコードをメモしました。

### 地図の表示について

- section3-22 あたりから地図を使います。index.html の Google マップ API のパラメータ`key`のところへ GoogleAPI キーを設定する。

  - `<script src="https://maps.googleapis.com/maps/api/js?key=取得したAPIキー設定する"></script>`

- GoogleAPI キーの取得方法は以下が参考になるかと思います。

  - https://maps.multisoup.co.jp/blog/2967/

### API キーについて

section3-26 から.env ファイルの値を使ってます。udemy の動画では使用してませんが、API キーなどを使うところがあるので、認証情報`.env`ファイルで設定して 基本的には github にはアップしてません。

- env ファイルを作成
  `cp .env.sample .env`

```
GOOGLE_MAP_API_KEY=Google の API キーを設定
RAKUTEN_APP_ID=楽天の API ID を設定
```

- ただ index.html には API キーはべた書きしてる。

### React Router ドキュメント

- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
