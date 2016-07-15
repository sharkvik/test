<?php
/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 15.07.2016
 * Time: 21:07
 */?>
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
<script src="./script/testEditor.js"></script>
