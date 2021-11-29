// 取得したAPI
const API_KEY = "f8c2869feba6943b7b27273d4c8ec451";

$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。');
    });
  });
});


// ・「検索」ボタンは、index.htmlファイルで<button id="btn">で設定しているので、script.jsファイルでは$('#btn')で取得する。
// ・.on('click', function()は、「検索」ボタンがクリックされたときの処理を、それ以後の行に記述する。

// ・$.ajax()は、Ajaxを実装するメソッド。
// 　　→オプション（パラメータ）も設定でき、今回は、urlとdataTypeの2つを設定している。
// ・url:では、APIにリクエストするURLを指定。（https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=f8c2869feba6943b7b27273d4c8ec451）
// 　　→$('#cityname').val()で#citynameの値を受け取り、URLを結合させている。（val()は、HTMLのvalue属性を取得するメソッド）
// ・$('#cityname').val()で#citynameの値を受け取り、URLを結合させている。
// 　　→今回はJSONで受け取りたいので、 dataType : 'jsonp',と記述。

// ・.done()は通信に成功した場合、.fail()は失敗した場合に記述するメソッド。


// ・$('#id名').text(JSONから欲しい値)の形で指定すると、指定したidのテキストを、JSONから受け取った値に変換される。
// 　　→"data.JSONのオブジェクト名.プロパティ名"で取得。
// 　　→さらに、$(要素名).attr(属性名,値);と指定すると、img要素にsrc属性とalt属性が追加される。
// 　　→アイコンを取得するURLは、http://openweathermap.org/img/w/"アイコン名".png

