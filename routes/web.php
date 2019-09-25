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


Auth::routes();

Route::delete('users/delete/{id}', 'UserController@destroy');
Route::post('users/create', 'UserController@store');

Route::get('/{view?}', function () {
    return view('main');
})->where('view', '(.*)');

