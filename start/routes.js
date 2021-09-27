'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')

Route.group(() => {

  Route.get('/', 'TaskController.index')
  Route.get('/details/:slug', 'TaskController.detail')

  Route.get('/edit/:slug', 'TaskController.edit')
  Route.on('/add').render('add')

  Route.post('/add', 'TaskController.store')
  Route.post('/remove/:slug', 'TaskController.remove')
  Route.post('/update/:slug', 'TaskController.update')

}).prefix('/tasks')
