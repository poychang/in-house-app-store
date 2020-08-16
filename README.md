# InHouseAppStore 發布內部使用之 APP 網站

## 操作說明

### 新增 APP 下載操作步驟：

* 開啟 `.\js\data.json`
* 在陣列中新增資料，資料範本如下：

```json
{
	"enable": true,
	"platform": "apple",
	"appname": "Your App Name",
	"appicon": "img/appicon_iCSApp.png",
	"version": "V0.4",
	"deviceos": "iOS 8.0 以上",
	"releasedate": "2016/04/27",
	"downloadlink": "itms-services://?action=download-manifest&url=https://ios.seec.com.tw/app/iCSApp/apple/V040/iCSAppiOS.plist"
}
```

## 函式庫

* JQuery
 * 使用版本：2.1.3
* MixItUp.js
 * 使用版本：2.1.11
 * 主要是用 [MixItUp.js](https://mixitup.kunkalabs.com/) 完成介面設計
* AngulrJS
 * 使用版本：>= 1.5.0
* Bootstrap
 * 使用版本：3.3.6
* Font Awesome
 * 使用版本：4.5.0

## 授權

* MixItUp.js
 * 參考官網[授權介紹](https://mixitup.kunkalabs.com/licenses/)
 * 授權給非商業專案使用
 * 官網 License FAQs 內文定義非接受經濟補償或計畫收取費用之專案，為非商業專案