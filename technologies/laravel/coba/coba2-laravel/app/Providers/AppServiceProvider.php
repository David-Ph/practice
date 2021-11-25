<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Pagination\Paginator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // use bootstrap instead of tailwind
        Paginator::useBootstrap();

        // gate for authorization
        // we can then use this in controller or anywhere else
        Gate::define('admin', function(User $user){
            // return $user->username === 'maomao';
            return $user->is_admin;
        });
    }
}
