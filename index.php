<?php
/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 11.07.2016
 * Time: 19:45
 */
?>
<!doctype html>
<html ng-app="testApplication">
    <head>
        <meta charset="utf-8">
        <?this.add_refferences();?>
    </head>
    <body ng-controller="EditorController">
        <input type="hidden" ng-model="mode" value="<?echo $_GET['mode']?>" />
        <ul>
            <li>
                <label>
                    <input type="radio" name="mode" value="0" ng-model="mode"/>
                    Карта
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="mode" value="1" ng-model="mode"/>
                    Редактор
                </label>
            </li>
        </ul>
        <div ng-include="loadContent()" onload="init()"></div>
        <script src="./script/index.js"></script>
    </body>
</html>
<?

function add_refferences()
{
    ?>
        <script src="script/framework/jquery-3.0.0.min.js"></script>
        <script src="script/framework/angular.min.js"></script>
        <script src="script/framework/angular-sanitize.min.js"></script>
        <script src="script/framework/ckeditor/ckeditor.js"></script>
        <script src="script/framework/ckeditor/adapter.jquery.js"></script>
        <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
    <?
}