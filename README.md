# reading-recorder
読んだ書籍の読了日と感想を記録し、いつでも振り返ることができるサービスです

※[これからはじめるReact実践入門](https://www.sbcr.jp/product/4815619480/)を参考に作成しています


## 概要
読んだ書籍の読了日と感想を記録し、いつでも振り返ることができるサービスです
[![Image from Gyazo](https://i.gyazo.com/22d90636f9c0946eabd8a5b06b243b81.gif)](https://gyazo.com/22d90636f9c0946eabd8a5b06b243b81)

### 技術
- Next.js:
  - フロントエンドフレームワークであるNext.jsをメインに利用しています。
  - ライブラリは[packege.json](https://github.com/ym5754n/reading-recorder/blob/main/app/package.json)にて確認できます。

- Docker:
  - 今後の拡張･保守を考慮してDocker上に環境を構築しています。

- Vercel: サービスはVercel上でホスティングされています。
  - [こちら](https://ym5754n-reading-recorder.vercel.app/)からアクセスが可能です。
  - ※一時的な公開です。公開停止時期は未定ですが突然見れなくなる可能性があります。

## 今後の課題
- ログイン機能の追加
- ユーザー毎に保存した内容を管理できる機能の追加
- ダークモードへの対応
