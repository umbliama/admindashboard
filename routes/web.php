<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('main');
});

Route::get('/api/news', "NewsController@index");

Auth::routes();


Route::get('/{view?}', function () {
    return view('main');
})->where('view', '(.*)');

