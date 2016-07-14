<?php
/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 11.07.2016
 * Time: 19:45
 */
?>
<!doctype html>
<html ng-app="testEditor">
    <head>
        <meta charset="utf-8">
        <?this.add_refferences();?>
    </head>
    <body ng-controller="testEditorController">
            <div>
                <div class="page-header">
                    <h1>Найди меня</h1>
                </div>
                <div id="map" style="width: 600px; height: 400px"></div>
            </div>
            <div>
                <div class="panel">
                    <div class="page-header">
                        <h1>Отредактируй меня</h1>
                    </div>
                    <form method="get">
                        <textarea id="texteditor" ng-keyup="update()"></textarea>
                        <input type="submit">
                    </form>
                </div>
                <div ng-bind-html="text"></div>
            </div>
        <script src="./script/testEditor.js"></script>
        <script src="./script/yaMap.js"></script>
    </body>
</html>
<?

function add_refferences()
{
    ?>
        <script src="./script/jquery-3.0.0.min.js"></script>
        <script src="./script/angular.min.js"></script>
        <script src="./script/angular-sanitize.min.js"></script>
        <script src="./script/ckeditor/ckeditor.js"></script>
        <script src="./script/ckeditor/adapter.jquery.js"></script>
        <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
    <?
}